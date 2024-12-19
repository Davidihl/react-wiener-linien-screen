import { useEffect, useState } from 'react';
import { Line } from '../services/wienerLinien/wienerLinien.types';
import { getTimeString } from '../utils/dateTime';
import Timeline from './Timeline';

type SingleLineProps = {
  data: Line[];
  station: string;
};

export default function SingleLine(props: SingleLineProps) {
  const [isArriving, setIsArriving] = useState<boolean>(
    props.data[0].departures.departure[0].departureTime.countdown <= 1,
  );
  useEffect(() => {
    setIsArriving(
      props.data[0].departures.departure[0].departureTime.countdown <= 1,
    );
  }, [props.data]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-left p-2 flex gap-2 items-center">
          <div className=" bg-red-500 text-lg font-medium text-white rounded-full h-8 w-8 flex shrink-0 items-center justify-center">
            {props.data[0].name}
          </div>
          <div>
            <div className="text-xs">Station {props.station}</div>
            <h2 className="text-xl">Richtung {props.data[0].towards}</h2>
          </div>
        </div>
        <div className="text-right p-2">
          <h3 className="text-xs">Nächste Abfahrt</h3>
          <div>
            {getTimeString(
              new Date(
                props.data[0].departures.departure[0].departureTime.timeReal,
              ),
              false,
            )}
          </div>
          {/* {props.data[0].departures.departure[0].departureTime.countdown !==
        0 && <div>placeholder animation</div>} */}
        </div>
      </div>
      <Timeline isArriving={isArriving} />
    </div>
  );
}
