'use client';

import { Products } from '@next-monorepo/services-products';
import { fetchProducts } from '@next-monorepo/services-products/server';
import { useQuery } from '@tanstack/react-query';

export default function Index() {
  const { data: products } = useQuery(['products'], fetchProducts);

  return (
    <>
      <h1>{'Client only - using react-query'}</h1>

      {products && <Products products={products} />}
    </>
  );
}
