import { useParams } from "react-router-dom";
import { categories } from "../data/products";
import { useCartStore } from "../stores/useCartStore";

export function CategoryDetail() {
  const { id } = useParams();
  const category = categories.find((c) => c.id === id);
  const addItem = useCartStore((s) => s.addItem);

  if (!category) return <p>Categoria não encontrada</p>;

  if (category.id === "picole") {
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
                className="mt-2 bg-green-600 text-white rounded px-3 py-1"
              >
                Adicionar
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (category.id === "sorvete") {
    return (
      <div className="p-6 space-y-6">
        <h2 className="text-2xl font-bold">Sorvetes</h2>
        {category.sizes.map((size) => (
          <div key={size.name} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">{size.name}</h3>
            {size.hasFlavors ? (
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
                          id: `${category.id}-${size.name}-${flavor}`,
                          name: `Sorvete ${flavor} (${size.name})`,
                          quantity: 1,
                        })
                      }
                      className="mt-2 bg-green-600 text-white rounded px-3 py-1"
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
        ))}
      </div>
    );
  }

  if (category.id === "acaizinho") {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Tamanhos do Açaizinho</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.sizes.map((size) => (
            <div
              key={size}
              className="bg-white p-4 rounded-lg shadow text-center"
            >
              <p className="font-semibold text-lg">{size}</p>
              <button
                onClick={() =>
                  addItem({
                    id: `${category.id}-${size}`,
                    name: `Açaizinho (${size})`,
                    quantity: 1,
                  })
                }
                className="mt-2 bg-green-600 text-white rounded px-3 py-1"
              >
                Adicionar
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
