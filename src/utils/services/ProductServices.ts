import axios from "axios";
import { safeParse } from "valibot";

import { DraftProductSchema } from "@/utils/schemas";

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiNDliOTQwMy03NzE0LTQxY2QtOGZlYy0zYzM4OTM0ZjM1MTEiLCJpYXQiOjE3NDk2ODMwNjUsImV4cCI6MTc0OTc2OTQ2NX0.4N8mbWEFnwkjc5U_j8PFZPNPoY6lEwmQQK8wGvkPRtQ";

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