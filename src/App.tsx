import { skleraSDK } from '@sklera/sdk';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import CurrentTime from './components/CurrentTime';
import LoadingSpinner from './components/LoadingSpinner';
import RealTimeData from './components/RealTimeData';
// import RealTimeData from './components/RealTimeData';
import { convertStopIdStringToArray } from './services/sklera/sklera.api';

const queryClient = new QueryClient();

function App() {
  const [stopIds, setStopIds] = useState<string[]>(['3445', '3448']);
  useEffect(() => {
    skleraSDK
      .loaded()
      .then((response) => {
        if (response.configData?.stopIds) {
          const stopIdArray = convertStopIdStringToArray(
            response.configData?.stopIds,
          );

          setStopIds(stopIdArray);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <CurrentTime />
      <h1 className="text-3xl mb-8">Echtzeit Abfrage</h1>
      {stopIds.length === 0 ? (
        <div className="flex items-center justify-center w-full mt-8">
          <LoadingSpinner />
        </div>
      ) : (
        <RealTimeData stopIds={stopIds} />
      )}
    </QueryClientProvider>
  );
}

export default App;
