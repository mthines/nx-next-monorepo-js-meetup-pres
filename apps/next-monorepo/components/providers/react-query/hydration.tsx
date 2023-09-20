import { dehydrate, Hydrate, QueryClient } from '@tanstack/react-query';
import { cache } from 'react';

/**
 * Get the Query Client from the cache.
 * This will reuse the queryClient if it already exists.
 */
export const getQueryClient = cache(() => new QueryClient());

/**
 * This will hydrate the Query Client with the data fetched on the server.
 */
export const HydrateProvider = ({
  children,
  queryClient,
}: {
  children: React.ReactNode;
  queryClient: QueryClient;
}) => {
  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
};
