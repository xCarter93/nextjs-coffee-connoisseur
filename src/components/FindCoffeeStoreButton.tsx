"use client";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import React from "react";

interface FindCoffeeStoreButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  //   loading: boolean;
}

export default function FindCoffeeStoreButton({
  children,
  ...props
}: FindCoffeeStoreButtonProps) {
  return (
    <Button {...props} disabled={props.disabled} className="p-7">
      <span className="flex items-center justify-center gap-1 text-lg">
        {/* {loading && <Loader2 size={16} className="animate-spin" />} */}
        {children}
      </span>
    </Button>
  );
}
