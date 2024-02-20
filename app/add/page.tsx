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
        <input
          type="text"
          placeholder="code"
          className="rounded-lg p-2 text-background"
          name="secretKey"
        />
        <input type="file" name="file" />
        <div className="flex justify-evenly">
          <button
            type="reset"
            className="hover:bg-primary/20 p-3 rounded-lg transition-all"
          >
            Reset
          </button>
          <button
            type="submit"
            className="hover:bg-primary/20 p-3 rounded-lg transition-all"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
