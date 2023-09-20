'use client';

import { useQuery } from '@tanstack/react-query';

import { Products } from '@next-monorepo/features-products';
import { fetchProducts } from '@next-monorepo/features-products/server';

export default function Index() {
  const { data: products } = useQuery(['products'], fetchProducts);

  return (
    <>
      <h1>{'Client only - using react-query'}</h1>

      {products && <Products products={products} />}
    </>
  );
}
