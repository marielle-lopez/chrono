interface Image {
  src: string;
  alt: string;
}

interface Event {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  startedAt: Date;
  endedAt: Date;
  location: string;
  label: string;
}
