import axios from "axios";

import { type CreateProductDTO } from "@/context/product/domain/dtos/CreateProductDTO";
import { type ProductDTO } from "@/context/product/domain/dtos/ProductDTO";
import { Product } from "@/context/product/domain/Product";
import { type ProductRepository } from "@/context/product/domain/ProductRepository";

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiNDliOTQwMy03NzE0LTQxY2QtOGZlYy0zYzM4OTM0ZjM1MTEiLCJpYXQiOjE3NDk4MzY1MDAsImV4cCI6MTc0OTkyMjkwMH0.wzNNAAjJIMY8gsUee7GNO09hezJYJYetJPaIAWB0T-g";

export class ApiProductRepository implements ProductRepository {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = `${import.meta.env.VITE_API_URL}/api/products`;
  }

  async findAll(): Promise<Product[]> {
    try {
      const { data } = await axios.get<ProductDTO[]>(this.baseUrl, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      return data.map((product) => Product.fromJSON(product));
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }

  async create(product: Omit<Product, "id">): Promise<void> {
    try {
      const createProductDTO: CreateProductDTO = {
        name: product.getName(),
        description: product.getDescription(),
        price: product.getPrice(),
      };

      await axios.post(
        this.baseUrl,
        createProductDTO,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  }
}