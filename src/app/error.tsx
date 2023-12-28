"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="flex h-[90%] translate-y-56 flex-col items-center justify-center">
      <div className="m-5 flex text-3xl text-black">
        <p>Something went wrong</p>
      </div>
      <div>
        <button className="btn btn-outline text-black" onClick={reset}>
          Try Again
        </button>
      </div>
    </div>
  );
}
