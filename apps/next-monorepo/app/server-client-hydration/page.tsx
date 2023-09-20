import { Products } from '@next-monorepo/services-products';
import { prefetchProducts } from '@next-monorepo/services-products/server';

import {
  getQueryClient,
  HydrateProvider,
} from 'apps/next-monorepo/components/providers/react-query/hydration';

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
