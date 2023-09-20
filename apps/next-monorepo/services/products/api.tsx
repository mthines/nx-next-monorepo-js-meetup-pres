import { QueryClient, QueryState } from '@tanstack/react-query';

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

/**
 * Fetch the Products from the dummy API
 */
export const fetchProducts = async (): Promise<Product[]> => {
  const productsJson = await fetch('https://dummyjson.com/products?limit=100');
  const products: { products: Product[] } = await productsJson.json();

  return products.products;
};

/**
 * Prefetches the products and adds them to the queryClient,
 * then returning the queryState
 */
export const prefetchProducts = async (
  queryClient: QueryClient
): Promise<QueryState<Product[], unknown>> => {
  await queryClient.prefetchQuery(['products'], fetchProducts);
  const queryCache = queryClient.getQueryState<Product[]>(['products']);

  if (!queryCache) {
    return {} as QueryState<Product[], unknown>;
  }

  return queryCache;
};
