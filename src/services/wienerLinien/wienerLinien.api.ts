import { WienerLinienResponse } from './wienerLinien.types';

const apiUrl = import.meta.env.PROD
  ? 'https://www.wienerlinien.at/ogd_realtime'
  : '/api';

export async function getWienerLinienResponseByStopId(
  stopIdArray: string[],
): Promise<WienerLinienResponse | undefined> {
  const joinedStopIds = stopIdArray
    .map((stopId) => `stopId=${stopId}`)
    .join('&');

  try {
    const response = await fetch(`${apiUrl}/monitor?${joinedStopIds}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
