import { WienerLinienResponse } from './wienerLinien.types';

export async function getWienerLinienResponseByStopId(
  stopIdArray: string[],
): Promise<WienerLinienResponse> {
  const concatenatedStopIds = stopIdArray
    .map((stopId) => `stopId=${stopId}`)
    .join('&');

  const response = await fetch(`/api/monitor?${concatenatedStopIds}`);
  const data = await response.json();
  return data;
}
