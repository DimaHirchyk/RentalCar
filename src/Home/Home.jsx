import { NavLink } from "react-router-dom";

function Home() {
  return (
    <section className="bg-[url(/Picture.webp)] w-full min-h-[calc(100vh-110px)] bg-cover bg-center bg-no-repeat flex flex-col">
      <div className="max-w-7xl mx-auto pb-[60px] text-center text-white mt-auto">
        <h1 className="text-6xl font-bold mb-4">
          Find your perfect rental car
        </h1>
        <p className="text-3xl font-semibold ">
          Reliable and budget-friendly rentals for any journey
        </p>
        <NavLink
          to="/catalog"
          className="inline-block bg-blue-500 hover:bg-blue-700 transition-colors py-3 px-[88px] font-semibold rounded-xl mt-10 cursor-pointer">
          View Catalog
        </NavLink>
      </div>
    </section>
  );
}

export default Home;
