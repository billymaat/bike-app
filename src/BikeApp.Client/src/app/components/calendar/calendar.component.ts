import { Component, computed, inject, input, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventApi, EventInput, EventSourceInput } from '@fullcalendar/core'; // useful for typechecking
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
  };

  cycleEvents = input.required<CycleEvent[]>();
  events: Signal<EventInput[]>;

  constructor() {
    this.events = computed(() => {
      let cycleEvents = this.cycleEvents()
      if (!cycleEvents) {
        return [];
      }

      let ret = cycleEvents.map(ce => (
        { 
          title: ce.name, 
          date: ce.date.toISOString().split('T')[0] 
        }));
      return ret;
    });


  }

}