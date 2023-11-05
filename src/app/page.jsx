import Image from "next/image";
import ListMovie from "./sections/ListMovie";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <>
      <Carousel />
      <main className="container mx-auto mt-10 relative">
        <ListMovie />
      </main>
    </>
  );
}
