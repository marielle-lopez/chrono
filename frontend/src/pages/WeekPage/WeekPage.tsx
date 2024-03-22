import CellList from '../../containers/CellList/CellList';
// import { formatDateToString } from '../../helpers/functions';

const WeekPage = ({ day }: { day: Date }) => {
  // const getDatesInWeek = (date: Date): Date[] => {
  //   return Array(7)
  //     .fill(new Date(date))
  //     .map(
  //       (date, i) => new Date(date.setDate(date.getDate() - date.getDay() + i))
  //     );
  // };

  // const datesInWeek = getDatesInWeek(day);
  // console.log(datesInWeek);

  return (
    <main className="flex flex-grow">
      {/* <p>{formatDateToString(datesInWeek[0])}</p>
      <p>{formatDateToString(datesInWeek[datesInWeek.length - 1])}</p> */}
      <CellList view="week" day={day} />
    </main>
  );
};

export default WeekPage;
