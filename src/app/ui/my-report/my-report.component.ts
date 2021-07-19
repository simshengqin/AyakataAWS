import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-report',
  templateUrl: './my-report.component.html',
  styleUrls: ['./my-report.component.css']
})
export class MyReportComponent implements OnInit {
  public chartType = 'bar';

  public chartDatasets: Array<any> = [
    { data: [100, 190, 88, 78, 55, 25, 150, 170, 122, 59, 135, 143], label: 'Number of patients with complications in 2021' }
  ];

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
