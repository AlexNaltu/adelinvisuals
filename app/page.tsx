import GalleryCarousel from "@/components/GalleryCarousel";
import Hero from "@/components/Hero";
import LatestWork from "@/components/LatestWork";
import VisualsImg from "@/components/VisualsImg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <GalleryCarousel />
      <LatestWork />
      <VisualsImg />
    </div>
  );
}
