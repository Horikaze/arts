"use server";
type addArtRes = { status: "OK" | "ERROR" | "NO DATA" | "WRONG KEY" };

import prisma from "@/app/lib/prismadb";
import { revalidatePath } from "next/cache";
import { UTApi } from "uploadthing/server";
export const addArtAction = async (formData: FormData): Promise<addArtRes> => {
  try {
    const secretKey = formData.get("secretKey") as string;
    const imageFile = formData.get("file") as File;
    const video = formData.get("video") as File;
    const date = formData.get("date") as string;
    if (secretKey === "" || imageFile.name == "undefined" || date.length < 2)
      return { status: "NO DATA" };
    const admin = await prisma.adminKey.findFirst();
    if (secretKey.toString() !== admin?.key.toString())
      return { status: "WRONG KEY" };
    const utapi = new UTApi();
    const resArt = await utapi.uploadFiles(imageFile);
    const videoLink =
      video.name == "undefined"
        ? null
        : (await utapi.uploadFiles(video)).data?.url;
    if (resArt.error) return { status: "ERROR" };
    const newArt = await prisma.art.create({
      data: {
        fileName: resArt.data.name,
        fileUrl: resArt.data.url,
        dateArt: new Date(date),
        video: videoLink,
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

export const removeArt = async (formData: FormData): Promise<addArtRes> => {
  try {
    const artID = formData.get("id") as string;
    console.log(artID);
    const secretKey = formData.get("secretKey") as string;
    if (!artID || artID === "") {
      return { status: "NO DATA" };
    }
    if (!secretKey || secretKey === "") {
      return { status: "NO DATA" };
    }
    const admin = await prisma.adminKey.findFirst();
    if (secretKey.toString() !== admin?.key.toString()) {
      return { status: "WRONG KEY" };
    }
    const deletedArt = await prisma.art.delete({
      where: {
        id: artID,
      },
    });
    const utapi = new UTApi();
    const deletedVideoId = deletedArt.video?.split("/").at(-1);
    if (deletedVideoId) {
      utapi.deleteFiles(deletedVideoId);
    }
    const deletedArtId = deletedArt.fileUrl?.split("/").at(-1);
    if (deletedArtId) {
      utapi.deleteFiles(deletedArtId);
    }
    revalidatePath("/", "layout");
    return { status: "OK" };
  } catch (error) {
    console.log(error);
    return { status: "ERROR" };
  }
};
