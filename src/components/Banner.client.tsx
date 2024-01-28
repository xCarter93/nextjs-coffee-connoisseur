"use client";

import Image from "next/image";
import FindCoffeeStoreButton from "./FindCoffeeStoreButton";

export default function Banner() {
  const handleOnClick = () => {
    console.log("clicked");
  };
  return (
    <div className="flex">
      <div className="z-20 mt-20 flex flex-col gap-10">
        <h1 className="my-2 flex-wrap">Coffee Connoisseur</h1>
        <p className="text-xl font-semibold text-muted-foreground">
          Discover your local coffee shops!
        </p>

        <FindCoffeeStoreButton onClick={handleOnClick}>
          View stores nearby
        </FindCoffeeStoreButton>
      </div>
      <div className="absolute top-0">
        <Image
          src="/static/hero-image (2).png"
          alt="Coffee Shop Image"
          width={1200}
          height={1000}
        />
      </div>
    </div>
  );
}
