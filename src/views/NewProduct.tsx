import { Form, Link, useActionData } from "react-router";

import ErrorMessage from "@/components/ErrorMessage";

const NewProduct = () => {
  const error = useActionData();

  return (
    <>
      <div className="flex justify-between items-center px-2">
        <h2 className="text-2xl text-slate-500 font-bold">Register Product</h2>
        <Link
          to="/new-product"
          className="bg-indigo-600 p-3 text-white rounded text-sm font-bold shadow-sm hover:bg-indigo-500"
        >
          Go to Products
        </Link>
      </div>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Form
        method="post"
        className="mt-10"
      >
        <div className="mb-4">
          <label
            className="text-gray-800"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50 rounded"
            placeholder="Nombre del Producto"
            name="name"
          />
        </div>

        <div className="mb-4">
          <label
            className="text-gray-800"
            htmlFor="description"
          >
            Descripción
          </label>
          <input
            id="description"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50 rounded"
            placeholder="Descripción del Producto"
            name="description"
          />
        </div>

        <div className="mb-4">
          <label
            className="text-gray-800"
            htmlFor="price"
          >
            Precio
          </label>
          <input
            id="price"
            type="number"
            className="mt-2 block w-full p-3 bg-gray-50 rounded"
            placeholder="Precio Producto. ej. 200, 300"
            name="price"
          />
        </div>

        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 hover:bg-indigo-500 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Registrar Producto"
        />
      </Form>
    </>
  );
};

export default NewProduct;