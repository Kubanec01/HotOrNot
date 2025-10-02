import type { CharactersData } from "./types";
import mikasaAckermanImg from "../../assets/Mikasa-Ackerman-img.jpg";
import asunaYuukiImg from "../../assets/Asuna-Yuuki-img.jpeg";
import hinataHyugaImg from "../../assets/Hinata-Hyuga-img.jpg";
import zeroTwoImg from "../../assets/Zero-Two-img.jpg";
import makimaImg from "../../assets/Makima-img.webp";
import kusiruMakiseImg from "../../assets/Kurisu-Makise-Img.webp";
import misaAmaneImg from "../../assets/Misa-Amane-img.webp";
import makiZeninImg from "../../assets/Maki-Zenin-Img.jpeg";

export const femaleCharactersData: CharactersData[] = [
  {
    id: "mikasa-ackerman",
    name: "Mikasa Ackerman",
    image: mikasaAckermanImg,
    show: "Attack on Titan",
  },
  {
    id: "asuna-yuuki",
    name: "Asuna Yuuki",
    image: asunaYuukiImg,
    show: "Sword Art Online",
  },
  {
    id: "hinata-hyuga",
    name: "Hinata Hyuga",
    image: hinataHyugaImg,
    show: "Naruto",
  },
  {
    id: "maki-zein",
    name: "Maki Zen'in",
    image: makiZeninImg,
    show: "Jujutsu Kaisen",
  },
  {
    id: "zero-two",
    name: "Zero Two",
    image: zeroTwoImg,
    show: "Darling in the Franxx",
  },
  {
    id: "makima",
    name: "Makima",
    image: makimaImg,
    show: "Chainsaw Man",
  },
  {
    id: "kurisu-makise",
    name: "Kurisu Makise",
    image: kusiruMakiseImg,
    show: "Steins;Gate",
  },
  {
    id: "misa-amane",
    name: "Misa Amane",
    image: misaAmaneImg,
    show: "Death Note",
  },
];
