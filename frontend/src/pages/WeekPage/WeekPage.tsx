import CellHeaders from '../../components/CellHeaders/CellHeaders';
import CellList from '../../containers/CellList/CellList';
import MainWrapper from '../../containers/MainWrapper/MainWrapper';

const WeekPage = ({
  setIsHidden,
  day,
  events,
  setEvent,
}: {
  setIsHidden: (isHidden: boolean) => void;
  day: Date;
  events: Event[];
  setEvent: (event: Event) => void;
}) => {
  return (
    <MainWrapper>
      <div className="flex flex-col flex-grow">
        <CellHeaders />
        <CellList
          setIsHidden={setIsHidden}
          view="week"
          day={day}
          events={events}
          setEvent={setEvent}
        />
      </div>
    </MainWrapper>
  );
};

export default WeekPage;
