import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="product" element={<Product></Product>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
