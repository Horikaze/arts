"use client";
import { useState } from "react";
import ImageElement from "../sub/ImageElement";
import ClickedImage from "../sub/ClickedImage";
const dummyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default function Images() {
  const [modal, setModal] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState("");
  const handleImageClick = (imageUrl: string) => {
    setModal(true);
    setCurrentImageUrl(imageUrl);
  };
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      {dummyArray.map((e, idx) => (
        <ImageElement key={idx} onClick={handleImageClick} />
      ))}
      <ClickedImage
        openModal={modal}
        imageUrl={currentImageUrl}
        closeModal={() => {
          setModal(false);
        }}
      />
    </div>
  );
}
