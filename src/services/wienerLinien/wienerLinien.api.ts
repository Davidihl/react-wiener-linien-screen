import { WienerLinienResponse } from './wienerLinien.types';

const apiUrl = import.meta.env.PROD
  ? 'https://www.wienerlinien.at/ogd_realtime'
  : 'https://www.wienerlinien.at/ogd_realtime';

export async function getWienerLinienResponseByStopId(
  stopIdArray: string[],
): Promise<WienerLinienResponse> {
  const joinedStopIds = stopIdArray
    .map((stopId) => `stopId=${stopId}`)
    .join('&');

  try {
    const response = await fetch(`${apiUrl}/monitor?${joinedStopIds}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while fetching data: ', error);
    return { data: { monitors: [] } };
  }
}
