import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public chartType = 'bar';
  @Input() chartDatasets: Array<any>;

  public chartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(54, 162, 235, 1)',
        // 'rgba(54, 162, 235, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  constructor() { }

  ngOnInit(): void {
  }

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}

