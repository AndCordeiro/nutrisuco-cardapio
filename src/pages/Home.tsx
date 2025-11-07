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

  return (
    <div className="p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((c) => (
        <div
          key={c.id}
          className="bg-white rounded-xl shadow hover:scale-[1.02] transition cursor-pointer"
          onClick={() => navigate(`/categoria/${c.id}`)}
        >
          <img
            src={c.image}
            alt={c.name}
            className="w-full h-80 object-cover rounded-t-xl"
          />
          <div className="p-4 text-center font-semibold text-lg">{c.name}</div>
        </div>
      ))}
    </div>
  );
}
