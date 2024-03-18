import CellHeaders from '../../components/CellHeaders/CellHeaders';
import CellList from '../CellList/CellList';

const MonthView = () => {
  return (
    <div className="flex flex-col flex-grow">
      <CellHeaders />
      <CellList />
    </div>
  );
};

export default MonthView;
