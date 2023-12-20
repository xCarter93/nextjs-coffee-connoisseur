import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface StoreCardProps {
  title: string;
  imageUrl: string;
  href: string;
  alt: string;
}

export default function StoreCard({
  title,
  imageUrl,
  href,
  alt,
}: StoreCardProps) {
  return (
    <Link href={href} className="m-auto w-full max-w-[384px] justify-center">
      <div className="card bg-slate-100/40 shadow-xl backdrop-blur-lg hover:bg-white/50">
        <div className="card-body items-center p-4 text-center">
          <h2 className="card-title text-black">
            {title} <ArrowRight />
          </h2>
        </div>
        <figure className="px-3 pb-5">
          <Image
            src={imageUrl}
            alt={alt}
            className="rounded-xl"
            width={200}
            height={200}
          />
        </figure>
      </div>
    </Link>
  );
}
