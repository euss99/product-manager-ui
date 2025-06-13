import { Link, useLoaderData } from "react-router";

import ProductDetails from "@/components/ProductDetails";
import { type Products } from "@/utils/schemas";

const Products = () => {
  const { products } = useLoaderData() as { products: Products };

  console.log({ products });
  return (
    <>
      <div className="flex justify-between items-center px-2">
        <h2 className="text-2xl text-slate-500 font-bold">Products</h2>
        <Link
          to="/new-product"
          className="bg-indigo-600 p-3 text-white rounded text-sm font-bold shadow-sm hover:bg-indigo-500"
        >
          Add Product
        </Link>
      </div>

      <div className="p-2">
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
      </div>
    </>
  );
};

export default Products;