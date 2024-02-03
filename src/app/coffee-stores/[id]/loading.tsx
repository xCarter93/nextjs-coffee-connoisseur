import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Loader className="animate animate-spin" size={64} />
    </div>
  );
}
