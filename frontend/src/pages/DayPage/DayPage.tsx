import CellList from '../../containers/CellList/CellList';

const DayPage = ({ day }: { day: Date }) => {
  return (
    <main className="flex flex-col flex-grow">
      <CellList view="day" day={day} />
    </main>
  );
};

export default DayPage;
