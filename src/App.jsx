import { Route, Routes } from "react-router-dom";
import Header from "./heder/header";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Home/Home"));
const Catalog = lazy(() => import("./catalog/catalog"));
const CatalogDetails = lazy(() => import("./catalogDetails/catalogDetails"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<CatalogDetails />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
