import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

interface UpvoteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function UpvoteButton({
  children,
  ...props
}: UpvoteButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      {...props}
      disabled={pending}
      aria-disabled={pending}
      className="min-w-32 p-5"
    >
      <span className="flex items-center justify-center gap-1 text-lg">
        {pending && <Loader2 size={16} className="animate-spin" />}
        {children}
      </span>
    </Button>
  );
}
