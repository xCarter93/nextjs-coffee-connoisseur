import Banner from "@/components/Banner";
import StoreCard from "@/components/StoreCard";
import data from "@/assets/coffee-stores.json";
import { headers } from "next/headers";
import { CoffeeStore, CoffeeStoreSearchResponse } from "@/models/coffee-stores";

async function getData() {
  const options: Object = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.FOURSQUARE_API,
    },
  };
  const response = await fetch(
    "https://api.foursquare.com/v3/places/search?query=coffee&ll=42.36140321389624%2C-71.0563925795421&sort=DISTANCE&limit=6",
    options,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="w-screen p-24">
      <Banner />
      <section className="mt-40">
        <h2 className="my-10 text-5xl text-black">Boston Coffee Stores</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.results.map((store: CoffeeStore) => {
            return (
              <StoreCard
                key={store.fsq_id}
                href={`/coffee-store/${store.fsq_id}`}
                imageUrl={store.imageUrl}
                title={store.name}
                alt={store.name}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
