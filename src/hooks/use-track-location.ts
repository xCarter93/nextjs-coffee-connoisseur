"use client";

import { useState } from "react";

interface GeoLocationPosition {
  coords: {
    latitude: number;
    longitude: number;
  };
}

const useTrackLocation = () => {
  const [locationErrorMsg, setLocationErrorMsg] = useState("");
  const [latLong, setLatLong] = useState("");
  const [isFindingLocation, setIsFindingLocation] = useState(false);

  const success = (position: GeoLocationPosition) => {
    setIsFindingLocation(false);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLatLong(`${latitude},${longitude}`);
    setLocationErrorMsg("");
  };

  const error = () => {
    setIsFindingLocation(false);
    setLocationErrorMsg("Unable to retrieve your location");
  };

  const handleTrackLocation = () => {
    setIsFindingLocation(true);
    if (!navigator.geolocation) {
      setIsFindingLocation(false);
      setLocationErrorMsg("Geolocation is not supported by your browser.");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };
  return {
    latLong,
    handleTrackLocation,
    locationErrorMsg,
    isFindingLocation,
  };
};

export default useTrackLocation;
