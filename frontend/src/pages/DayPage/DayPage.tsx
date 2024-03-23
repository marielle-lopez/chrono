import CellList from '../../containers/CellList/CellList';
import MainWrapper from '../../containers/MainWrapper/MainWrapper';

const DayPage = ({
  day,
  setIsHidden,
}: {
  day: Date;
  setIsHidden: (isHidden: boolean) => void;
}) => {
  return (
    <MainWrapper>
      <CellList view="day" day={day} setIsHidden={setIsHidden} />
    </MainWrapper>
  );
};

export default DayPage;
