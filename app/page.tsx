import Header from "./components/main/Header";
import Images from "./components/main/Images";
import prisma from "@/app/lib/prismadb";
export default async function Home() {
  const arts = await prisma.art.findMany();
  return (
    <main className="h-full flex flex-col">
      <Header />
      <Images images={arts} />
    </main>
  );
}
