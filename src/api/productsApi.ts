import Product from "../types/product";

const BASE_URL = "https://fakestoreapi.com";

async function fetchFromApi<T>(path: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export async function fetchProducts(): Promise<Product[]> {
  return fetchFromApi<Product[]>(`/products`);
}

export async function fetchProductDetails(id: string): Promise<Product> {
  return fetchFromApi<Product>(`/products/${id}`);
}
