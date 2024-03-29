import { Hour } from '../../helpers/enums';
import EventCard from '../EventCard/EventCard';

type Nullable<T> = T | undefined | null;

interface CellProps {
  setIsHidden?: Nullable<(isHidden: boolean) => void>;
  hour?: Nullable<number>;
  day?: Nullable<number>;
  events?: Nullable<Event[]>;
  date?: Nullable<Date>;
  setEvent?: Nullable<(event: Event) => void>;
}

const Cell = ({
  setIsHidden = null,
  hour = null,
  day = null,
  events = null,
  date = null,
  setEvent = null,
}: CellProps) => {
  // console.log(date, date?.toDateString(), events);

  return (
    <>
      {(hour || hour === 0) && setIsHidden && (
        <div
          className="flex flex-grow bg-black"
          onClick={() => setIsHidden(false)}
        >
          <p>{hour}</p>
          <div className="flex flex-col gap-2 pl-4">
            {events &&
              setEvent &&
              events.map((event) => (
                <EventCard key={event.name} event={event} setEvent={setEvent} />
              ))}
          </div>
        </div>
      )}
      {(day || day === 0) && setIsHidden === null && (
        <div className="flex flex-grow bg-black">{day !== 0 ? day : ''}</div>
      )}
      {(day || day === 0) && setIsHidden && (
        <div
          className="flex flex-col flex-grow bg-black pr-2"
          onClick={() => setIsHidden(false)}
        >
          {day !== 0 ? <p className="py-1 px-2">{day}</p> : ''}
          {events &&
            setEvent &&
            events.map((event) => (
              <EventCard key={event.name} event={event} setEvent={setEvent} />
            ))}
        </div>
      )}
    </>
  );
};

export default Cell;
