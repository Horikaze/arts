"use client";
import { CgCloseO } from "react-icons/cg";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { FaClock, FaDownload, FaVideo } from "react-icons/fa6";
import Link from "next/link";
type ClickedImageProps = {
  openModal: boolean;
  closeModal: () => void;
  imageUrl: string;
};

function ClickedImage({ openModal, closeModal, imageUrl }: ClickedImageProps) {
  const ref = useRef(null);

  useEffect(() => {
    if (openModal) {
      //@ts-ignore
      ref.current?.showModal();
    } else {
      //@ts-ignore
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog
      ref={ref}
      onCancel={closeModal}
      className="w-full h-full bg-secondary/0 relative backdrop:bg-background/80"
    >
      <div className="flex flex-col w-full h-full absolute">
        <button
          onClick={closeModal}
          className="self-end absolute z-20 outline-none"
        >
          <CgCloseO className="w-12 h-12 self-end text-text hover:scale-110 transition-all" />
        </button>
        <div className="flex flex-col w-full h-full relative">
          <Image
            src={imageUrl}
            alt="image"
            height={0}
            width={0}
            sizes="100vw"
            className="w-full h-full object-contain absolute"
          />
        </div>
      </div>
      <div className="absolute flex items-center justify-center h-12 rounded-full bottom-0 left-1/2 transform -translate-x-1/2 text-text font-semibold">
        <div
          className="flex cursor-pointer transition-all group gap-x-2 items-center justify-center border-r-2 h-full p-2 border rounded-l-full
         hover:bg-text
        "
        >
          <FaVideo className="h-6 w-6 group-hover:text-background" />
          <p className="group-hover:text-background">Timelapse</p>
        </div>
        <Link
          href={imageUrl}
          download="image.jpg"
          className="flex cursor-pointer transition-all group gap-x-2 items-center justify-center h-full p-2 border rounded-r-full
         hover:bg-text
        "
        >
          <FaDownload className="h-6 w-6 group-hover:text-background" />
          <p className="group-hover:text-background">Download</p>
        </Link>
      </div>
    </dialog>
  );
}

export default ClickedImage;
