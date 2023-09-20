'use client';

import { Products } from '../../services/products/components/products';
import { Product, fetchProducts } from '../../services/products/api';
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
