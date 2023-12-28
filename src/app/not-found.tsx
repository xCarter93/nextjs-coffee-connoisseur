import { XCircleIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex h-[90%] translate-y-56">
      <XCircleIcon size={50} className="text-black" />
      <h1 className="text-5xl text-black">Page Not Found</h1>
    </div>
  );
}
