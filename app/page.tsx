import Header from "./components/main/Header";
import Images from "./components/main/Images";

export default function Home() {
  return (
    <main className="h-full flex flex-col">
      <Header />
      <Images />
    </main>
  );
}
