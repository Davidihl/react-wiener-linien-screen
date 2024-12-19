import { skleraSDK } from '@sklera/sdk';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import CurrentTime from './components/CurrentTime';
import RealTimeData from './components/RealTimeData';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    skleraSDK.loaded().then(console.log).catch(console.error);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <CurrentTime />
      <RealTimeData />
    </QueryClientProvider>
  );
}

export default App;
