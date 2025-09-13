import { Component, computed, inject, input, Signal, signal, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventApi, EventInput, EventSourceInput, EventClickArg } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { CycleEvent } from '../../models/cycle-event';
import { CycleEventStore } from '../../store/cycle-event-store';

@Component({
  selector: 'calendar',  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    initialEvents: [],
    eventClick: (info: EventClickArg) => this.onEventClick(info)
  };

  cycleEvents = input.required<CycleEvent[]>();
  eventClicked = output<CycleEvent>();
  events: Signal<EventInput[]>;

  constructor() {
    this.events = computed(() => {
      let cycleEvents = this.cycleEvents()
      if (!cycleEvents) {
        return [];
      }

      return cycleEvents.map((ce, index) => (
        { 
          id: index.toString(),
          title: ce.name, 
          date: ce.date.toISOString().split('T')[0]
        }));
    });
  }

  onEventClick(info: EventClickArg): void {
    const eventId = parseInt(info.event.id);
    const cycleEvents = this.cycleEvents();
    if (cycleEvents && eventId >= 0 && eventId < cycleEvents.length) {
      const clickedEvent = cycleEvents[eventId];
      this.eventClicked.emit(clickedEvent);
    }
  }

}