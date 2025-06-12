import {
  array,
  boolean,
  type InferOutput,
  number,
  object,
  string,
} from "valibot";

export const DraftProductSchema = object({
  name: string(),
  description: string(),
  price: number(),
});

export const ProductSchema = object({
  id: string(),
  name: string(),
  description: string(),
  price: number(),
  availability: boolean(),
});

export const ProductsSchema = array(ProductSchema);

export type Product = InferOutput<typeof ProductSchema>;
