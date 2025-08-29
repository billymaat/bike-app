export interface CycleEvent {
  id: number;
  name: string;
  description: string;
  date: Date;
  location: string;
  attendees: number[]; // Array of User IDs
  maxAttendees: number;
}

export interface CycleEventAddRequest {
  name: string;
  description: string;
  date: Date;
  location: string;
  maxAttendees: number;
}

export interface CycleEventUpdateRequest {
  name?: string;
  description?: string;
  date?: Date;
  location?: string;
  maxAttendees?: number;
  attendees?: number[];
}