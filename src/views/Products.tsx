import { Link } from "react-router";

import ProductTable from "@/components/products/ProductTable";

const Products = () => {
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
        <ProductTable />
      </div>
    </>
  );
};

export default Products;