"use client";

import { gachakodam, kodam as KodamType } from "@/lib/gachakodam";
import { useRef, useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import * as htmlToImage from "html-to-image";
import { useSpring, animated } from "@react-spring/web";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [kodam, setKodam] = useState<KodamType | null>(null);
  const [open, setOpen] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const getKodam = () => {
    if (!name.trim()) return inputRef.current?.focus();
    const response = gachakodam();
    setKodam(response);
    triggerAnimation();
  };

  const reGacha = () => {
    setKodam(null);
    setName("");
    setTimeout(() => inputRef.current?.focus(), 500);
  };

  const download = async () => {
    const node = cardRef.current;
    if (!node || !kodam) return;
    htmlToImage.toJpeg(node, { quality: 0.95 }).then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = `${name}-${kodam?.nama_kodam}.jpeg`;
      link.href = dataUrl;
      link.click();
    });
  };

  const [flip, setFlip] = useState(false);
  const [popup, setPopup] = useState(false);
  const [unveil, setUnveil] = useState(false);

  const triggerAnimation = () => {
    setOpen(false);
    setPopup(true);
    setTimeout(() => setPopup(false), 100);
    setTimeout(() => setFlip(true), 300);
  };

  const popupAnimation = useSpring({
    transform: popup ? "scale(0)" : "scale(1)",
    config: { tension: 220, friction: 12 },
  });

  const flipAnimation = useSpring({
    transform: flip ? "rotateY(360deg)" : "rotateY(0deg)",
    config: { duration: 500 }, // Set duration to 0.5s for the flip animation
    onRest: () => {
      setFlip(false);
      setUnveil(true);
      setTimeout(() => setUnveil(false), 1000); // Hide unveil animation after 0.5s
      setTimeout(() => setOpen(true), 1000); // Hide unveil animation after 0.5s
    },
  });

  const unveilAnimation = useSpring({
    transform: unveil ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: "center",
    config: { duration: 500 },
  });

  useEffect(() => {
    console.log(new Date());
  }, [kodam]);

  return (
    <>
      <main className="flex flex-col min-h-screen items-center p-12 md:p-24 bg-gradient-to-bl from-slate-900 to-slate-600">
        <div className="container flex flex-col items-center p-12 md:p-24 ">
          {!kodam && (
            <div className="flex flex-col bg-white p-5 rounded-lg drop-shadow-lg">
              <h1 className="text-2xl text-center font-bold text-black my-6">
                Gacha Kodam
              </h1>
              <input
                ref={inputRef}
                type="text"
                placeholder="Masukan Nama"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                className="btn btn-outline my-5"
                type="button"
                onClick={getKodam}
              >
                Button
              </button>
            </div>
          )}
          {kodam && (
            <animated.div className="flex flex-col" style={popupAnimation}>
              {open && (
                <>
                  <h1 className="text-xl md:text-4xl text-center">
                    🎊congratulation🎊
                  </h1>
                  <div className="relative top-10 md:top-20 right-0 z-10 flex flex-col items-end py-1 md:py-4 pe-5">
                    <button
                      className="btn btn-circle btn-sm md:btn-md bg-white bg-opacity-35 backdrop-blur-md border-white text-white"
                      onClick={download}
                    >
                      <FiDownload />
                    </button>
                  </div>
                </>
              )}
              <animated.div
                className={`flex flex-col bg-white rounded-xl drop-shadow-lg overflow-hidden`}
                ref={cardRef}
                style={flipAnimation}
              >
                <div className={`w-full h-40 md:h-96 overflow-hidden`}>
                  <img
                    src={kodam.image.src}
                    alt="kodamavatar"
                    key={kodam.kode}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-5 flex flex-col gap-4">
                  <p className="md:text-xl text-sm text-center font-bold text-black">
                    {name}
                  </p>
                  <div className="border rounded-lg p-2">
                    <span className="italic text-sm">Kodam</span>
                    <p className="text-black font-bold text-sm">
                      {kodam.nama_kodam}
                    </p>
                  </div>
                  <div className="border rounded-lg p-2">
                    <span className="italic text-sm">Deskripsi</span>
                    <p className="text-black font-bold text-sm">
                      {kodam.deskripsi}
                    </p>
                  </div>
                  <p className="text-xs text-center">
                    {process.env.NEXT_PUBLIC_URL}
                  </p>
                </div>
                {!open && (
                  <div
                    className={`absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-teal-400 to-yellow-200 z-20 h-full w-full`}
                  />
                )}
              </animated.div>
              {open && (
                <button className="btn mt-5 self-center" onClick={reGacha}>
                  Gacha lagi
                </button>
              )}
            </animated.div>
          )}
        </div>
        <footer className="relative left-0 bottom-10 w-full border">
          <div className="flex flex-row gap-2 items-center justify-center text-white my-5">
            Made with ❤️ by{" "}
            <a
              href="https://instagram.com/hamdanhabibi7"
              target="_blank"
              className="text-rose-400"
            >
              {" "}
              @hamdanhabibi7
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
