const EventCard = ({
  event,
  setEvent,
}: {
  event: Event;
  setEvent: (event: Event) => void;
}) => {
  let containerStyles: string = '';
  let textStyles: string = '';

  const label = () => {
    if (event.label === 'personal') {
      containerStyles =
        'bg-lime-400 bg-opacity-20 px-2 py-1 rounded-tr-lg rounded-br-lg border-l-4 border-lime-400 hover:bg-black';
      textStyles = 'text-lime-200 font-medium text-sm';
      return;
    } else if (event.label === 'work') {
      containerStyles =
        'bg-teal-400 bg-opacity-20 px-2 py-1 rounded-tr-lg rounded-br-lg border-l-4 border-teal-400 hover:bg-black';
      textStyles = 'text-teal-200 font-medium text-sm';
      return;
    } else if (event.label === 'university') {
      containerStyles =
        'bg-violet-400 bg-opacity-20 px-2 py-1 rounded-tr-lg rounded-br-lg border-l-4 border-violet-400 hover:bg-black';
      textStyles = 'text-violet-200 font-medium text-sm';
      return;
    } else {
      containerStyles =
        'bg-blue-400 bg-opacity-20 px-2 py-1 rounded-tr-lg rounded-br-lg border-l-4 border-blue-400 hover:bg-black';
      textStyles = 'text-blue-200 font-medium text-sm';
      return;
    }
  };

  label();

  return (
    <div className={containerStyles} onClick={() => setEvent(event)}>
      <p className={textStyles}>{event.name}</p>
      <p className="uppercase text-xs font-semibold opacity-30">
        {event.startedAt.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default EventCard;
