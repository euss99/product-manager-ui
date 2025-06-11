import { type ActionFunctionArgs, redirect } from "react-router";

import { addProduct } from "@/utils/services/ProductServices";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  if (Object.values(data).includes("")) {
    const error = "All fields are required";

    return error;
  }

  await addProduct(data);

  return redirect("/");
};