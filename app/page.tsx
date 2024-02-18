import Header from "./components/main/Header";
import Images from "./components/main/Images";
import ClickedImage from "./components/sub/ClickedImage";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <Header />
        <Images />
      </main>
    </>
  );
}
