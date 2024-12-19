import { skleraSDK } from '@sklera/sdk';
import { useEffect } from 'react';
import { CurrentTime } from './components/CurrentTime';

function App() {
  useEffect(() => {
    skleraSDK.loaded().then(console.log).catch(console.error);
  }, []);

  return (
    <>
      <CurrentTime />
    </>
  );
}

export default App;
