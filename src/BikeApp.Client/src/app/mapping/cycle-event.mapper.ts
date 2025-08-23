import { CycleEvent } from '../models/cycle-event';
import { CycleEventDto } from '../api/api';

export class CycleEventMapper {
  /**
   * Maps a CycleEventDto to a CycleEvent
   */
  static fromDto(dto: CycleEventDto): CycleEvent {
    return {
      id: dto.id ?? 0,
      name: dto.name ?? '',
      description: dto.description ?? '',
      date: dto.date ? new Date(dto.date) : new Date(),
      location: dto.location ?? '',
      attendees: dto.attendees ?? [],
      maxAttendees: dto.maxAttendees ?? 0,
    };
  }

  /**
   * Maps a CycleEvent to a CycleEventDto
   */
  static toDto(event: CycleEvent): CycleEventDto {
    return new CycleEventDto({
      id: event.id,
      name: event.name,
      description: event.description,
      date: event.date,
      location: event.location,
      attendees: event.attendees,
      maxAttendees: event.maxAttendees,
    });
  }
}
