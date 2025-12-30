// src/components/ProductGrid.jsx
import ProductCard from "./ProductCard";

export default function ProductGrid({ products, addToCart }) {
  if (!products.length) {
    return <p className="text-center text-gray-600 py-10">Loading products...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}
