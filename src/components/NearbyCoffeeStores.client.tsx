"use client";
import React, { useEffect, useState } from "react";
import Banner from "./Banner.client";
import useTrackLocation from "@/hooks/useTrackLocation";
import CoffeeStoreCard from "./CoffeeStoreCard.server";
import { CoffeeStoreType } from "@/types";

export default function NearbyCoffeeStores() {
  const {
    handleTrackLocation,
    isFindingLocation,
    longLat,
    locationErrorMessage,
  } = useTrackLocation();

  const [coffeeStores, setCoffeeStores] = useState<CoffeeStoreType[]>([]);

  const handleOnClick = () => {
    handleTrackLocation();
  };

  useEffect(() => {
    async function coffeeStoresByLocation() {
      if (!longLat) return;
      try {
        const limit = 10;
        const response = await fetch(
          `/api/getCoffeeStoresByLocation?longLat=${longLat}&limit=${limit}`,
        );
        const coffeeStores = await response.json();
        setCoffeeStores(coffeeStores);
      } catch (error) {
        console.error("Error fetching coffee stores by location", error);
      }
    }
    coffeeStoresByLocation();
  }, [longLat]);

  return (
    <div>
      <Banner
        handleOnClick={handleOnClick}
        isFindingLocation={isFindingLocation}
      />
      {coffeeStores.length > 0 && (
        <div>
          <h2 className="mt-40 pb-8 text-4xl font-bold">Stores Near Me</h2>
          <div className="m-auto">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
              {coffeeStores.map((coffeeStore: CoffeeStoreType) => {
                return (
                  <CoffeeStoreCard
                    key={coffeeStore.id}
                    coffeeStore={coffeeStore}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
