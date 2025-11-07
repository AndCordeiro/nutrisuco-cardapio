import { useCartStore } from "../stores/useCartStore";
import { categories } from "../data/products";

export function Menu() {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="p-6 space-y-10 pb-20">
      <h1 className="text-3xl font-bold text-purple-700 text-center">
        Todos os Produtos 🍧
      </h1>

      <p className="text-center text-gray-600">
        Escolha entre todas as opções disponíveis e monte seu pedido.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`rounded-xl shadow-md p-4 flex flex-col hover:scale-[1.02] transition ${
              category.id === "picole"
                ? "bg-blue-50"
                : category.id === "sorvete"
                ? "bg-pink-50"
                : "bg-purple-50"
            }`}
          >
            <h2 className="text-xl font-bold text-purple-800 mb-3">
              {category.name}
            </h2>

            {/* ================= SORVETE ================= */}
            {category.id === "sorvete" && category.sizes && (
              <div className="space-y-4">
                {category.sizes.map((size) => {
                  const sizeName = typeof size === "string" ? size : size.name;
                  const hasFlavors =
                    typeof size === "object" && size.hasFlavors;

                  return (
                    <div key={sizeName}>
                      <h3 className="font-semibold text-purple-700">
                        {sizeName}
                      </h3>
                      {hasFlavors && category.flavors ? (
                        <div className="space-y-1 pl-2">
                          {category.flavors.map((flavor) => (
                            <div
                              key={`${category.id}-${sizeName}-${flavor}`}
                              className="flex items-center justify-between border-b pb-1"
                            >
                              <span>{flavor}</span>
                              <button
                                onClick={() =>
                                  addItem({
                                    id: `${category.id}-${sizeName}-${flavor}`,
                                    name: `Sorvete ${flavor} (${sizeName})`,
                                    quantity: 1,
                                  })
                                }
                                className="text-sm bg-green-600 text-white rounded px-3 py-1 hover:bg-green-700 transition"
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
            )}

            {/* ================= PICOLÉ ================= */}
            {category.id === "picole" && category.flavors && (
              <div className="space-y-2">
                {category.flavors.map((flavor) => (
                  <div
                    key={`${category.id}-${flavor}`}
                    className="flex items-center justify-between border-b pb-1"
                  >
                    <span>{flavor}</span>
                    <button
                      onClick={() =>
                        addItem({
                          id: `${category.id}-${flavor}`,
                          name: `Picolé ${flavor}`,
                          quantity: 1,
                        })
                      }
                      className="text-sm bg-green-600 text-white rounded px-3 py-1 hover:bg-green-700 transition"
                    >
                      Adicionar
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* ================= AÇAIZINHO ================= */}
            {category.id === "acaizinho" && category.sizes && (
              <div className="space-y-2">
                {category.sizes.map((size) => {
                  const sizeName = typeof size === "string" ? size : size.name;
                  return (
                    <div
                      key={`${category.id}-${sizeName}`}
                      className="flex items-center justify-between border-b pb-1"
                    >
                      <span>{sizeName}</span>
                      <button
                        onClick={() =>
                          addItem({
                            id: `${category.id}-${sizeName}`,
                            name: `Açaizinho (${sizeName})`,
                            quantity: 1,
                          })
                        }
                        className="text-sm bg-green-600 text-white rounded px-3 py-1 hover:bg-green-700 transition"
                      >
                        Adicionar
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
