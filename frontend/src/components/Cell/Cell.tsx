type Nullable<T> = T | undefined | null;

interface CellProps {
  hour?: Nullable<number>;
  day?: Nullable<number>;
}

const Cell = ({ hour = null, day = null }: CellProps) => {
  return (
    <>
      {hour || hour === 0 ? (
        <div className="flex-grow bg-stone-900">{hour}</div>
      ) : (
        ''
      )}
      {day || day === 0 ? (
        <div className="flex flex-grow bg-stone-900">
          {day !== 0 ? day : ''}
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Cell;
