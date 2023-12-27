"use client";

import Image from "next/image";
import HeroImage from "../assets/hero-image2.png";
import useTrackLocation from "@/hooks/use-track-location";

export default function Banner() {
  const { handleTrackLocation, latLong, locationErrorMsg } = useTrackLocation();

  const handleBannerBtnClick = () => {
    console.log("Clicking on Banner Button");
    handleTrackLocation();
  };

  return (
    <div className="flex-col gap-y-5 text-black xl:flex">
      <Image
        className="z-1 right-4 top-0 block xl:absolute"
        src={HeroImage}
        alt="Hero image"
        height={800}
        width={800}
      />
      <div className="z-10">
        <h1 className="mb-5 text-5xl font-extrabold md:text-8xl">
          <span className="text-white">Coffee</span>{" "}
          <span className="text-indigo-700">Connoisseur</span>
        </h1>

        <p className="mb-10 text-xl font-bold text-secondary-content">
          Discover your local coffee shops!
        </p>
        <div>
          <button
            onClick={handleBannerBtnClick}
            className="btn btn-primary text-white md:btn-lg"
          >
            View stores nearby
          </button>
        </div>
      </div>
    </div>
  );
}
