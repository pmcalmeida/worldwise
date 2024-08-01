import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import City from "./components/City";
import CountryList from "./components/CountryList";
import Form from "./components/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='product' element={<Product />}></Route>
        <Route path='pricing' element={<Pricing />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='app' element={<AppLayout />}>
          <Route index element={<Navigate replace to='cities' />} />
          <Route path='cities' element={<CityList />} />
          <Route path='cities/:id' element={<City />} />
          <Route path='countries' element={<CountryList />} />
          <Route path='form' element={<Form />} />
        </Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
