export const getAllEvents = async (): Promise<Event[]> => {
  const response = await fetch('http://localhost:8080/events', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to get all events');
  }

  const events = await response.json();
  const formattedEvents = events.map((event: Event) => {
    event.createdAt = new Date(event.createdAt);
    event.updatedAt = new Date(event.updatedAt);
    event.startedAt = new Date(event.startedAt);
    event.endedAt = new Date(event.endedAt);
    return event;
  });

  return formattedEvents;
};

export const getEventById = async (id: number) => {
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch event with ID ${id}`);
  }

  const event = await response.json();

  return event;
};

export const createEvent = async (data: object) => {
  const response = await fetch('http://localhost:8080/events', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (response.status !== 201) {
    throw new Error('Failed to create event');
  }

  const createdEvent = await response.json();
  const formattedCreatedEvent = {
    ...createdEvent,
    createdAt: new Date(createdEvent.createdAt),
    updatedAt: new Date(createdEvent.updatedAt),
    startedAt: new Date(createdEvent.startedAt),
    endedAt: new Date(createdEvent.endedAt),
  };
  console.log(formattedCreatedEvent);
  return formattedCreatedEvent;
};

export const updateEventById = async (id: number, data: object) => {
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to update event with ID ${id}`);
  }

  const updatedEvent = await response.json();
  return updatedEvent;
};

export const deleteEventById = async (id: number) => {
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  });

  if (response.status !== 204) {
    throw new Error(`Failed to delete event with ID ${id}`);
  }
};
