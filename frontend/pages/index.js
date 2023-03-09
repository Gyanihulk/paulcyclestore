import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import HeroSection from "../components/home/HeroSection";

import "bootstrap/dist/css/bootstrap.min.css";
import Services from "../components/home/Services";
import ShopGrid from "../components/home/ShopGrid";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
   
      <Header />
      <HeroSection />
      <i class="bi bi-twitter"/>
      <ShopGrid />

      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
