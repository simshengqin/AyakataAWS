import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {Task} from '../../core/models/task';
import {APIService} from '../../API.service';
import {Report} from '../../core/models/report';
import {DateHelper} from "../../core/services/date-helper";

@Component({
  selector: 'app-my-report',
  templateUrl: './my-report.component.html',
  styleUrls: ['./my-report.component.scss']
})
export class MyReportComponent implements OnInit {
  dataSource;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  tableColumns: string[] = ['position', 'patientID', 'predictedMonths', 'predictedDate'];
  // data = [
  //   { patientID: '007xXn9BM', predictedMonths: '2', predictedDate: '16/01/2015'},
  //   { patientID: '4MxPiblH7', predictedMonths: '3', predictedDate: '28/05/2015'},
  //   { patientID: 'fM8yLihji', predictedMonths: '5', predictedDate: '20/05/2016'},
  //   { patientID: 'U3eMTlDw6', predictedMonths: '1', predictedDate: '31/05/2015'},
  //   { patientID: 'fM8yLihji', predictedMonths: '5', predictedDate: '20/05/2016'},
  //   { patientID: 'U3eMTlDw6', predictedMonths: '1', predictedDate: '31/05/2015'},
  // ];
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
  fullMonthDayYearFormat: string;
  constructor(private api: APIService, private dateHelper: DateHelper,) {
  }

  async ngOnInit(): Promise<void> {
    await Promise.all([
      this.dateHelper.getFormat('fullMonthDayYear'),
    ]).then((results) => {
      this.fullMonthDayYearFormat = results[1];
    });
    // const newReport = {
    //   patientID: '6',
    //   predictedMonths: 6,
    //   predictedDate: 65000,
    //   reportID: '2'
    // };
    // await this.api.CreateReport(newReport);
    this.api.ListReports().then(event => {
      const reports = event.items as Array<Report>;
      for (let i = 0; i < reports.length; i++) {
        reports[i].position = i + 1;
      }
      this.dataSource = new MatTableDataSource(reports);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource);
    });
  }


}
