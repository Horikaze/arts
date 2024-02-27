"use client";
import { useState } from "react";
import ClickedImage from "../sub/ClickedImage";
import ImageElement from "../sub/ImageElement";
import { Art } from "@prisma/client";
export default function Images({ images }: { images: Art[] }) {
  const [modal, setModal] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState("");
  const [currentImageName, setCurrentImageName] = useState("");
  const [currentArtID, setCurrentArtID] = useState("");
  const handleImageClick = (art: Art) => {
    setCurrentImageUrl(art.fileUrl);
    setCurrentImageName(art.fileName);
    setCurrentArtID(art.id);
    setModal(true);
  };

  return (
    <div className="flex flex-wrap gap-6 items-center justify-center p-6 overflow-y-scroll">
      {images.map((e, idx) => (
        <ImageElement key={idx} onClick={handleImageClick} art={e} />
      ))}
      <ClickedImage
        openModal={modal}
        imageUrl={currentImageUrl}
        imageName={currentImageName}
        artID={currentArtID}
        closeModal={() => {
          setModal(false);
        }}
      />
    </div>
  );
}
