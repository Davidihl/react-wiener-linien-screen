import { skleraSDK } from '@sklera/sdk';
import { WienerLinienResponse } from './wienerLinien.types';

export async function getWienerLinienResponseByStopId(
  stopIdArray: string[],
): Promise<WienerLinienResponse> {
  const joinedStopIds = stopIdArray
    .map((stopId) => `stopId=${stopId}`)
    .join('&');

  try {
    if (import.meta.env.PROD) {
      await skleraSDK.loaded();
      const data = await skleraSDK.sendHttpRequest(
        `https://eogrkqip9l.execute-api.eu-west-1.amazonaws.com/monitor?${joinedStopIds}`,
        { method: 'GET' },
      );
      return data;
    } else {
      const response = await fetch(`/api/monitor?${joinedStopIds}`);
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Error while fetching data: ', error);
    return { data: { monitors: [] } };
  }
}
