// app/providers.jsx
'use client';

import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query';
import React from 'react';

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnMount: false,
    },
  },
};

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () => new QueryClient(queryClientConfig)
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
