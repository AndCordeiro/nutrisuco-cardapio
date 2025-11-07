import { useNavigate } from "react-router-dom";
import sorveteImg from "../assets/sorvete.jpg";
import picoleImg from "../assets/picole.jpg";
import acaizinhoImg from "../assets/acaizinho.png";

export function Home() {
  const navigate = useNavigate();

  const categories = [
    { id: "sorvete", name: "Sorvete", image: sorveteImg },
    { id: "picole", name: "Picolé", image: picoleImg },
    { id: "acaizinho", name: "Açaizinho", image: acaizinhoImg },
  ];

  const propaganda = [
    {
      id: "entrega",
      title: "🚚 Entregamos acima de 100 picolés",
      description: "Ideal para escolas, empresas e eventos.",
      bg: "bg-green-100",
    },
    {
      id: "festa",
      title: "🎉 Fazemos sua festa de aniversário!",
      description:
        "Monte seu pedido personalizado e garanta os sabores preferidos da galera!",
      bg: "bg-yellow-100",
    },
  ];

  return (
    <div className="p-6 space-y-10">
      {/* CATEGORIAS */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-xl shadow hover:scale-[1.02] transition cursor-pointer"
            onClick={() => navigate(`/categoria/${c.id}`)}
          >
            <img
              src={c.image}
              alt={c.name}
              className="w-full h-80 object-contain bg-gray-50 rounded-t-xl"
            />
            <div className="p-4 text-center font-semibold text-lg">
              {c.name}
            </div>
          </div>
        ))}
      </div>

      {/* PROPAGANDA */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-purple-700 text-center">
          Promoções & Serviços
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {propaganda.map((p) => (
            <div
              key={p.id}
              className={`${p.bg} p-6 rounded-xl shadow-md flex flex-col justify-between hover:scale-[1.02] transition`}
            >
              <div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-700">{p.description}</p>
              </div>

              {p.id === "festa" && (
                <button
                  onClick={() => navigate("/menu")}
                  className="mt-4 self-start bg-purple-700 text-white text-sm px-4 py-2 rounded-md hover:bg-purple-800 transition"
                >
                  Monte seu pedido
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
