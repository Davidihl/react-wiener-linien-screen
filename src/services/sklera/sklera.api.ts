import { skleraSDK } from '@sklera/sdk';

export async function getWienerLinienResponseBySkleraConfig() {
  try {
    const data = await skleraSDK.loaded();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
