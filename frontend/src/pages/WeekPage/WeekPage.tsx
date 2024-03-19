const WeekPage = ({ day }: { day: Date }) => {
  return <main>WeekPage: {day.toISOString()}</main>;
};

export default WeekPage;
