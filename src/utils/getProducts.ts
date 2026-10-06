import type { Product } from "../interfaces/IProducts";

const API_URL = "https://fakestoreapi.com/products";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`Error al obtener productos: ${response.status}`);
  }

  const data: Product[] = await response.json();
  return data;
}
