import { Product } from "@/context/product/domain/Product";

export interface ProductRepository {
  findAll(): Promise<Product[]>;
  create(product: Omit<Product, "id">): Promise<void>;
}