import { skleraSDK } from '@sklera/sdk';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    skleraSDK.loaded().then(console.log).catch(console.error);
  }, []);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
