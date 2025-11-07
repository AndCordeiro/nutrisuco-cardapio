import { useState } from "react";
import { FaWhatsapp, FaRegCopy, FaCheckCircle } from "react-icons/fa";

export function Header() {
  const phone = "5533991191623"; // usado para WhatsApp (formato internacional)
  const pixKey = "33991191623"; // número Pix que será copiado
  const message = "Olá! Gostaria de fazer um pedido 🍧";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // feedback por 2 segundos
    } catch (err) {
      console.error("Erro ao copiar Pix:", err);
    }
  };

  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-purple-700 text-white px-6 py-4 shadow-md sticky top-0 z-50 gap-4">
      {/* Logo e nome */}
      <h1 className="text-2xl font-bold tracking-wide flex items-center gap-2 justify-center sm:justify-start">
        Nutrisuco 🍦
      </h1>

      {/* Ações à direita */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        {/* Botão WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 transition-colors px-4 py-2 rounded-lg font-medium w-full sm:w-auto"
        >
          <FaWhatsapp size={20} />
          WhatsApp
        </a>

        {/* Botão Pix */}
        <button
          onClick={handleCopy}
          className="flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-purple-900 transition-colors px-4 py-2 rounded-lg font-semibold w-full sm:w-auto"
        >
          {copied ? (
            <>
              <FaCheckCircle size={18} />
              Copiado!
            </>
          ) : (
            <>
              <FaRegCopy size={18} />
              Pix: {pixKey}
            </>
          )}
        </button>
      </div>
    </header>
  );
}
