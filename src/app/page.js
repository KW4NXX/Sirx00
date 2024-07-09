import Image from "next/image";
import styles from "./page.module.css";
import { Cards } from "./componentes/Card";
import { Carousel } from "./componentes/Carousel";
import { NavigationBar } from "./componentes/Naviaqationbar";
import { Footer } from "./componentes/Footer";

export default function Home() {
  return (
    <>
        <NavigationBar />
        <br />
        <Carousel />
        <br />
        <Cards />
        <Footer />
    </>
  );
}