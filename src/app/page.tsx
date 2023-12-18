import Banner from "@/components/Banner";
import Image from "next/image";
import HeroImage from "../assets/hero-image2.png";

export default function Home() {
  return (
    <main className="w-screen p-24">
      <Image
        className="right-4 top-0 block xl:absolute"
        src={HeroImage}
        alt="Hero image"
        height={800}
        width={800}
      />
      <Banner />
    </main>
  );
}
