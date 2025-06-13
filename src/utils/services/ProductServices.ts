import axios from "axios";
import { safeParse } from "valibot";

import { DraftProductSchema, ProductsSchema } from "@/utils/schemas";

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiNDliOTQwMy03NzE0LTQxY2QtOGZlYy0zYzM4OTM0ZjM1MTEiLCJpYXQiOjE3NDk4MzY1MDAsImV4cCI6MTc0OTkyMjkwMH0.wzNNAAjJIMY8gsUee7GNO09hezJYJYetJPaIAWB0T-g";

type ProductData = {
  [key: string]: FormDataEntryValue;
}

export const addProduct = async ( data: ProductData ) => {
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      description: data.description,
      price: +data.price,
    });

    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/products`;
      await axios.post(url, {
        name: result.output.name,
        description: result.output.description,
        price: result.output.price,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
      );
    } else {
      throw new Error("Invalid data");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async () => {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products`;
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    const result = safeParse(ProductsSchema, data);

    if (result.success) {
      return result.output;
    } else {
      throw new Error("Invalid data");
    }
  } catch (error) {
    console.log(error);
  }
};