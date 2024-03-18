import CellHeaders from '../../components/CellHeaders/CellHeaders';
import CellList from '../../containers/CellList/CellList';

const MonthPage = ({ month, year }: { month: number; year: number }) => {
  return (
    <div className="flex flex-col flex-grow">
      <CellHeaders />
      {month !== -1 && year !== -1 && <CellList year={year} month={month} />}
    </div>
  );
};

export default MonthPage;