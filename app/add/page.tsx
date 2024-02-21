"use client";

import { useRef, useState } from "react";
import { addArtAction } from "./serverAction";

export default function Add() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <form
        className="flex flex-col justify-center space-y-4"
        ref={ref}
        action={async (FormData) => {
          ref.current?.reset();
          const { status } = await addArtAction(FormData);
          alert(`${status}`);
        }}
      >
        <div className="flex gap-x-2">
          <div className="flex flex-col w-1/2">
            <p>Date</p>
            <input
              type="date"
              name="date"
              onChange={(e) => {
                console.log(e.target.value);
                console.log(typeof e.target.value);
              }}
              className="rounded-lg px-3 py-2 border"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <p>Code</p>
            <input
              type="text"
              placeholder="code"
              className="rounded-lg px-3 py-2 border"
              name="secretKey"
            />
          </div>
        </div>
        <div className="flex gap-x-2 w-full">
          <div className="flex flex-col w-1/2">
            <p>File</p>
            <label
              htmlFor="video"
              className="border h-10 rounded-lg cursor-pointer"
            ></label>
            <input
              type="file"
              id="video"
              name="video"
              hidden
              className="rounded-lg px-3 py-2"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <p>Video</p>
            <label
              htmlFor="file"
              className="border h-10 rounded-lg cursor-pointer"
            ></label>
            <input
              type="file"
              id="file"
              hidden
              name="file"
              className="rounded-lg px-3 py-2"
            />
          </div>
        </div>
        <div className="flex justify-evenly">
          <button type="reset" className="bg-secondary px-3 py-2 rounded-lg">
            Reset
          </button>
          <button type="submit" className="bg-primary px-3 py-2 rounded-lg">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
