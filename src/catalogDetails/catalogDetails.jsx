import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../redux/car/selector";
import { useEffect } from "react";
import { getAllCars } from "../redux/car/gerCar";
import ContactForm from "../form/form";
import { useParams } from "react-router-dom";

const CatalogDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const allCarsData = useSelector(selectCars);
  const carsList = allCarsData || []; //

  const currentCar = carsList.find((car) => String(car.id) === id); //

  useEffect(() => {
    if (carsList.length === 0) {
      dispatch(getAllCars());
    }
  }, [dispatch, carsList.length]);
  if (!currentCar) {
    return (
      <section className="max-w-7xl mx-auto py-20 text-center">
        <p>Завантаження даних про автомобіль...</p>
      </section>
    );
  }

  const {
    img,
    brand,
    model,
    year,
    rentalPrice,
    address,
    type,
    mileage,
    description,
    functionalities,
    accessories,
    fuelConsumption,
    engineSize,
    rentalConditions,
  } = currentCar;

  return (
    <section className="max-w-7xl mx-auto py-20">
      <div className="flex gap-[72px]">
        <div>
          <img
            className="rounded-2xl"
            src={img}
            width={640}
            height={510}
            alt="car"
          />
          <ContactForm />
        </div>
        <div>
          {/* block name */}
          <div className="">
            <div>
              <div className="flex gap-4 items-center">
                <h3 className="text-2xl font-semibold">
                  {brand} {model}, {year}
                </h3>
                <span className="text-gray-400 text-sm font-medium">
                  Id: 9582
                </span>
              </div>
              <div className="flex gap-4 text-base font-medium mt-2">
                <span className="flex items-center gap-1">
                  <svg width={16} height={16}>
                    <use href="../../public/icon.svg#icon-Location"></use>
                  </svg>
                  {address}
                </span>
                <p>Mileage: {mileage} km</p>
              </div>
              <span className="font-semibold text-2xl text-blue-600">
                ${rentalPrice}
              </span>
            </div>
            <p className="mt-8 font-medium">{description}</p>
          </div>
          {/* description */}
          <div className="mt-16 flex flex-col gap-28">
            {/* Rental Conditions: */}
            <div className="">
              <h4 className="font-semibold text-2xl">Rental Conditions: </h4>
              <ul className="space-y-4 mt-5 font-medium">
                {Array.isArray(rentalConditions) &&
                  rentalConditions.map((item, index) => (
                    <li key={index} className="flex gap-2 items-center">
                      <svg width={16} height={16}>
                        <use href="/icon.svg#icon-check-circle"></use>
                      </svg>
                      <p>{item}</p>
                    </li>
                  ))}
              </ul>
            </div>
            {/* Car Specifications: */}
            <div className="">
              <h4 className="font-semibold text-2xl">Car Specifications:</h4>
              <ul className="space-y-4 mt-5 font-medium">
                <li className="flex gap-2 items-center">
                  <svg width={16} height={16}>
                    <use href="/icon.svg#icon-calendar"></use>
                  </svg>
                  <p>Year: {year}</p>
                </li>
                <li className="flex gap-2 items-center">
                  <svg width={16} height={16}>
                    <use href="/icon.svg#icon-car"></use>
                  </svg>
                  <p>Type: {type}</p>
                </li>
                <li className="flex gap-2 items-center">
                  <svg width={16} height={16}>
                    <use href="/icon.svg#icon-fuel-pump"></use>
                  </svg>
                  <p>Fuel Consumption: {fuelConsumption}</p>
                </li>
                <li className="flex gap-2 items-center">
                  <svg width={16} height={16}>
                    <use href="/icon.svg#icon-gear"></use>
                  </svg>
                  <p>Engine Size: {engineSize}</p>
                </li>
              </ul>
            </div>
            {/* Accessories and functionalities: */}
            <div className="">
              <h4 className="font-semibold text-2xl">
                Accessories and functionalities:
              </h4>
              <ul className="space-y-4 mt-5 font-medium">
                {Array.isArray(functionalities) &&
                  functionalities.map((item, index) => (
                    <li key={index} className="flex gap-2 items-center">
                      <svg width={16} height={16}>
                        <use href="/icon.svg#icon-check-circle"></use>
                      </svg>
                      <p>{item}</p>
                    </li>
                  ))}
                {Array.isArray(accessories) &&
                  accessories.map((item, index) => (
                    <li key={index} className="flex gap-2 items-center">
                      <svg width={16} height={16}>
                        <use href="/icon.svg#icon-check-circle"></use>
                      </svg>
                      <p>{item}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogDetails;
