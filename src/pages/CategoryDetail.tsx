import { useParams } from "react-router-dom";
import { categories } from "../data/products";
import { useCartStore } from "../stores/useCartStore";

type Flavor = string;
type Size = string | { name: string; hasFlavors: boolean };

type Category = {
  id: string;
  name: string;
  image: string;
  flavors?: Flavor[];
  sizes?: Size[];
};

export function CategoryDetail() {
  const { id } = useParams();
  const category = categories.find((c) => c.id === id) as Category | undefined;
  const addItem = useCartStore((s) => s.addItem);

  if (!category) return <p>Categoria não encontrada</p>;

  // =====================
  // PICOLÉ
  // =====================
  if (category.id === "picole" && category.flavors) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Sabores de Picolé</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.flavors.map((flavor) => (
            <div
              key={flavor}
              className="p-4 bg-white rounded-lg shadow flex flex-col items-center"
            >
              <p className="font-semibold text-lg">{flavor}</p>
              <button
                onClick={() =>
                  addItem({
                    id: `${category.id}-${flavor}`,
                    name: `Picolé ${flavor}`,
                    quantity: 1,
                  })
                }
                className="mt-2 bg-green-600 text-white rounded px-3 py-1 hover:bg-green-700 transition"
              >
                Adicionar
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // =====================
  // SORVETE
  // =====================
  if (category.id === "sorvete" && category.sizes) {
    return (
      <div className="p-6 space-y-6">
        <h2 className="text-2xl font-bold">Sorvetes</h2>

        {category.sizes.map((size) => {
          const sizeName = typeof size === "string" ? size : size.name;
          const hasFlavors = typeof size === "object" && size.hasFlavors;

          return (
            <div key={sizeName} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">{sizeName}</h3>

              {hasFlavors && category.flavors ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.flavors.map((flavor) => (
                    <div
                      key={flavor}
                      className="flex flex-col items-center border rounded p-3"
                    >
                      <p className="font-semibold text-lg">{flavor}</p>
                      <button
                        onClick={() =>
                          addItem({
                            id: `${category.id}-${sizeName}-${flavor}`,
                            name: `Sorvete ${flavor} (${sizeName})`,
                            quantity: 1,
                          })
                        }
                        className="mt-2 bg-green-600 text-white rounded px-3 py-1 hover:bg-green-700 transition"
                      >
                        Adicionar
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-600">
                  👉 Consulte sabores disponíveis.
                </p>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  // =====================
  // AÇAIZINHO
  // =====================
  if (category.id === "acaizinho" && category.sizes) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Tamanhos do Açaizinho</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.sizes.map((size) => {
            const sizeName = typeof size === "string" ? size : size.name;

            return (
              <div
                key={sizeName}
                className="bg-white p-4 rounded-lg shadow text-center"
              >
                <p className="font-semibold text-lg">{sizeName}</p>
                <button
                  onClick={() =>
                    addItem({
                      id: `${category.id}-${sizeName}`,
                      name: `Açaizinho (${sizeName})`,
                      quantity: 1,
                    })
                  }
                  className="mt-2 bg-green-600 text-white rounded px-3 py-1 hover:bg-green-700 transition"
                >
                  Adicionar
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}
