import CellHeaders from '../../components/CellHeaders/CellHeaders';
import CellList from '../../containers/CellList/CellList';
import MainWrapper from '../../containers/MainWrapper/MainWrapper';

const WeekPage = ({
  setIsHidden,
  day,
  events,
}: {
  setIsHidden: (isHidden: boolean) => void;
  day: Date;
  events: Event[];
}) => {
  return (
    <MainWrapper>
      <CellHeaders />
      <CellList
        setIsHidden={setIsHidden}
        view="week"
        day={day}
        events={events}
      />
    </MainWrapper>
  );
};

export default WeekPage;
