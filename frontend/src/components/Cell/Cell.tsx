const Cell = ({ day }: { day: number }) => {
  return <div className="flex bg-stone-900">{day !== 0 ? day : ''}</div>;
};

export default Cell;
