import CoffeeStoreCard from "@/components/CoffeeStoreCard.server";
import NearbyCoffeeStores from "@/components/NearbyCoffeeStores.client";
import { fetchCoffeeStores } from "@/lib/coffee-stores";
import { CoffeeStoreType } from "@/types";

async function getData() {
  return await fetchCoffeeStores();
}

export default async function Home() {
  const coffeeStores = await getData();

  return (
    <main className="mx-auto min-h-screen max-w-7xl items-start justify-start p-5 md:p-14">
      <NearbyCoffeeStores />

      <h2 className="mt-40 pb-8 text-4xl font-bold">Boston Coffee Stores</h2>
      <div className="m-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
          {coffeeStores.map((coffeeStore: CoffeeStoreType) => {
            return (
              <CoffeeStoreCard key={coffeeStore.id} coffeeStore={coffeeStore} />
            );
          })}
        </div>
      </div>
    </main>
  );
}
