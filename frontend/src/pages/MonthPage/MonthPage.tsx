import CellHeaders from '../../components/CellHeaders/CellHeaders';
import CellList from '../../containers/CellList/CellList';
import MainWrapper from '../../containers/MainWrapper/MainWrapper';

const MonthPage = ({
  setIsHidden,
  month,
  year,
  events,
  setEvent,
}: {
  setIsHidden: (isHidden: boolean) => void;
  month: number;
  year: number;
  events: Event[];
  setEvent: (event: Event) => void;
}) => {
  return (
    <MainWrapper>
      <div className="flex flex-col flex-grow">
        <CellHeaders />
        {month !== -1 && year !== -1 && (
          <CellList
            setIsHidden={setIsHidden}
            view="month"
            year={year}
            month={month}
            events={events}
            setEvent={setEvent}
          />
        )}
      </div>
    </MainWrapper>
  );
};

export default MonthPage;
