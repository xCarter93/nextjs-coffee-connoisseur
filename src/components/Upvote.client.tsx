"use client";

import { useFormState } from "react-dom";
import UpvoteButton from "./UpvoteButton";
import { upvoteAction } from "@/app/actions";
import { Star } from "lucide-react";

export default function Upvote({ voting, id }: { voting: number; id: string }) {
  const initialState = {
    id,
    voting,
  };

  const [state, formAction] = useFormState(upvoteAction, initialState);
  return (
    <>
      <div className="flex">
        <Star size={32} />
        <p className="pl-2">{state?.voting}</p>
      </div>
      <form action={formAction} className="flex flex-col justify-between">
        <UpvoteButton>Up vote!</UpvoteButton>
      </form>
    </>
  );
}
