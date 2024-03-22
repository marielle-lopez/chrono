import CellHeaders from '../../components/CellHeaders/CellHeaders';
import CellList from '../../containers/CellList/CellList';

const MonthPage = ({
  setIsHidden,
  month,
  year,
}: {
  setIsHidden: (isHidden: boolean) => void;
  month: number;
  year: number;
}) => {
  return (
    <main className="flex flex-col flex-grow">
      <CellHeaders />
      {month !== -1 && year !== -1 && (
        <CellList
          setIsHidden={setIsHidden}
          view="month"
          year={year}
          month={month}
        />
      )}
    </main>
  );
};

export default MonthPage;
