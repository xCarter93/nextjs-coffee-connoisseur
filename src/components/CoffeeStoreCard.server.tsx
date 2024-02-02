import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { CoffeeStoreType } from "@/types";

interface CoffeeStoreCardProps {
  coffeeStore: CoffeeStoreType;
}

export default function CoffeeStoreCard({ coffeeStore }: CoffeeStoreCardProps) {
  return (
    <Link href={coffeeStore.href}>
      <Card className="min-h-[200px] bg-white/45 backdrop-blur-sm hover:bg-gray-950">
        <CardHeader className="flex items-center">
          <CardTitle>{coffeeStore.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <Image
            src={coffeeStore.imageUrl}
            alt="Coffee Store Image"
            width={260}
            height={160}
            className="max-h-[200px] min-h-[200px] rounded-md border-2 border-gray-200 bg-white shadow-lg"
          />
        </CardContent>
      </Card>
    </Link>
  );
}
