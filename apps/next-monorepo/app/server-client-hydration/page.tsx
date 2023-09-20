import {
  getQueryClient,
  HydrateProvider,
} from 'apps/next-monorepo/components/providers/react-query/hydration';
import { prefetchProducts } from 'apps/next-monorepo/services/products/api';
import { Products } from 'apps/next-monorepo/services/products/components/products';

export default async function Index() {
  const queryClient = getQueryClient();
  const { data: products } = await prefetchProducts(queryClient);

  return (
    <HydrateProvider queryClient={queryClient}>
      <h1>{'Server Component - With client hydration'}</h1>

      {products && <Products products={products} />}
    </HydrateProvider>
  );
}
