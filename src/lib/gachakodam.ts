import kodamImages from "@/lib/image_kodam";
import { StaticImageData } from "next/image";

export type kodam = {
  kode: string;
  nama_kodam: string;
  deskripsi: string;
  image: StaticImageData;
};
export type kodamDs = {
  kode: string;
  nama_kodam: string;
  deskripsi: string;
};

const gachakodam = () => {
  const dataSet: kodamDs[] = [
    {
      kode: "KDM001",
      nama_kodam: "Kodam Ayam Jantan",
      deskripsi:
        "Pasukan yang kuat dan berani seperti ayam jantan. Kelebihan: Cepat dan tangguh. Kekurangan: Mudah terprovokasi. Musuh: Kodam Rubah Licik. Teman: Kodam Sapi Tenang.",
    },
    {
      kode: "KDM002",
      nama_kodam: "Kodam Kucing Manis",
      deskripsi:
        "Pasukan yang gesit dan lucu seperti kucing. Kelebihan: Cerdas dan lincah. Kekurangan: Sering mengantuk. Musuh: Kodam Anjing Galak. Teman: Kodam Tikus Pintar.",
    },
    {
      kode: "KDM003",
      nama_kodam: "Kodam Buaya Darat",
      deskripsi:
        "Pasukan yang ganas dan berbahaya seperti buaya. Kelebihan: Kuat dan tak kenal takut. Kekurangan: Lambat di darat. Musuh: Kodam Singa Padang. Teman: Kodam Kura-Kura Bijak.",
    },
    {
      kode: "KDM004",
      nama_kodam: "Kodam Bebek Ceria",
      deskripsi:
        "Pasukan yang riang dan selalu optimis seperti bebek. Kelebihan: Semangat tinggi dan tangguh. Kekurangan: Kadang ceroboh. Musuh: Kodam Ular Berbisa. Teman: Kodam Ikan Pemberani.",
    },
    {
      kode: "KDM005",
      nama_kodam: "Kodam Kelinci Cepat",
      deskripsi:
        "Pasukan yang cepat dan lincah seperti kelinci. Kelebihan: Sangat cepat dan gesit. Kekurangan: Mudah panik. Musuh: Kodam Serigala Jahat. Teman: Kodam Kambing Penurut.",
    },
    {
      kode: "KDM006",
      nama_kodam: "Kodam Harimau Pemberani",
      deskripsi:
        "Pasukan yang kuat dan pemberani seperti harimau. Kelebihan: Sangat kuat dan berani. Kekurangan: Cenderung penyendiri. Musuh: Kodam Gajah Kuat. Teman: Kodam Elang Gagah.",
    },
    {
      kode: "KDM007",
      nama_kodam: "Kodam Anjing Setia",
      deskripsi:
        "Pasukan yang setia dan tangguh seperti anjing. Kelebihan: Setia dan tangguh. Kekurangan: Kadang terlalu agresif. Musuh: Kodam Kucing Manis. Teman: Kodam Kuda Lincah.",
    },
    {
      kode: "KDM008",
      nama_kodam: "Kodam Burung Merak",
      deskripsi:
        "Pasukan yang indah dan mempesona seperti merak. Kelebihan: Menarik perhatian dan elegan. Kekurangan: Kadang terlalu sombong. Musuh: Kodam Ular Berbisa. Teman: Kodam Angsa Anggun.",
    },
    {
      kode: "KDM009",
      nama_kodam: "Kodam Sapi Tenang",
      deskripsi:
        "Pasukan yang tenang dan sabar seperti sapi. Kelebihan: Sabar dan kuat. Kekurangan: Kurang lincah. Musuh: Kodam Banteng Galak. Teman: Kodam Ayam Jantan.",
    },
    {
      kode: "KDM010",
      nama_kodam: "Kodam Gajah Bijak",
      deskripsi:
        "Pasukan yang bijak dan kuat seperti gajah. Kelebihan: Bijak dan kuat. Kekurangan: Lambat. Musuh: Kodam Harimau Pemberani. Teman: Kodam Badak Tangguh.",
    },
    {
      kode: "KDM011",
      nama_kodam: "Kodam Singa Padang",
      deskripsi:
        "Pasukan yang kuat dan berani seperti singa. Kelebihan: Berani dan kuat. Kekurangan: Kadang terlalu percaya diri. Musuh: Kodam Buaya Darat. Teman: Kodam Harimau Pemberani.",
    },
    {
      kode: "KDM012",
      nama_kodam: "Kodam Kuda Lincah",
      deskripsi:
        "Pasukan yang lincah dan cepat seperti kuda. Kelebihan: Lincah dan cepat. Kekurangan: Kadang terlalu tergesa-gesa. Musuh: Kodam Anjing Setia. Teman: Kodam Burung Merak.",
    },
    {
      kode: "KDM013",
      nama_kodam: "Kodam Ikan Pemberani",
      deskripsi:
        "Pasukan yang pemberani dan gigih seperti ikan. Kelebihan: Pemberani dan gigih. Kekurangan: Mudah terkejut. Musuh: Kodam Ular Berbisa. Teman: Kodam Bebek Ceria.",
    },
    {
      kode: "KDM014",
      nama_kodam: "Kodam Tikus Pintar",
      deskripsi:
        "Pasukan yang cerdik dan pintar seperti tikus. Kelebihan: Cerdik dan pintar. Kekurangan: Sering takut. Musuh: Kodam Kucing Manis. Teman: Kodam Gajah Bijak.",
    },
    {
      kode: "KDM015",
      nama_kodam: "Kodam Elang Gagah",
      deskripsi:
        "Pasukan yang gagah dan berani seperti elang. Kelebihan: Berani dan pengawas yang baik. Kekurangan: Kadang terlalu sombong. Musuh: Kodam Ular Berbisa. Teman: Kodam Harimau Pemberani.",
    },
    {
      kode: "KDM016",
      nama_kodam: "Kodam Kura-Kura Bijak",
      deskripsi:
        "Pasukan yang bijak dan sabar seperti kura-kura. Kelebihan: Bijak dan sabar. Kekurangan: Lambat. Musuh: Kodam Kelinci Cepat. Teman: Kodam Gajah Bijak.",
    },
    {
      kode: "KDM017",
      nama_kodam: "Kodam Banteng Galak",
      deskripsi:
        "Pasukan yang kuat dan galak seperti banteng. Kelebihan: Sangat kuat. Kekurangan: Kadang sulit dikendalikan. Musuh: Kodam Sapi Tenang. Teman: Kodam Harimau Pemberani.",
    },
    {
      kode: "KDM018",
      nama_kodam: "Kodam Rubah Licik",
      deskripsi:
        "Pasukan yang licik dan cerdik seperti rubah. Kelebihan: Licik dan cerdik. Kekurangan: Kurang bisa dipercaya. Musuh: Kodam Ayam Jantan. Teman: Kodam Tikus Pintar.",
    },
    {
      kode: "KDM019",
      nama_kodam: "Kodam Ular Berbisa",
      deskripsi:
        "Pasukan yang berbisa dan mematikan seperti ular. Kelebihan: Mematikan dan cepat. Kekurangan: Tidak bisa dipercaya. Musuh: Kodam Elang Gagah. Teman: Kodam Tikus Pintar.",
    },
    {
      kode: "KDM020",
      nama_kodam: "Kodam Angsa Anggun",
      deskripsi:
        "Pasukan yang anggun dan elegan seperti angsa. Kelebihan: Elegan dan tenang. Kekurangan: Kadang terlalu lembut. Musuh: Kodam Burung Merak. Teman: Kodam Burung Hantu.",
    },
    {
      kode: "KDM021",
      nama_kodam: "Kodam Serigala Jahat",
      deskripsi:
        "Pasukan yang jahat dan ganas seperti serigala. Kelebihan: Ganas dan cepat. Kekurangan: Tidak bisa dipercaya. Musuh: Kodam Kelinci Cepat. Teman: Kodam Anjing Setia.",
    },
    {
      kode: "KDM022",
      nama_kodam: "Kodam Kambing Penurut",
      deskripsi:
        "Pasukan yang penurut dan setia seperti kambing. Kelebihan: Penurut dan sabar. Kekurangan: Mudah dipengaruhi. Musuh: Kodam Harimau Pemberani. Teman: Kodam Kelinci Cepat.",
    },
    {
      kode: "KDM023",
      nama_kodam: "Kodam Badak Tangguh",
      deskripsi:
        "Pasukan yang tangguh dan kuat seperti badak. Kelebihan: Tangguh dan kuat. Kekurangan: Lambat. Musuh: Kodam Singa Padang. Teman: Kodam Gajah Bijak.",
    },
    {
      kode: "KDM024",
      nama_kodam: "Kodam Burung Hantu",
      deskripsi:
        "Pasukan yang bijaksana dan cerdas seperti burung hantu. Kelebihan: Bijaksana dan cerdas. Kekurangan: Mudah lelah. Musuh: Kodam Elang Gagah. Teman: Kodam Angsa Anggun.",
    },
    {
      kode: "KDM025",
      nama_kodam: "Kodam Kupu-Kupu Indah",
      deskripsi:
        "Pasukan yang indah dan lemah lembut seperti kupu-kupu. Kelebihan: Indah dan menenangkan. Kekurangan: Rentan. Musuh: Kodam Burung Merak. Teman: Kodam Burung Hantu.",
    },
  ];
  const randome = dataSet[Math.floor(Math.random() * dataSet.length)];
  const image = kodamImages(randome.kode);
  return { ...randome, image };
};

export { gachakodam };
