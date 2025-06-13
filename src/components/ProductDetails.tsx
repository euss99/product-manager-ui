import { useMemo } from "react";

import { formatCurrency } from "@/utils/helpers";
import { type Product } from "@/utils/schemas";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const price = useMemo(() => formatCurrency(product.price), [product.price]);
  const availability = useMemo(() => product.availability ? "Disponible" : "No Disponible", [product.availability]);

  return (
    <tr className="border-b border-gray-300">
      <td className="p-3 text-gray-800">{product.name}</td>
      <td className="p-3 text-gray-800">{product.description}</td>
      <td className="p-3 text-gray-800">{price}</td>
      <td className="p-3 text-gray-800">{availability}</td>
      <td className="p-3 text-gray-800 "></td>
    </tr>
  );
};

export default ProductDetails;