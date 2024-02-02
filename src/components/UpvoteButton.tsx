import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import React from "react";

interface UpvoteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function UpvoteButton({
  children,
  ...props
}: UpvoteButtonProps) {
  return (
    <Button {...props} disabled={props.disabled} className="p-5">
      <span className="flex items-center justify-center text-base">
        {children}
      </span>
    </Button>
  );
}
