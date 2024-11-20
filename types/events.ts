export interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image: string;
    capacity?: number;
    registeredCount?: number;
    attendees?: number;
    highlights?: string[];
  }