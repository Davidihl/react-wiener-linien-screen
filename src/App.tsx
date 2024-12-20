import { skleraSDK } from '@sklera/sdk';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import CurrentTime from './components/CurrentTime';
import RealTimeData from './components/RealTimeData';
import { convertStopIdStringToArray } from './services/sklera/sklera.api';

const queryClient = new QueryClient();

function App() {
  // const [stopIds, setStopIds] = useState<string[]>([]);
  useEffect(() => {
    skleraSDK
      .loaded()
      .then((response) => {
        console.log('response', response);
        if (response.configData?.stopIds) {
          const stopIdArray = convertStopIdStringToArray(
            response.configData?.stopIds,
          );
          console.log(stopIdArray);
          // TODO: setStopIds(response.configData?.stopIds) to load from config
        }
      })
      .catch(console.error);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <CurrentTime />
      <RealTimeData stopIds={['3445', '3448', '231']} />
    </QueryClientProvider>
  );
}

export default App;
