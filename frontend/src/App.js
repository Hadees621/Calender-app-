import React from 'react';
import { AppContext } from './hooks';
import Calendar from './components/Calendar';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContext>
        <Calendar />
      </AppContext>
    </QueryClientProvider>
  );
}
