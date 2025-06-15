import { CreateProductUseCase } from "@/context/product/application/CreateProductUseCase";
import { GetProductsUseCase } from "@/context/product/application/GetProductsUseCase";
import { ApiProductRepository } from "@/context/product/infrastructure/ApiProductRepository";

// Instanciamos el repositorio
const productRepository = new ApiProductRepository();

// Instanciamos los casos de uso
export const createProductUseCase = new CreateProductUseCase(productRepository);
export const getProductsUseCase = new GetProductsUseCase(productRepository);
