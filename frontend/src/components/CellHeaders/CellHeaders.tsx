const CellHeaders = () => {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return (
    <div className="grid grid-cols-7">
      {daysOfWeek.map((day) => (
        <p key={day} className="font-medium uppercase text-sm tracking-wide">
          {day.slice(0, 3)}
        </p>
      ))}
    </div>
  );
};

export default CellHeaders;
