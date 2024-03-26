const EventCard = ({
  event,
  setEvent,
}: {
  event: Event;
  setEvent: (event: Event) => void;
}) => {
  const label = () => {
    if (event.label === 'Personal') {
      return 'lime';
    }
    if (event.label === 'Work') {
      return 'teal';
    }
    if (event.label === 'University') {
      return 'violet';
    }
    return 'blue';
  };

  const colour = label();

  return (
    <div
      className={`bg-${colour}-400 bg-opacity-20 px-2 py-1 rounded-tr-lg rounded-br-lg border-l-4 border-${colour}-400 hover:bg-black`}
      onClick={() => setEvent(event)}
    >
      <p className={`text-${colour}-200 font-medium text-sm`}>{event.name}</p>
      <p className="uppercase text-xs font-semibold opacity-30">
        {event.startDate.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default EventCard;
