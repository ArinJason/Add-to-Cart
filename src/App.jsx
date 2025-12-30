// src/App.jsx
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import CartModal from "./components/CartModal";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const exists = cart.some((item) => item.id === product.id);
    if (exists) {
      alert("Item already added to the cart");
      return;
    }
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <ProductGrid products={products} addToCart={addToCart} />
      </main>
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}
