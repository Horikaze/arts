"use client";
import { CgCloseO } from "react-icons/cg";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
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
      className="w-full h-full bg-secondary/0 backdrop:bg-background/80"
    >
      <div className="flex flex-col w-full h-full absolute">
        <button onClick={closeModal} className="self-end absolute z-20 outline-none">
          <CgCloseO className="w-12 h-12 self-end text-text" />
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
    </dialog>
  );
}

export default ClickedImage;
