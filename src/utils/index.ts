export const getDomain = () => {
  return new URL(
    process.env.NODE_ENV === "production"
      ? "https://nextjs-coffee-connoisseur.vercel.app"
      : "http://localhost:3000",
  );
};
