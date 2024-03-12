import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from '@lib/components/charts/line-chart/line-chart.component';
import { PieChartComponent } from '@lib/components/charts/pie-chart/pie-chart.component';
import { BarChartComponent } from '@lib/components/charts/bar-chart/bar-chart.component';

@Component({
  selector: 'app-chart-list',
  standalone: true,
  imports: [
    CommonModule,
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
  ],
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.scss'],
})
export class ChartListComponent {}
