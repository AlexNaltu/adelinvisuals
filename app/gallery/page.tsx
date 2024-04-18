import GalleryPhotos from "@/components/GalleryPhotos";
import { galleryData } from "@/lib/data";
import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  return (
    <div>
      <GalleryPhotos />
    </div>
  );
};

export default GalleryPage;
