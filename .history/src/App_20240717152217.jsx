import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="product" element={<Product />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
