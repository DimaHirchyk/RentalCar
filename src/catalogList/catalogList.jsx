import { NavLink } from "react-router-dom";

const CatalogList = ({ cars = [] }) => {
  // const filteredCars = selectBrand
  //   ? cars.filter((car) => car.brand === selectBrand)
  //   : cars;

  return (
    <ul className="grid grid-cols-4 gap-y-12 gap-x-8 mt-14">
      {cars.map(
        ({
          id,
          img,
          year,
          type,
          mileage,
          brand,
          rentalPrice,
          rentalCompany,
          model,
          address,
        }) => (
          <li className="" key={mileage}>
            <img className="rounded-2xl" src={img} alt="car" width={400} />
            <div className="mt-4">
              <div className="flex items-center justify-between font-medium mb-2 min-h-12">
                <h4>
                  {brand} <span className="text-blue-500">{model}</span>, {year}
                </h4>
                <span>${rentalPrice}</span>
              </div>
              <div className="flex flex-col text-gray-500 text-xs  gap-1.5 mb-1 ">
                <p>{address}</p>
                <p>{rentalCompany}</p>
              </div>

              <div className="text-gray-500 text-xs flex gap-1.5 mb-8">
                <p>{type}</p>
                <span>|</span>
                <p>{mileage} km</p>
              </div>
              <NavLink
                to={`/catalog/${id}`}
                className=" flex-nowrap inline-block w-full text-white bg-blue-500 hover:bg-blue-700 transition-colors py-3 px-[97px] font-semibold rounded-xl  cursor-pointer">
                Read more
              </NavLink>
            </div>
          </li>
        )
      )}
    </ul>
  );
};
export default CatalogList;
