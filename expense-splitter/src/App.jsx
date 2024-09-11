import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  
  return (
    // <section className="border-4 border-red-500 flex h-screen p-5">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="members" element={<Members />} /> */}
          {/* <Route path="product" element={<Product />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    /* </section> */
  )
}

export default App;
