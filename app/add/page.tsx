"use client";

import { useRef, useState } from "react";
import { addArtAction, removeArt } from "./serverAction";

export default function Add() {
  const ref = useRef<HTMLFormElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [code, setCode] = useState("0");
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
              className="rounded-lg px-3 py-2 border"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <p>Code</p>
            <input
              type="text"
              onChange={(e) => {
                setCode(e.target.value);
              }}
              value={code}
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
              htmlFor="file"
              className="border h-10 rounded-lg cursor-pointer p-2"
            >
              {file ? file.name : "Null"}
            </label>
            <input
              type="file"
              onChange={(e) => {
                setFile(e.target.files![0]);
              }}
              id="file"
              name="file"
              hidden
              className="rounded-lg px-3 py-2"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <p>Video</p>
            <label
              htmlFor="video"
              className="border h-10 rounded-lg cursor-pointer p-2"
            >
              {video ? video.name : "Null"}
            </label>
            <input
              type="file"
              onChange={(e) => {
                setVideo(e.target.files![0]);
              }}
              id="video"
              hidden
              name="video"
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
      <form
        className="mt-3 border-t"
        action={async (FormData) => {
          FormData.append("secretKey", code);
          const { status } = await removeArt(FormData);
          alert(`${status}`);
        }}
      >
        <p className="pt-1 mb-2">Delete Art</p>
        <input
          type="text"
          name="id"
          id="id"
          placeholder="Art ID"
          className="rounded-lg px-3 py-2"
        />
        <button
          type="submit"
          className="bg-secondary px-3 py-2 rounded-lg ml-2"
        >
          DELETE
        </button>
      </form>
    </div>
  );
}
