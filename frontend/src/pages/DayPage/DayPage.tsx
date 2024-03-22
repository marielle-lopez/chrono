import CellList from '../../containers/CellList/CellList';
import { Day, Month } from '../../helpers/enums';

const DayPage = ({ day }: { day: Date }) => {
  return (
    <main className="flex flex-col flex-grow">
      <h1>
        {Object.values(Day)[day.getDay()]} {day.getDate()}{' '}
        {Object.values(Month)[day.getMonth()]} {day.getFullYear()}
      </h1>
      <CellList view="day" day={day} />
    </main>
  );
};

export default DayPage;
