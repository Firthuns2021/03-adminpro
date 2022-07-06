import {Component, Input, OnInit} from '@angular/core';

import {ChartData, ChartType} from "chart.js";


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent  implements OnInit{


  @Input() title: string = 'Sin titulo';

  // @ts-ignore
  @Input() type: ChartType  = '';
  // @ts-ignore
  @Input() data: ChartData<'doughnut'>={};

  ngOnInit(): void {
    console.log('this.data',this.data, this.type)
  }


}
