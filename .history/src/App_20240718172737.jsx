import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='product' element={<Product />}></Route>
        <Route path='pricing' element={<Pricing />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='app' element={<AppLayout />}>
          <Route path='cities' element={<p>List of cities</p>} />
          <Route path='countries' element={<p>List of countries</p>} />
          <Route path='form' element={<p>Form</p>} />
        </Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
