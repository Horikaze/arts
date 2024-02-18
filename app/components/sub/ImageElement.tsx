import Image from "next/image";
import { FaClock } from "react-icons/fa6";

type ImageElementProps = {
  onClick: (imageUrl: string) => void;
  imageSrc: string;
};

export default function ImageElement({ onClick, imageSrc }: ImageElementProps) {
  const handleImageClick = () => {
    onClick(imageSrc);
  };

  return (
    <div className="md:w-96 w-full cursor-pointer font-semibold aspect-square text-sm relative hover:scale-105 transition-all group">
      <Image
        onClick={handleImageClick}
        src={imageSrc}
        className="absolute bg-contain rounded-md"
        fill
        alt="image"
      />

      <div className="flex gap-x-2 items-center h-6 absolute bottom-0 left-0 m-2">
        <FaClock className="h-6 w-6" />
        <p>2022-08-08</p>
      </div>
    </div>
  );
}
