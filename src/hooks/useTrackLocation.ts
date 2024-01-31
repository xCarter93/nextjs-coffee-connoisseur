"use client";

import { useState } from "react";

type PositionType = {
  coords: { latitude: number; longitude: number };
};

const useTrackLocation = () => {
  const [isFindingLocation, setIsFindingLocation] = useState(false);
  const [longLat, setLongLat] = useState("");
  function success(position: PositionType) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLongLat(`${longitude},${latitude}`);

    setIsFindingLocation(false);
  }

  function error() {
    setIsFindingLocation(false);
    console.error("Unable to retrieve your location");
  }

  const handleTrackLocation = () => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by your browser");
    } else {
      setIsFindingLocation(true);
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return {
    longLat,
    isFindingLocation,
    handleTrackLocation,
  };
};

export default useTrackLocation;
