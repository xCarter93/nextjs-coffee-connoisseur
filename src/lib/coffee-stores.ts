import { createApi } from "unsplash-js";
import { env } from "@/lib/env";
import { log } from "console";
import { CoffeeStore } from "@/models/coffee-stores";

const unsplash = createApi({
  accessKey: env.UNSPLASH_ACCESS_KEY,
});

const getUrlForCoffeeStores = (
  latLong: string,
  query: string,
  limit: string,
) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&sort=DISTANCE&limit=${limit}`;
};

export const getCoffeeStorePhotos = async () => {
  const photos = await unsplash.search.getPhotos({
    query: "coffee shop",
    page: 1,
    perPage: 30,
    orientation: "squarish",
  });
  const unsplashResults = photos.response?.results.map(
    (result) => result.urls["small"],
  );
  return unsplashResults;
};

export default async function getData() {
  const photos = await getCoffeeStorePhotos();

  const options: Object = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: env.FOURSQUARE_API,
    },
  };
  const response = await fetch(
    getUrlForCoffeeStores("42.36140321389624,-71.0563925795421", "coffee", "6"),
    options,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data.results.map((result: CoffeeStore, index: number) => {
    return {
      fsq_id: result.fsq_id,
      name: result.name,
      imageUrl: photos ? photos[index] : "",
      location: result.location,
    };
  });
}
