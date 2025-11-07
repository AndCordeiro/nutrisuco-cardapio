import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { CategoryDetail } from "./pages/CategoryDetail";
import { CartDrawer } from "./components/CartDrawer";
import { Menu } from "./pages/Menu";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:id" element={<CategoryDetail />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <CartDrawer />
    </BrowserRouter>
  );
}
