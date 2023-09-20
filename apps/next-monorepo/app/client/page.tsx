'use client';

import {
  Product,
  fetchProducts,
} from 'apps/next-monorepo/services/products/api';
import { Products } from 'apps/next-monorepo/services/products/components/products';
import { useEffect, useState } from 'react';

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
