import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-event-calendar',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule,
    FullCalendarModule,
  ],
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss'],
})
export class EventCalendarComponent {
  events: any = [
    {
      title: 'Event 1',
      start: '2024-03-11',
    },
    {
      title: 'Event next',
      start: '2024-03-11',
    },
    {
      title: 'Event 2',
      start: '2024-03-12',
    },
    {
      title: 'Event 3',
      start: '2024-03-13',
    },
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: this.events,
    height: '600px',
    editable: true,
    headerToolbar: {
      center: 'today',
      start: 'prev',
      end: 'next',
    },
  };
}
