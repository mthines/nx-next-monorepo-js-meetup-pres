'use client';

import { useQuery } from '@tanstack/react-query';
import { Products } from '../../services/products/components/products';
import { fetchProducts } from '../../services/products/api';

export default function Index() {
  const { data: products } = useQuery(['products'], fetchProducts);

  return (
    <>
      <h1>{'Client only - using react-query'}</h1>

      {products && <Products products={products} />}
    </>
  );
}
