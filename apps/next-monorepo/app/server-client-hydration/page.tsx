import {
  getQueryClient,
  HydrateProvider,
} from '../../components/providers/react-query/hydration';
import { Products } from '../../services/products/components/products';
import { prefetchProducts } from '../../services/products/api';

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
