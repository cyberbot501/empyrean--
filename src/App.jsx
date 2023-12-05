import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Dasboard from "./pages/dasboard";
import Login from "./pages/login";
import Order from "./pages/order";
import Payment from "./pages/payment";
import Premium from "./pages/premium";
import Register from "./pages/register";
import Shop from "./pages/shop";

function App() {
  // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
  // component below are unchanged
  return (
    <>
      <Link to="/">Home</Link>




      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/dasboard" element={<Dasboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
