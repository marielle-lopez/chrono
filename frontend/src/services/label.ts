export const getAllLabels = async (): Promise<Label[]> => {
  const response = await fetch('http://localhost:8080/labels', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to get all labels');
  }

  const labels = await response.json();
  return labels;
};

export const getLabelById = async (id: number): Promise<Label> => {
  const response = await fetch(`http://localhost:8080/labels/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status !== 302) {
    throw new Error(`Failed to get label with ID ${id}`);
  }

  const label = await response.json();
  const formattedLabelEvents = label.events.map((event) => {
    event.createdAt = new Date(event.createdAt);
    event.updatedAt = new Date(event.updatedAt);
    event.startedAt = new Date(event.startedAt);
    event.endedAt = new Date(event.endedAt);
    return event;
  });
  const formattedLabel = {
    ...label,
    createdAt: new Date(label.createdAt),
    updatedAt: new Date(label.updatedAt),
    events: formattedLabelEvents,
  };
  return formattedLabel;
};
