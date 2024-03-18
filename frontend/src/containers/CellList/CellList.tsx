import Cell from '../../components/Cell/Cell';

const getDaysInMonth = (): Date[] => {
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
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
    console.log(i);
    numberArr.push(i);
  }

  return numberArr;
};

const CellList = () => {
  const days = getDaysInMonth();

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
