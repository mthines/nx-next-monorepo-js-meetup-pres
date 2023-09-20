import { Products } from '../../services/products/components/products';
import { fetchProducts } from '../../services/products/api';

export default async function Index() {
  const products = await fetchProducts();

  return (
    <>
      <h1>{'Server Component - No hydration'}</h1>

      {products && <Products products={products} />}
    </>
  );
}
