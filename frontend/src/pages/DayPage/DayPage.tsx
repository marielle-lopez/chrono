import CellList from '../../containers/CellList/CellList';

const DayPage = ({
  day,
  setIsHidden,
}: {
  day: Date;
  setIsHidden: (isHidden: boolean) => void;
}) => {
  return (
    <main className="flex flex-col flex-grow">
      <CellList view="day" day={day} setIsHidden={setIsHidden} />
    </main>
  );
};

export default DayPage;
