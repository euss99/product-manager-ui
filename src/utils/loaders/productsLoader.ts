import { getProducts } from "@/utils/services/ProductServices";

export const loader = async () => {
  const products = await getProducts();

  return { products };
};