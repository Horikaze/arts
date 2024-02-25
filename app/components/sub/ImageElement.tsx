import { convertUnixDateHours } from "@/app/lib/forrmaters";
import { Art } from "@prisma/client";
import NextImage from "next/image";

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

      <div className="flex p-4 bg-background/50 rounded-full gap-x-2 items-center h-6 absolute bottom-0 left-0 m-2">
        <p>{convertUnixDateHours(art.dateArt as unknown as number)}</p>
      </div>
    </div>
  );
}
