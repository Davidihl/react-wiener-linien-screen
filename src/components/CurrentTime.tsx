import { useEffect, useState } from 'react';
import { getTimeString } from '../utils/dateTime';

export default function CurrentTime() {
  const [currentTime, setCurrentTime] = useState<string>(
    getTimeString(new Date()),
  );

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(getTimeString(new Date()));
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  return <div>{currentTime}</div>;
}
