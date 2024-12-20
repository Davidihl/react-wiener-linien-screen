import { useQuery } from '@tanstack/react-query';
import { getWienerLinienResponseByStopId } from '../services/wienerLinien/wienerLinien.api';
import LoadingSpinner from './LoadingSpinner';
import SingleLine from './SingleLine';

type RealTimeDataProps = {
  stopIds: string[];
};

export default function RealTimeData(props: RealTimeDataProps) {
  const {
    data: wienerLinienResponse,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['wienerLinienData'],
    queryFn: () => getWienerLinienResponseByStopId(props.stopIds),
    refetchInterval: 60000,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full mt-8">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return <div>{isError}</div>;
  }

  if (!wienerLinienResponse) {
    return <div>No Response.</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      {wienerLinienResponse?.data ? (
        wienerLinienResponse?.data.monitors.map((lineDirection, index) => (
          <SingleLine
            key={`${lineDirection.locationStop.properties.type}-${lineDirection.locationStop.properties.attributes.rbl}-${index}`}
            data={lineDirection.lines}
            station={lineDirection.locationStop.properties.title}
          />
        ))
      ) : (
        <div>Keine Daten verfügbar: {wienerLinienResponse.message.value}</div>
      )}
    </div>
  );
}
