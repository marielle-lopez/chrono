import CellHeaders from '../../components/CellHeaders/CellHeaders';
import CellList from '../../containers/CellList/CellList';

const WeekPage = ({
  setIsHidden,
  day,
}: {
  setIsHidden: (isHidden: boolean) => void;
  day: Date;
}) => {
  return (
    <main className="flex flex-col flex-grow">
      <CellHeaders />
      <CellList setIsHidden={setIsHidden} view="week" day={day} />
    </main>
  );
};

export default WeekPage;
