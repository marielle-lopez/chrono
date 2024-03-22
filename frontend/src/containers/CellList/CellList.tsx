import Cell from '../../components/Cell/Cell';
import { getDatesInWeek } from '../../helpers/functions';

type Nullable<T> = T | undefined | null;

interface CellListProps {
  setIsHidden: (isHidden: boolean) => void;
  view?: Nullable<string>;
  day?: Nullable<Date>;
  month?: Nullable<number>;
  year?: Nullable<number>;
}

const CellList = ({
  setIsHidden,
  view = null,
  day = null,
  month = null,
  year = null,
}: CellListProps) => {
  let hours;
  let days;

  const getDaysInMonth = (year: number, month: number): Date[] => {
    const date = new Date(year, month, 1);
    const days = [];

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return days;
  };

  const startDummyDays = (date: Date): number[] => {
    const numberArr = [];
    for (let i = 0; i < date.getDay(); i++) {
      numberArr.push(i);
    }

    return numberArr;
  };

  const endDummyDays = (date: Date): number[] => {
    const numberArr = [];
    for (let i = date.getDay() + 1; i <= 6; i++) {
      numberArr.push(i);
    }

    return numberArr;
  };

  if (day !== null) {
    hours = [...Array(24).keys()];
  }

  if (day !== null && view === 'week') {
    days = getDatesInWeek(day);
  }

  if (month !== null && year !== null) {
    days = getDaysInMonth(year, month);
  }

  return (
    <>
      {day && view === 'day' && (
        <div className="flex flex-col flex-grow gap-px gap-py px-px py-px bg-stone-800">
          {hours?.map((hour) => (
            <Cell setIsHidden={setIsHidden} key={hour} hour={hour} />
          ))}
        </div>
      )}
      {day && view === 'week' && (
        <div className="flex-grow grid grid-cols-7 gap-px gap-py px-px py-px bg-stone-800">
          {days?.map((day) => (
            <Cell
              setIsHidden={setIsHidden}
              key={day.getDate()}
              day={day.getDate()}
            />
          ))}
        </div>
      )}
      {days && view === 'month' && (
        <div className="flex-grow grid grid-cols-7 gap-px gap-py px-px py-px bg-stone-800">
          {startDummyDays(days[0]).map((dummyDay: number) => (
            <Cell key={`dummy${dummyDay}`} day={0} />
          ))}
          {days.map((day) => (
            <Cell
              key={day.getDate()}
              setIsHidden={setIsHidden}
              day={day.getDate()}
            />
          ))}
          {endDummyDays(days[days.length - 1]).map((dummyDay: number) => (
            <Cell key={`dummy${dummyDay}`} day={0} />
          ))}
        </div>
      )}
    </>
  );
};

export default CellList;
