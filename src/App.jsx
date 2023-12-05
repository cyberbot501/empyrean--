import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Order from "./pages/order";
import Payment from "./pages/payment";
import Premium from "./pages/premium";
import Register from "./pages/register";
import Shop from "./pages/shop";

export default function App() {
  // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
  // component below are unchanged
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/dashbaord">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/order">Order</Link>
      <Link to="/payment">Payment</Link>
      <Link to="/premium">Premium</Link>
      <Link to="/register">Register</Link>




      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
