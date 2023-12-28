import Banner from "@/components/Banner";
import StoreCard from "@/components/StoreCard";
import { CoffeeStore } from "@/models/coffee-stores";
import getData from "@/lib/coffee-stores";

export default async function Home() {
  throw Error("Test");
  const defaultData = await getData();

  return (
    <main className="w-screen p-24">
      <Banner />
      <section className="mt-40">
        <h2 className="my-10 text-5xl text-black">Boston Coffee Stores</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {defaultData.map((store: CoffeeStore) => {
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
