"use client";

import { useState } from "react";

type PositionType = {
  coords: { latitude: number; longitude: number };
};

const useTrackLocation = () => {
  const [isFindingLocation, setIsFindingLocation] = useState(false);
  const [longLat, setLongLat] = useState("");
  const [locationErrorMessage, setLocationErrorMessage] = useState("");

  function success(position: PositionType) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLongLat(`${longitude},${latitude}`);

    setIsFindingLocation(false);
    setLocationErrorMessage("");
  }

  function error() {
    setIsFindingLocation(false);
    setLocationErrorMessage("Unable to retrieve your location");
    console.error("Unable to retrieve your location");
  }

  const handleTrackLocation = () => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by your browser");
      setLocationErrorMessage("Geolocation is not supported by your browser");
    } else {
      setIsFindingLocation(true);
      setLocationErrorMessage("");
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return {
    locationErrorMessage,
    longLat,
    isFindingLocation,
    handleTrackLocation,
  };
};

export default useTrackLocation;
