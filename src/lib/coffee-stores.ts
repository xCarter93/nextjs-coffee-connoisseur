import { MapboxType } from "@/types";

const getListOfCoffeeStorePhotos = async () => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query="coffee shop"&page=1&perPage=10&orientation=landscape`,
    );
    const photos = await response.json();
    const results = photos?.results || [];
    return results?.map((result: { urls: any }) => result.urls["small"]);
  } catch (error) {
    console.error("Error retrieving a photo", error);
  }
};

const transformCoffeeData = (
  index: number,
  result: MapboxType,
  photos: Array<string>,
) => {
  return {
    id: result.id,
    address: result.properties?.address || "",
    name: result.text,
    imageUrl: photos.length > 0 ? photos[index] : "",
    href: `/coffee-stores/${result.id}?id=${index}`,
  };
};

export const fetchCoffeeStores = async (
  longLat: string = "-71.05443569314198%2C42.3665254918471",
  limit: number = 6,
) => {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/coffee.json?limit=${limit}&proximity=${longLat}&access_token=${process.env.MAPBOX_TOKEN}`,
    );
    const data = await response.json();
    const photos = await getListOfCoffeeStorePhotos();

    return (
      data?.features?.map((result: MapboxType, index: number) =>
        transformCoffeeData(index, result, photos),
      ) || []
    );
  } catch (error) {
    console.error("Error fetching coffee stores", error);
  }
};

export const fetchCoffeeStore = async (id: string, queryId: string) => {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${id}.json?limit=1&proximity=ip&access_token=${process.env.MAPBOX_TOKEN}`,
    );
    const data = await response.json();
    const photos = await getListOfCoffeeStorePhotos();

    const coffeeStore = data.features.map((result: MapboxType, index: number) =>
      transformCoffeeData(parseInt(queryId), result, photos),
    )[0];
    return coffeeStore;
  } catch (error) {
    console.error("Error fetching coffee store", error);
  }
};
