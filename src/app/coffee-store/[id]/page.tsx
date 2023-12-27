import Link from "next/link";
import { ArrowLeftIcon, MapPinned, StarIcon } from "lucide-react";
import data from "@/assets/coffee-stores.json";
import Image from "next/image";
import { Metadata } from "next";
import getData from "@/lib/coffee-stores";
import { CoffeeStore } from "@/models/coffee-stores";

interface CoffeeStorePageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: CoffeeStorePageProps): Promise<Metadata> {
  const coffeeStores = await getData();
  const coffeeStore = coffeeStores.find(
    (store: CoffeeStore) => store.fsq_id === id,
  );

  return {
    title: coffeeStore?.name,
  };
}

export default async function CoffeeStorePage({
  params: { id },
}: CoffeeStorePageProps) {
  const coffeeStores = await getData();
  const coffeeStore: CoffeeStore = coffeeStores.find(
    (store: CoffeeStore) => store.fsq_id === id,
  );
  return (
    <div className="flex h-screen">
      <div className="grid h-screen grid-cols-1 items-center justify-start gap-4 md:grid-cols-2">
        <div>
          <div>
            <Link href="/" className="btn btn-link p-0 text-xl no-underline">
              <ArrowLeftIcon />
              Back to home
            </Link>
          </div>

          <div className="mb-4">
            <p className="text-3xl text-black">{coffeeStore?.name}</p>
          </div>
          <div>
            <Image
              className="w-full rounded-lg shadow-lg"
              src={
                coffeeStore?.imageUrl ||
                "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              }
              alt="Coffee Store"
              height={400}
              width={400}
            />
          </div>
        </div>

        <div className="card flex flex-col bg-slate-100/40 p-5 text-xl font-bold text-black shadow-xl backdrop-blur-lg hover:bg-white/50">
          <div className="mb-5 flex flex-row">
            <MapPinned className="mr-4" />
            <p>{coffeeStore.location.address}</p>
          </div>
          <div className="mb-5 flex flex-row">
            <StarIcon className="mr-4" />
            <p>{1}</p>
          </div>
          <button className="btn btn-primary w-fit text-lg">Up Vote!</button>
        </div>
      </div>
    </div>
  );
}
