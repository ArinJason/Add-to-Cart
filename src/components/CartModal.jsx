// src/components/CartModal.jsx
export default function CartModal({ isOpen, onClose, cart, removeFromCart }) {
  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Modal */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <h3 className="text-lg font-semibold">Your Cart ({cart.length})</h3>
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={onClose}
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto">
            {cart.length === 0 ? (
              <p className="p-4 text-gray-600">Your cart is empty.</p>
            ) : (
              <ul className="divide-y">
                {cart.map((item) => (
                  <li key={item.id} className="flex gap-4 px-4 py-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain"
                    />
                    <div className="flex-1">
                      <p className="font-medium line-clamp-1">{item.title}</p>
                      <p className="text-sm text-gray-600">₹{item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="self-start bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-t px-4 py-3 flex items-center justify-between">
            <span className="font-semibold">Total</span>
            <span className="text-lg font-semibold">₹{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
