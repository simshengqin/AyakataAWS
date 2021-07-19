import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.scss']
})
export class MyTaskComponent implements OnInit, AfterViewInit {

  dataSource;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  tableColumns: string[] = ['position', 'filename', 'uploadDate', 'patientCount', 'status'];
  data = [
    {position: 1, filename: 'test1.csv', uploadDate: '16/01/2015', patientCount: '5', status: 'processing'},
    {position: 2, filename: 'test2.csv', uploadDate: '18/05/2015', patientCount: '8', status: 'processing'},
    {position: 3, filename: 'test3.csv', uploadDate: '26/06/2015', patientCount: '11', status: 'completed'},
    {position: 4, filename: 'test4.csv', uploadDate: '22/01/2015', patientCount: '15', status: 'completed'},
    {position: 5, filename: 'test5.csv', uploadDate: '16/05/2015', patientCount: '12', status: 'processing'},
    {position: 6, filename: 'test6.csv', uploadDate: '21/03/2015', patientCount: '13', status: 'completed'},
  ];
  options = {
    Month: [
      {key: 'Month', selected: 'selected'},
      {key: 'Jan', selected: ''},
      {key: 'Feb', selected: ''},
      {key: 'Mar', selected: ''},
      {key: 'Apr', selected: ''},
      {key: 'May', selected: ''},
      {key: 'Jun', selected: ''},
      {key: 'Jul', selected: ''},
      {key: 'Aug', selected: ''},
      {key: 'Sep', selected: ''},
      {key: 'Oct', selected: ''},
      {key: 'Nov', selected: ''},
      {key: 'Dec', selected: ''},
    ],
    Year: [
      {key: 'Year', selected: 'selected'},
      {key: '2010', selected: ''},
      {key: '2011', selected: ''},
      {key: '2012', selected: ''},
      {key: '2013', selected: ''},
      {key: '2014', selected: ''},
      {key: '2015', selected: ''},
      {key: '2016', selected: ''},
      {key: '2017', selected: ''},
      {key: '2018', selected: ''},
      {key: '2019', selected: ''},
      {key: '2020', selected: ''},
      {key: '2021', selected: ''},
    ]
  };
  clickedRows = new Set<any>();
  constructor(
    private router: Router,
  ) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);
  }

  onViewReport(filename: string | string) {
    this.router.navigate(['my-report'], { queryParams: { filename }});
  }
}
