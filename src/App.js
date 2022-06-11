import Navbar from "./components/nav/nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import Product from "./pages/product/product";
import ShappingCart from "./pages/cart/cart";
import Modal from "./components/modal/modal";
import LoginForm from "./components/login-form/login";
import SignUpForm from "./components/signup-form/signup";
import useModal from './hooks/useModal'


function App() {

  const [isOpen1, openModal1, closeModal1] = useModal(false);
  const [isOpen2, openModal2, closeModal2] = useModal(false);
  
  return (
    <div>
      <Modal isOpen={isOpen1} closeModal={closeModal1} >
        <LoginForm />
      </Modal>
      <Modal isOpen={isOpen2} closeModal={closeModal2} >
        <SignUpForm />
      </Modal>
      <Navbar openModal1={openModal1} openModal2={openModal2} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<ShappingCart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
