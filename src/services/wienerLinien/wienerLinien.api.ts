import { WienerLinienResponse } from './wienerLinien.types';

export async function getWienerLinienResponseByStopId(
  stopId: string,
): Promise<WienerLinienResponse> {
  const response = await fetch(`/api/monitor?stopId=${stopId}`);
  const data = await response.json();
  console.log(data);
  return data;
}
