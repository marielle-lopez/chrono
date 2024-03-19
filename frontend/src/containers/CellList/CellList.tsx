import Cell from '../../components/Cell/Cell';

type Nullable<T> = T | undefined | null;

interface CellListProps {
  day?: Nullable<Date>;
  month?: Nullable<number>;
  year?: Nullable<number>;
}

const CellList = ({ day = null, month = null, year = null }: CellListProps) => {
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

  if (month !== null && year !== null) {
    days = getDaysInMonth(year, month);
  }

  return (
    <>
      {days && (
        <div className="flex-grow grid grid-cols-7 gap-px gap-py px-px py-px bg-stone-800">
          {startDummyDays(days[0]).map((dummyDay: number) => (
            <Cell key={`dummy${dummyDay}`} day={0} />
          ))}
          {days.map((day) => (
            <Cell key={day.getDate()} day={day.getDate()} />
          ))}
          {endDummyDays(days[days.length - 1]).map((dummyDay: number) => (
            <Cell key={`dummy${dummyDay}`} day={0} />
          ))}
        </div>
      )}
      {day && (
        <div className="flex flex-col flex-grow gap-px gap-py px-px py-px bg-stone-800">
          {hours?.map((hour) => (
            <Cell key={hour} hour={hour} />
          ))}
        </div>
      )}
    </>
  );
};

export default CellList;
