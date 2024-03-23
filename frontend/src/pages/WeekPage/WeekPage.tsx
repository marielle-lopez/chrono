import CellHeaders from '../../components/CellHeaders/CellHeaders';
import CellList from '../../containers/CellList/CellList';
import MainWrapper from '../../containers/MainWrapper/MainWrapper';

const WeekPage = ({
  setIsHidden,
  day,
}: {
  setIsHidden: (isHidden: boolean) => void;
  day: Date;
}) => {
  return (
    <MainWrapper>
      <CellHeaders />
      <CellList setIsHidden={setIsHidden} view="week" day={day} />
    </MainWrapper>

  );
};

export default WeekPage;
