import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-my-report',
  templateUrl: './my-report.component.html',
  styleUrls: ['./my-report.component.scss']
})
export class MyReportComponent implements OnInit, AfterViewInit {
  dataSource;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  tableColumns: string[] = ['position', 'PatientID', 'Predicted Months', 'Predicted Date'];
  data = [
    {position: 1, PatientID: '007xXn9BM', 'Predicted Months': '2', 'Predicted Date': '16/01/2015'},
    {position: 2, PatientID: '4MxPiblH7', 'Predicted Months': '3', 'Predicted Date': '28/05/2015'},
    {position: 3, PatientID: 'fM8yLihji', 'Predicted Months': '5', 'Predicted Date': '20/05/2016'},
    {position: 4, PatientID: 'U3eMTlDw6', 'Predicted Months': '1', 'Predicted Date': '31/05/2015'},
    {position: 5, PatientID: 'fM8yLihji', 'Predicted Months': '5', 'Predicted Date': '20/05/2016'},
    {position: 6, PatientID: 'U3eMTlDw6', 'Predicted Months': '1', 'Predicted Date': '31/05/2015'},
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
  constructor() {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);
  }
}
