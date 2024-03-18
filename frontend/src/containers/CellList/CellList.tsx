import Cell from '../../components/Cell/Cell';

const CellList = ({ year, month }: { year: number; month: number }) => {
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

  const days = getDaysInMonth(year, month);

  return (
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
  );
};

export default CellList;
