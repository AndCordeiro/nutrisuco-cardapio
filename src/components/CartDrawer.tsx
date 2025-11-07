import { useState } from "react";
import { useCartStore } from "../stores/useCartStore";
import { FaTimes, FaTrash } from "react-icons/fa";

export function CartDrawer() {
  const [open, setOpen] = useState(false);
  const { items, increase, decrease, clear } = useCartStore();
  const total = items.reduce((acc, i) => acc + i.quantity, 0);

  const handleSend = () => {
    const message = items
      .map((i) => `🍦 ${i.name} - ${i.quantity}x`)
      .join("%0A");
    const url = `https://wa.me/5533991191623?text=Pedido Nutrisuco:%0A${message}`;
    window.open(url, "_blank");
    clear();
    setOpen(false);
  };

  const handleClearCart = () => {
    if (window.confirm("Tem certeza que deseja limpar todo o carrinho?")) {
      clear();
    }
  };

  return (
    <>
      {/* Botão flutuante do carrinho */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 bg-green-600 hover:bg-green-700 text-white rounded-full px-5 py-3 shadow-lg z-50 font-medium"
      >
        Carrinho ({total})
      </button>

      {/* Drawer lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl p-4 transition-transform duration-300 z-[100] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header do drawer */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Seu Pedido</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-gray-800 transition p-2 rounded-full hover:bg-gray-200"
            aria-label="Fechar carrinho"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Lista de itens */}
        <div className="flex flex-col gap-3 max-h-[65vh] overflow-auto">
          {items.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">Carrinho vazio 🛒</p>
          ) : (
            items.map((i) => (
              <div
                key={i.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <span className="text-sm font-medium">{i.name}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decrease(i.id)}
                    className="px-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                  >
                    -
                  </button>
                  <span>{i.quantity}</span>
                  <button
                    onClick={() => increase(i.id)}
                    className="px-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Botões de ação */}
        {items.length > 0 && (
          <div className="mt-6 flex flex-col gap-2">
            {/* Limpar tudo */}
            <button
              onClick={handleClearCart}
              className="w-full flex items-center justify-center gap-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg py-2 font-semibold transition"
            >
              <FaTrash size={14} />
              Limpar tudo
            </button>

            {/* Enviar no WhatsApp */}
            <button
              onClick={handleSend}
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 font-semibold transition"
            >
              Enviar no WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}
