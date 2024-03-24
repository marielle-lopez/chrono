const EventCard = () => {
  const colours = ['lime', 'teal', 'violet'];

  const colour = colours[Math.floor(Math.random() * colours.length)];

  return (
    <div className={`bg-${colour}-400 bg-opacity-20 px-2 py-1 rounded-sm`}>
      <div
        className={`border-l-2 border-dotted border-${colour}-400 border-opacity-50`}
      >
        <div className="pl-1">
          <p className={`text-${colour}-200 font-medium text-sm`}>
            Event title
          </p>
          <p className="uppercase text-xs font-semibold opacity-30">
            Event time
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
