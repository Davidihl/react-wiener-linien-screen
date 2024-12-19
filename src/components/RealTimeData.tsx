import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { getWienerLinienResponseByStopId } from '../services/wienerLinien/wienerLinien.api';
import { WienerLinienResponse } from '../services/wienerLinien/wienerLinien.types';
import SingleLine from './SingleLine';

export default function RealTimeData() {
  const [wienerLinienResponse, setWienerLinienResponse] = useState<
    WienerLinienResponse | undefined
  >(undefined);
  const { data, isLoading } = useQuery({
    queryKey: ['wienerLinienData'],
    queryFn: () =>
      getWienerLinienResponseByStopId(['3445', '3448', '223', '231', '4203']),
    refetchInterval: 60000,
  });

  useEffect(() => {
    console.log('updated', data);
    setWienerLinienResponse(data);
  }, [data]);

  if (isLoading) {
    return <div>Pending...</div>;
  }

  return (
    <>
      <h1 className="text-3xl mb-8">Echtzeit Abfrage</h1>
      <div className="flex flex-col gap-8">
        {wienerLinienResponse?.data.monitors.map((lineDirection, index) => (
          <SingleLine
            key={`${lineDirection.locationStop.properties.type}-${lineDirection.locationStop.properties.attributes.rbl}-${index}`}
            data={lineDirection.lines}
            station={lineDirection.locationStop.properties.title}
          />
        ))}
      </div>
    </>
  );
}
