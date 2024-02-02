"use client";

import { Star } from "lucide-react";
import React from "react";
import UpvoteButton from "./UpvoteButton";

interface UpvoteProps {
  voting: number;
}

export default function Upvote({ voting }: UpvoteProps) {
  const handleOnCLick = () => {
    console.log("Upvote!");
  };

  return (
    <>
      <div className="flex">
        <Star size={32} />
        <p className="pl-2">{voting}</p>
      </div>

      <UpvoteButton onClick={handleOnCLick}>Up vote!</UpvoteButton>
    </>
  );
}
