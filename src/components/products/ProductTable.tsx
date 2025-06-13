import { useLoaderData } from "react-router";

import ProductDetails from "@/components/products/ProductDetails";
import { type Products } from "@/utils/schemas";

const ProductTable = () => {
  const { products } = useLoaderData() as { products: Products };

  return (
    <table className="w-full mt-5 table-auto">
      <thead className="bg-slate-800 text-white">
        <tr>
          <th className="p-2">Producto</th>
          <th className="p-2">Descripción</th>
          <th className="p-2">Precio</th>
          <th className="p-2">Disponibilidad</th>
          <th className="p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        { products.map((product) => <ProductDetails key={product.id} product={product} />) }
      </tbody>
    </table>
  );
};

export default ProductTable;