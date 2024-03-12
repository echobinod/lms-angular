import { Component } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [MatCardModule, NgChartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  public pieChartData = [
    { data: [40, 30, 20, 10], label: 'Leave Types Distribution' },
  ];
  public pieChartLabels = ['Annual', 'Sick', 'Maternity', 'Paternity'];
  public pieChartOptions = {
    responsive: false,
  };
  public pieChartLegend = true;
  public pieChartType = 'pie';
}
