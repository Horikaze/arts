"use client";
import { useState } from "react";
import ClickedImage from "../sub/ClickedImage";
import ImageElement from "../sub/ImageElement";
export default function Images() {
  const [modal, setModal] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState("");
  const handleImageClick = (imageUrl: string) => {
    setCurrentImageUrl(imageUrl);
    setModal(true);
  };
  const getRandomLoremPicsumImages = (count: number) => {
    const imageArray = [];

    for (let i = 0; i < count; i++) {
      const imageUrl = `https://picsum.photos/seed/${i}/1000/1000`; // Domyślne wymiary 200x300

      imageArray.push(imageUrl);
    }

    return imageArray;
  };
  const randomImages = getRandomLoremPicsumImages(5);
  console.log(randomImages);
  return (
    <div className="flex flex-wrap gap-6 items-center justify-center p-6 overflow-y-scroll">
      {randomImages.map((e, idx) => (
        <ImageElement key={idx} onClick={handleImageClick} imageSrc={e} />
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
