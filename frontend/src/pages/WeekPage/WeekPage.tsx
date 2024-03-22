import CellList from '../../containers/CellList/CellList';

const WeekPage = ({ day }: { day: Date }) => {
  return (
    <main className="flex flex-grow">
      <CellList view="week" day={day} />
    </main>
  );
};

export default WeekPage;
