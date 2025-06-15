import { safeParse } from "valibot";

import {
  createProductUseCase,
  getProductsUseCase,
} from "@/utils/dependencies/productDependencies";
import { DraftProductSchema, ProductsSchema } from "@/utils/schemas";

type ProductData = {
  [key: string]: FormDataEntryValue;
};

export const addProduct = async (data: ProductData) => {
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      description: data.description,
      price: +data.price,
    });

    if (result.success) {
      await createProductUseCase.execute({
        name: result.output.name,
        description: result.output.description,
        price: result.output.price,
      });
    } else {
      throw new Error("Invalid data");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async () => {
  try {
    const products = await getProductsUseCase.execute();
    const result = safeParse(ProductsSchema, products);

    if (result.success) {
      return result.output;
    } else {
      throw new Error("Invalid data");
    }
  } catch (error) {
    console.log(error);
  }
};
