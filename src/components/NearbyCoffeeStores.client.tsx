"use client";
import React from "react";
import Banner from "./Banner.client";
import useTrackLocation from "@/hooks/useTrackLocation";

export default function NearbyCoffeeStores() {
  const { handleTrackLocation, isFindingLocation, longLat } =
    useTrackLocation();

  const handleOnClick = () => {
    handleTrackLocation();
  };

  return (
    <div>
      <Banner
        handleOnClick={handleOnClick}
        isFindingLocation={isFindingLocation}
      />
      Location: {longLat}
    </div>
  );
}
