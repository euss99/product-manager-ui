import type { CreateProductDTO } from "@/context/product/domain/dtos/CreateProductDTO";
import { Product } from "@/context/product/domain/Product";
import { type ProductRepository } from "@/context/product/domain/ProductRepository";

export class CreateProductUseCase {
  private readonly productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async execute(productData: CreateProductDTO): Promise<void> {
    try {
      const product = new Product(
        productData.name,
        productData.description,
        productData.price
      );

      await this.productRepository.create(product);
    } catch (error) {
      console.error("Error in CreateProductUseCase:", error);
      throw error;
    }
  }
}