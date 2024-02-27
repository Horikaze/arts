"use client";
import { saveAs } from "file-saver";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { CgCloseO } from "react-icons/cg";
import { FaDownload, FaVideo } from "react-icons/fa6";
type ClickedImageProps = {
  openModal: boolean;
  closeModal: () => void;
  imageUrl: string;
  imageName: string;
  artID: string;
};

function ClickedImage({
  openModal,
  closeModal,
  imageUrl,
  imageName,
  artID,
}: ClickedImageProps) {
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
      className="w-full h-full relative bg-background/0 backdrop:bg-background/60"
    >
      <div className="flex flex-col w-full h-full absolute">
        <button
          onClick={closeModal}
          className="self-end absolute z-20 outline-none"
        >
          <CgCloseO className="w-12 h-12 self-end mr-2 text-text hover:scale-110 transition-all" />
        </button>
        <p className="absolute text-text ml-2 opacity-50 z-30">ID: {artID}</p>
        <div className="flex flex-col w-full h-full">
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
         hover:bg-text bg-background/60
        "
        >
          <FaVideo className="h-6 w-6 group-hover:text-background" />
          <p className="group-hover:text-background">Timelapse</p>
        </div>
        <div
          onClick={() => {
            saveAs(imageUrl, imageName);
          }}
          className="flex cursor-pointer transition-all group gap-x-2 items-center justify-center h-full p-2 border rounded-r-full
         hover:bg-text bg-background/60
        "
        >
          <FaDownload className="h-6 w-6 group-hover:text-background" />
          <p className="group-hover:text-background">Download</p>
        </div>
      </div>
    </dialog>
  );
}

export default ClickedImage;
