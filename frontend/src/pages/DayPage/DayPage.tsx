import CellList from '../../containers/CellList/CellList';
import MainWrapper from '../../containers/MainWrapper/MainWrapper';

const DayPage = ({
  day,
  setIsHidden,
  events,
  setEvent,
}: {
  day: Date;
  setIsHidden: (isHidden: boolean) => void;
  events: Event[];
  setEvent: (event: Event) => void;
}) => {
  console.log(day);

  return (
    <MainWrapper>
      <CellList
        view="day"
        day={day}
        setIsHidden={setIsHidden}
        events={events}
        setEvent={setEvent}
      />
    </MainWrapper>
  );
};

export default DayPage;
