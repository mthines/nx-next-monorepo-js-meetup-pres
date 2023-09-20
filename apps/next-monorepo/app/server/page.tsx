import { fetchProducts } from 'apps/next-monorepo/services/products/api';
import { Products } from 'apps/next-monorepo/services/products/components/products';

export default async function Index() {
  const products = await fetchProducts();

  return (
    <>
      <h1>{'Server Component - No hydration'}</h1>

      {products && <Products products={products} />}
    </>
  );
}
