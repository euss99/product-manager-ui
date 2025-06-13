import { Form } from "react-router";

const ProductForm = () => {
  return (
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
  );
};

export default ProductForm;