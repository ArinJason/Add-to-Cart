// src/components/Navbar.jsx
export default function Navbar({ cartCount, onOpenCart }) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">FakeStore</h1>
        <button
          onClick={onOpenCart}
          className="relative inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          <span>Cart</span>
          <span className="bg-white text-blue-600 font-semibold rounded-full w-6 h-6 grid place-items-center">
            {cartCount}
          </span>
        </button>
      </div>
    </header>
  );
}
