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
        <p key={day}>{day}</p>
      ))}
    </div>
  );
};

export default CellHeaders;
