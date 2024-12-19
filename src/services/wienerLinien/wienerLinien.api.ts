import { WienerLinienResponse } from './wienerLinien.types';

export async function getWienerLinienResponseByStopId(
  stopIdArray: string[],
): Promise<WienerLinienResponse | undefined> {
  const joinedStopIds = stopIdArray
    .map((stopId) => `stopId=${stopId}`)
    .join('&');

  try {
    const response = await fetch(`/api/monitor?${joinedStopIds}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
