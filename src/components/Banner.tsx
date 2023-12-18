export default function Banner() {
  return (
    <div className="z-10 block text-black xl:absolute">
      <h1 className="mb-5 text-5xl font-extrabold md:text-8xl">
        <span className="text-white">Coffee</span>{" "}
        <span className="text-indigo-900">Connoisseur</span>
      </h1>

      <p className="mb-5 text-xl font-bold text-secondary-content">
        Discover your local coffee shops!
      </p>
      <div>
        <button className="btn btn-primary text-white md:btn-lg">
          View stores nearby
        </button>
      </div>
    </div>
  );
}
