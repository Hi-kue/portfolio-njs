import HeroComponent from "@/components/HeroComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center fle-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <HeroComponent />
      </div>
    </main>
  );
}
