import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

interface CoffeeStorePageProps {
  params: {
    id: string;
  };
}

export default function CoffeeStorePage({
  params: { id },
}: CoffeeStorePageProps) {
  return (
    <div>
      Coffee Store Page
      <Link href="/" className="btn btn-link">
        Back to home
        <ArrowRightIcon />
      </Link>
    </div>
  );
}
