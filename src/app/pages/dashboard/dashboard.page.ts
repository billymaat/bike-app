import { Component, computed, effect, inject, Signal } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DashboardStore } from './dashboard-store';
import { CycleEvent } from '../../models/cycle-event';
import { CycleEventComponent } from "../../components/cycle-event/cycle-event.component";
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CycleEventComponent
],
  providers: [DashboardStore],
})
export class DashboardPage {
  private breakpointObserver = inject(BreakpointObserver);

  store = inject(DashboardStore);
  events: Signal<{ 
    cols: number,
    rows: number,
    cycleEvent: CycleEvent}[]>;

  constructor() {
    this.events = computed(() => {
      const latestEvents = this.store.latestEvents();
      if (!latestEvents || latestEvents.length === 0) {
        return [];
      }

      if (this.handset()?.matches) {
        return latestEvents.map(event => ({
            cols: 1,
            rows: 1,
            cycleEvent: event
          }));
      } else {
        // take the first 4 events (or less if not enough) and create a grid layout
        latestEvents.length = Math.min(latestEvents.length, 4);
        if (latestEvents.length < 4) {
          // Fill the rest with empty objects to maintain the grid structure
          while (latestEvents.length < 4) {
            latestEvents.push({ id: 0, name: '', description: '', date: new Date(), location: '' });
          }
        }
        // Return the grid layout for larger screens
        return [
          { cycleEvent: latestEvents[0], cols: 2, rows: 1 },
          { cycleEvent: latestEvents[1], cols: 1, rows: 1 },
          { cycleEvent: latestEvents[2], cols: 1, rows: 2 },
          { cycleEvent: latestEvents[3], cols: 1, rows: 1 }
        ]
      }
    })
  }

  /** Based on the screen size, switch from standard to one column per row */
  handset = toSignal(this.breakpointObserver.observe(Breakpoints.Handset), { initialValue: null})

  // .pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1 },
  //         { title: 'Card 2', cols: 1, rows: 1 },
  //         { title: 'Card 3', cols: 1, rows: 1 },
  //         { title: 'Card 4', cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Card 1', cols: 2, rows: 1 },
  //       { title: 'Card 2', cols: 1, rows: 1 },
  //       { title: 'Card 3', cols: 1, rows: 2 },
  //       { title: 'Card 4', cols: 1, rows: 1 }
  //     ];
  //   })
  // );
}
