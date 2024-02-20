"use server";

type addArtRes = { status: "OK" | "ERROR" };

import { UTApi } from "uploadthing/server";
import prisma from "@/app/lib/prismadb";
import { revalidatePath } from "next/cache";
export const addArtAction = async (formData: FormData): Promise<addArtRes> => {
  try {
    console.log("aha");
    const secretKey = formData.get("secretKey") as string;
    const imageFile = formData.get("file") as File;
    if (secretKey === "" || !imageFile) return { status: "ERROR" };
    console.log(secretKey);
    console.log(imageFile);
    const admin = await prisma.adminKey.findFirst();
    if (secretKey.toString() !== admin?.key.toString())
      return { status: "ERROR" };
    // sending file
    const utapi = new UTApi();
    const res = await utapi.uploadFiles(imageFile);
    if (res.error) return { status: "ERROR" };
    const newArt = await prisma.art.create({
      data: {
        fileName: res.data.name,
        fileUrl: res.data.url,
        dateFile: new Date(imageFile.lastModified),
      },
    });
    console.log(newArt);
    revalidatePath("/", "layout");
    return { status: "OK" };
  } catch (error) {
    console.log(error);
    return { status: "ERROR" };
  }
};
