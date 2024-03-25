import CellHeaders from '../../components/CellHeaders/CellHeaders';
import CellList from '../../containers/CellList/CellList';
import MainWrapper from '../../containers/MainWrapper/MainWrapper';

const MonthPage = ({
  setIsHidden,
  month,
  year,
  events,
}: {
  setIsHidden: (isHidden: boolean) => void;
  month: number;
  year: number;
  events: Event[];
}) => {
  return (
    <MainWrapper>
      <CellHeaders />
      {month !== -1 && year !== -1 && (
        <CellList
          setIsHidden={setIsHidden}
          view="month"
          year={year}
          month={month}
          events={events}
        />
      )}
    </MainWrapper>
  );
};

export default MonthPage;
