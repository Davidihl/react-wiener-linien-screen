import { useQuery } from '@tanstack/react-query';
import { getWienerLinienResponseByStopId } from '../services/wienerLinien/wienerLinien.api';

export default function RealTimeData() {
  const { data, isLoading } = useQuery({
    queryKey: ['wienerLinienData'],
    queryFn: () => getWienerLinienResponseByStopId(['3445', '3448']),
    refetchInterval: 60000,
  });

  if (isLoading) {
    return <div>Pending...</div>;
  }

  return (
    <>
      <h1 className="text-3xl mb-8">Echtzeit Abfrage</h1>
      <div className="flex flex-col gap-8"></div>
    </>
  );
}
