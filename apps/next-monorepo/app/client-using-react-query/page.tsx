'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from 'apps/next-monorepo/services/products/api';
import { Products } from 'apps/next-monorepo/services/products/components/products';

export default function Index() {
  const { data: products } = useQuery(['products'], fetchProducts);

  return (
    <>
      <h1>{'Client only - using react-query'}</h1>

      {products && <Products products={products} />}
    </>
  );
}
