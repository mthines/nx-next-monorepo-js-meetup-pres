'use client';

import { useEffect, useState } from 'react';

import {
  Product,
  fetchProducts,
} from '@apps/next-monorepo/features/products/api';
import { Products } from '@apps/next-monorepo/features/products/components/products';

export default function Index() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetchProducts();
      setProducts(response);
    })();
  }, []);

  return (
    <>
      <h1>{'Client only'}</h1>

      {products && <Products products={products} />}
    </>
  );
}
