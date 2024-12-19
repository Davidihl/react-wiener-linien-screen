import { skleraSDK } from '@sklera/sdk';

export async function getWienerLinienResponseBySkleraConfig() {
  try {
    const data = await skleraSDK.loaded();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export function convertStopIdStringToArray(stopIdString: string) {
  return stopIdString.split(',').map((stopId) => stopId.trim());
}
