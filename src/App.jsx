import { Route, Routes } from "react-router-dom";
import Header from "./heder/header";
import Home from "./Home/Home";
import CatalogDetails from "./catalogDetails/catalogDetails";
import Catalog from "./catalog/catalog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CatalogDetails />} />
      </Routes>
    </>
  );
}

export default App;
