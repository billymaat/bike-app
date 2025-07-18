export interface CycleEvent {
  id: number;
  name: string;
  description: string;
  date: Date;
  location: string;
}

export interface CycleEventAddRequest {
  name: string;
  description: string;
  date: Date;
  location: string;
}