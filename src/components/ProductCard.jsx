// src/components/ProductCard.jsx
export default function ProductCard({ product, addToCart }) {
  const { image, title, price, category } = product;

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden flex flex-col">
      <div className="p-4 grid place-items-center">
        <img
          src={image}
          alt={title}
          className="h-40 object-contain"
          loading="lazy"
        />
      </div>
      <div className="px-4 pb-4 flex-1 flex flex-col">
        <p className="text-sm text-gray-500">{category}</p>
        <h2 className="mt-1 font-medium line-clamp-2">{title}</h2>
        <p className="mt-2 text-lg font-semibold">₹{price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-auto bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
