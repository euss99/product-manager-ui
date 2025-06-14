import { Product } from "@/context/product/domain/Product";
import { type ProductRepository } from "@/context/product/domain/ProductRepository";

export class GetProductsUseCase {
  private readonly productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async execute(): Promise<Product[]> {
    try {
      return await this.productRepository.findAll();
    } catch (error) {
      console.error("Error in GetProductsUseCase:", error);
      throw error;
    }
  }
}