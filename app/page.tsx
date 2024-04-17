import GalleryCarousel from "@/components/GalleryCarousel";
import LatestWork from "@/components/LatestWork";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <GalleryCarousel />
      <LatestWork />
    </div>
  );
}
