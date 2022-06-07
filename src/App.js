import Navbar from "./components/nav/nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Products from "./pages/products/products";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
