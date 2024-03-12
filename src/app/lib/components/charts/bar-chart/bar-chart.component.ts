import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [MatCardModule, NgChartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {
  public barChartData = [
    { data: [80, 120, 100, 140], label: 'Departmental Leave Usage' },
  ];
  public barChartLabels = ['HR', 'IT', 'Finance', 'Sales'];
  public barChartOptions = {
    responsive: false,
  };
  public barChartLegend = true;
  public barChartType = 'bar';
}
