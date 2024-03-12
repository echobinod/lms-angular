import { Component } from '@angular/core';
import { EventCalendarComponent } from '@lib/components/event-calendar/event-calendar.component';

@Component({
  selector: 'app-calendar-view',
  standalone: true,
  imports: [EventCalendarComponent],
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss'],
})
export class CalendarViewComponent {}
