import { Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuContent } from "@angular/material/menu";
import { ViewEventStore } from './view-event.store';

@Component({
  selector: 'app-view-event',
  imports: [CommonModule, MatMenuContent],
  providers: [ViewEventStore],
  templateUrl: './view-event.page.html',
  styleUrl: './view-event.page.scss'
})
export class ViewEventPage {
  eventId = signal<number>(0);
  private activatedRoute = inject(ActivatedRoute);
  store = inject(ViewEventStore);

  constructor() {
      this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.store.setEventId(+params['id']);
      }
    });

  }
}
