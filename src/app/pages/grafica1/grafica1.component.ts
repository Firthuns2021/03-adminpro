import { Component } from '@angular/core';
import {ChartData, ChartEvent, ChartType} from "chart.js";

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component  {

  // Doughnut
  public labels1: string[] = [ 'Pan', 'refresco', 'Taco' ];

  public doughnutChartData1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [{
      label: 'My First Dataset',
      data: [15, 40, 60],
      backgroundColor: [
        '#6857E6',
        '#009FEE',
        '#F02059'
      ],
      hoverOffset: 4
    }]

  };
  // 'rgb(255, 99, 132)',
  // 'rgb(54, 162, 235)',
  // 'rgb(255, 205, 86)'
// { backgroundColor: [ '#6857E6','#009FEE','#F02059' ] }

  public doughnutChartType1: ChartType = "doughnut";




}
