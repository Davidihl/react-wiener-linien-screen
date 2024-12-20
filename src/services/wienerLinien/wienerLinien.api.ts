import { skleraSDK } from '@sklera/sdk';
import { WienerLinienResponse } from './wienerLinien.types';

export async function getWienerLinienResponseByStopId(
  stopIdArray: string[],
): Promise<WienerLinienResponse> {
  const joinedStopIds = stopIdArray
    .map((stopId) => `stopId=${stopId}`)
    .join('&');

  try {
    let response;
    if (import.meta.env.PROD) {
      response = await skleraSDK.fetchRemoteData(
        `https://www.wienerlinien.at/ogd_realtime/monitor?${joinedStopIds}`,
      );
    } else {
      response = await fetch(`/api/monitor?${joinedStopIds}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while fetching data: ', error);
    return { data: { monitors: [] } };
  }
}
