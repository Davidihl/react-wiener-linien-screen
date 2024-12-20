import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { getWienerLinienResponseByStopId } from '../services/wienerLinien/wienerLinien.api';
import { WienerLinienResponse } from '../services/wienerLinien/wienerLinien.types';
import SingleLine from './SingleLine';

type RealTimeDataProps = {
  stopIds: string[];
};

export default function RealTimeData(props: RealTimeDataProps) {
  const [wienerLinienResponse, setWienerLinienResponse] = useState<
    WienerLinienResponse | undefined
  >(undefined);
  const { data, isLoading, isError } = useQuery({
    queryKey: ['wienerLinienData'],
    queryFn: () => getWienerLinienResponseByStopId(props.stopIds),
    refetchInterval: 60000,
  });

  useEffect(() => {
    // console.log('RealTimeData.tsx', data);
    setWienerLinienResponse(data);
  }, [data]);

  if (isLoading) {
    return <div>Pending...</div>;
  }

  if (isError) {
    return <div>{isError}</div>;
  }

  if (!wienerLinienResponse) {
    return <div>No Response.</div>;
  }

  return (
    <>
      <h1 className="text-3xl mb-8">Echtzeit Abfrage</h1>
      <div className="flex flex-col gap-8">
        {wienerLinienResponse?.data.monitors.length != 0 ? (
          wienerLinienResponse?.data.monitors.map((lineDirection, index) => (
            <SingleLine
              key={`${lineDirection.locationStop.properties.type}-${lineDirection.locationStop.properties.attributes.rbl}-${index}`}
              data={lineDirection.lines}
              station={lineDirection.locationStop.properties.title}
            />
          ))
        ) : (
          <div>Keine Daten verfügbar</div>
        )}
      </div>
    </>
  );
}
