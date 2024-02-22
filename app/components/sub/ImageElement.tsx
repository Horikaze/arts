import { convertUnixDateHours } from "@/app/lib/forrmaters";
import { Art } from "@prisma/client";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa6";

type ImageElementProps = {
  onClick: (art: Art) => void;
  art: Art;
};

export default function ImageElement({ onClick, art }: ImageElementProps) {
  const handleImageClick = () => {
    onClick(art);
  };

  return (
    <div
      className={`md:w-96 w-full cursor-pointer font-semibold text-sm relative hover:scale-105 transition-all group aspect-[3/4]`}
    >
      <NextImage
        onClick={handleImageClick}
        src={art.fileUrl}
        className="absolute rounded-md object-cover object-center"
        fill
        alt="image"
      />

      <div className="flex  p-4 rounded-full gap-x-2 items-center h-6 absolute bottom-0 left-0 m-2">
        <FaClock className="h-6 w-6" />
        <p>{convertUnixDateHours(art.dateArt as unknown as number)}</p>
      </div>
    </div>
  );
}
