import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#f2f4f7]">
      <div className="max-w-7xl mx-auto py-7 flex items-center justify-between">
        <a href="/" className="font-[900] text-5xl">
          Rental<span className="text-blue-500">Car</span>
        </a>
        <nav>
          <ul className="flex gap-8">
            <li>
              <NavLink to="/" className="py-2.5 focus:text-blue-600">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" className="py-2.5 focus:text-blue-600">
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
