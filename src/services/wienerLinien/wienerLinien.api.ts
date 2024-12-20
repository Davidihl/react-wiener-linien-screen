import { WienerLinienResponse } from './wienerLinien.types';

export async function getWienerLinienResponseByStopId(
  stopIdArray: string[],
): Promise<WienerLinienResponse> {
  const joinedStopIds = stopIdArray
    .map((stopId) => `stopId=${stopId}`)
    .join('&');

  try {
    const response = await fetch(
      ` https://eogrkqip9l.execute-api.eu-west-1.amazonaws.com/monitor?xyz/monitor?${joinedStopIds}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error while fetching data: ', error);
    return { data: { monitors: [] } };
  }
}
