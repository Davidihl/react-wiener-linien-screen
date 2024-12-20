import { Line } from '../services/wienerLinien/wienerLinien.types';
import Timeline from './Timeline';

type SingleLineProps = {
  data: Line[];
  station: string;
};

export default function SingleLine(props: SingleLineProps) {
  const departure =
    props.data[0].departures.departure[0].departureTime.countdown;
  const isArriving = departure <= 1;

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
          <div>{departure + ' min'}</div>
        </div>
      </div>
      <Timeline isArriving={isArriving} />
    </div>
  );
}
