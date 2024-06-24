import KDM001 from "@/assets/image_kodam/KDM001.jpg";
import KDM002 from "@/assets/image_kodam/KDM002.jpg";
import KDM003 from "@/assets/image_kodam/KDM003.jpg";
import KDM004 from "@/assets/image_kodam/KDM004.jpg";
import KDM005 from "@/assets/image_kodam/KDM005.jpg";
import KDM006 from "@/assets/image_kodam/KDM006.jpg";
import KDM007 from "@/assets/image_kodam/KDM007.jpg";
import KDM008 from "@/assets/image_kodam/KDM008.jpg";
import KDM009 from "@/assets/image_kodam/KDM009.jpg";
import KDM010 from "@/assets/image_kodam/KDM010.jpg";
import KDM011 from "@/assets/image_kodam/KDM011.jpg";
import KDM012 from "@/assets/image_kodam/KDM012.jpg";
import KDM013 from "@/assets/image_kodam/KDM013.jpg";
import KDM014 from "@/assets/image_kodam/KDM014.jpg";
import KDM015 from "@/assets/image_kodam/KDM015.jpg";
import KDM016 from "@/assets/image_kodam/KDM016.jpg";
import KDM017 from "@/assets/image_kodam/KDM017.jpg";
import KDM018 from "@/assets/image_kodam/KDM018.jpg";
import KDM019 from "@/assets/image_kodam/KDM019.jpg";
import KDM020 from "@/assets/image_kodam/KDM020.jpg";
import KDM021 from "@/assets/image_kodam/KDM021.jpg";
import KDM022 from "@/assets/image_kodam/KDM022.jpg";
import KDM023 from "@/assets/image_kodam/KDM023.jpg";
import KDM024 from "@/assets/image_kodam/KDM024.jpg";
import KDM025 from "@/assets/image_kodam/KDM025.jpg";

const kodamImages = (key: string) => {
  const data = [
    {
      kode: "KDM001",
      image: KDM001,
    },
    {
      kode: "KDM002",
      image: KDM002,
    },
    {
      kode: "KDM003",
      image: KDM003,
    },
    {
      kode: "KDM004",
      image: KDM004,
    },
    {
      kode: "KDM005",
      image: KDM005,
    },
    {
      kode: "KDM006",
      image: KDM006,
    },
    {
      kode: "KDM007",
      image: KDM007,
    },
    {
      kode: "KDM008",
      image: KDM008,
    },
    {
      kode: "KDM009",
      image: KDM009,
    },
    {
      kode: "KDM010",
      image: KDM010,
    },
    {
      kode: "KDM011",
      image: KDM011,
    },
    {
      kode: "KDM012",
      image: KDM012,
    },
    {
      kode: "KDM013",
      image: KDM013,
    },
    {
      kode: "KDM014",
      image: KDM014,
    },
    {
      kode: "KDM015",
      image: KDM015,
    },
    {
      kode: "KDM016",
      image: KDM016,
    },
    {
      kode: "KDM017",
      image: KDM017,
    },
    {
      kode: "KDM018",
      image: KDM018,
    },
    {
      kode: "KDM019",
      image: KDM019,
    },
    {
      kode: "KDM020",
      image: KDM020,
    },
    {
      kode: "KDM021",
      image: KDM021,
    },
    {
      kode: "KDM022",
      image: KDM022,
    },
    {
      kode: "KDM023",
      image: KDM023,
    },
    {
      kode: "KDM024",
      image: KDM024,
    },
    {
      kode: "KDM025",
      image: KDM025,
    },
  ];
  return data.filter((f) => f.kode === key)[0]?.image || data[0].image;
};

export default kodamImages;
