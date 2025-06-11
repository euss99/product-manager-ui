import { number, object, string } from "valibot";

export const DraftProductSchema = object({
  name: string(),
  description: string(),
  price: number(),
});
