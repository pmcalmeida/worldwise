import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="product" element={<Product />}></Route>
          <Route path="product" element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
