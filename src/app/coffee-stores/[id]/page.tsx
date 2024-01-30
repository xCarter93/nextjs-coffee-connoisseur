import { CoffeeStoreType } from "@/components/CoffeeStoreCard.server";
import { fetchCoffeeStore, fetchCoffeeStores } from "@/lib/coffee-stores";
import { ArrowLeft, MapPinned } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CoffeeStorePageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const coffeeStores = await fetchCoffeeStores();
  if (coffeeStores) {
    return coffeeStores.map((coffeeStore: CoffeeStoreType) => ({
      id: coffeeStore.id,
    }));
  }
}

export default async function CoffeeStorePage({
  params: { id },
}: CoffeeStorePageProps) {
  const coffeeStore = await fetchCoffeeStore(id);
  return (
    <div className="h-full pb-80">
      <div className="m-auto grid max-w-full px-12 py-12 lg:max-w-6xl lg:grid-cols-2 lg:gap-4">
        <div className="">
          <div className="mb-2 mt-24 text-lg font-bold">
            <Link href="/">
              <span className="flex">
                <ArrowLeft size={28} /> Back to home
              </span>
            </Link>
          </div>
          <div className="my-4">
            <h1 className="text-4xl">{coffeeStore?.name}</h1>
          </div>
          <Image
            src={
              coffeeStore?.imageUrl ||
              "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            }
            width={740}
            height={360}
            className="max-h-[420px] min-w-full max-w-full rounded-lg border-2 sepia lg:max-w-[470px] "
            alt={"Coffee Store Image"}
          />
        </div>

        <div className={`glass mt-12 flex-col rounded-lg p-4 lg:mt-48`}>
          {coffeeStore?.address && (
            <div className="mb-4 flex">
              <MapPinned size={32} />
              <p className="pl-2">{coffeeStore.address}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
