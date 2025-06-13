import { Link, useActionData } from "react-router";

import ErrorMessage from "@/components/shared/ErrorMessage";
import ProductForm from "@/components/products/ProductForm";

const NewProduct = () => {
  const error = useActionData();

  return (
    <>
      <div className="flex justify-between items-center px-2">
        <h2 className="text-2xl text-slate-500 font-bold">Register Product</h2>
        <Link
          to="/"
          className="bg-indigo-600 p-3 text-white rounded text-sm font-bold shadow-sm hover:bg-indigo-500"
        >
          Go to Products
        </Link>
      </div>

      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ProductForm />
    </>
  );
};

export default NewProduct;
