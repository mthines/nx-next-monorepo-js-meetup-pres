import { Products } from '@next-monorepo/features-products';
import { prefetchProducts } from '@next-monorepo/features-products/server';

import {
  HydrateProvider,
  getQueryClient,
} from '@apps/next-monorepo/components/providers/react-query/hydration';

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
