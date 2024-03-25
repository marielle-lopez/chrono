import EventCard from '../EventCard/EventCard';

type Nullable<T> = T | undefined | null;

interface CellProps {
  setIsHidden?: Nullable<(isHidden: boolean) => void>;
  hour?: Nullable<number>;
  day?: Nullable<number>;
  events?: Nullable<Event[]>;
  date?: Nullable<Date>;
}

const Cell = ({
  setIsHidden = null,
  hour = null,
  day = null,
  events = null,
  date = null,
}: CellProps) => {
  console.log(date, date?.toDateString(), events);

  return (
    <>
      {(hour || hour === 0) && setIsHidden && (
        <div
          className="flex-grow bg-stone-900"
          onClick={() => setIsHidden(false)}
        >
          {hour}
        </div>
      )}
      {(day || day === 0) && setIsHidden === null && (
        <div className="flex flex-grow bg-stone-900">
          {day !== 0 ? day : ''}
        </div>
      )}
      {(day || day === 0) && setIsHidden && (
        <div
          className="flex flex-col flex-grow bg-stone-900 px-2 py-1"
          onClick={() => setIsHidden(false)}
        >
          {day !== 0 ? day : ''}
          {events &&
            events.map((event) => <EventCard key={event.name} event={event} />)}
        </div>
      )}
    </>
  );
};

export default Cell;
