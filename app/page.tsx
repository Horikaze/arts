import Header from "./components/main/Header";
import Images from "./components/main/Images";
import prisma from "@/app/lib/prismadb";
export default async function Home() {
  const arts = await prisma.art.findMany({
    orderBy: {
      dateArt: "desc",
    },
  });
  return (
    <main className="h-full flex flex-col">
      <Header />
      {arts.length == 0 ? (
        <p className="text-center text-4xl py-4 font-semibold">0 arts :&#60;</p>
      ) : (
        <Images images={arts} />
      )}
    </main>
  );
}
