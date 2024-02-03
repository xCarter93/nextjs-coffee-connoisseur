"use client";

import Image from "next/image";
import FindCoffeeStoreButton from "./FindCoffeeStoreButton";

interface BannerProps {
  handleOnClick: () => void;
  isFindingLocation: boolean;
}

export default function Banner({
  handleOnClick,
  isFindingLocation,
}: BannerProps) {
  return (
    <div className="flex">
      <div className="z-20 mt-10 flex flex-col gap-10 md:mt-20">
        <h1 className="my-2 flex-wrap">Coffee Connoisseur</h1>
        <p className="text-xl font-semibold text-muted-foreground">
          Discover your local coffee shops!
        </p>

        <FindCoffeeStoreButton
          onClick={handleOnClick}
          loading={isFindingLocation}
        >
          {isFindingLocation ? "Locating..." : "View stores nearby"}
        </FindCoffeeStoreButton>
      </div>
      <div className="absolute top-0">
        <Image
          src="/static/hero-image (2).webp"
          alt="Coffee Shop Image"
          width={1200}
          height={1000}
          priority={true}
        />
      </div>
    </div>
  );
}
