import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="groups" element={<Groups />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
