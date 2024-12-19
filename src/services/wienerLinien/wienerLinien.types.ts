export type WienerLinienResponse = {
  data: WienerLinienData;
  message: {
    value: string;
    messageCode: number;
    serverTime: string;
  };
};

export type WienerLinienData = {
  monitors: LineDirection[];
};

export type LineDirection = {
  locationStop: LineLocationStop;
  lines: Line[];
  attributes: Attributes;
};

export type LineLocationStop = {
  type: string;
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  properties: {
    name: string;
    title: string;
    municipality: string;
    municipalityId: number;
    type: string;
    coordName: string;
    attributes: Attributes;
  };
};

export type Line = {
  name: string;
  towards: string;
  direction: string;
  platform: string;
  richtungsId: string;
  barrierFree: boolean;
  realtimeSupported: boolean;
  trafficjam: boolean;
  departures: { departure: Departure[] };
  type: string;
  lineId: number;
};

export type Departure = {
  departureTime: {
    timePlanned: string;
    timeReal: string;
    countdown: number;
  };
  vehicle: Vehicle;
};

export type Vehicle = Omit<Line, 'departures'> & {
  foldingRamp: boolean;
  attributes: Attributes;
};

export type Attributes = {
  [key: string]: string;
};
