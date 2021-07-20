import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {Task} from '../../core/models/task';
import {APIService} from '../../API.service';
import {Report} from '../../core/models/report';
import {DateHelper} from "../../core/services/date-helper";
import {ActivatedRoute} from "@angular/router";

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
    Year: [ 'Select Year']
  };
  clickedRows = new Set<any>();
  fullMonthDayYearFormat: string;
  filename: string;
  patientCountsByMonth: Array<any>;
  selectedChartYear = 'Select Year';
  constructor(private api: APIService, private dateHelper: DateHelper, private activatedRoute: ActivatedRoute, ) {
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
    this.activatedRoute.queryParams.subscribe(async params => {
      this.filename = params.filename;
      console.log(this.filename);
    });
    this.api.ListReports().then(event => {
      const reports = event.items as Array<Report>;

    });
    this.updateChartData();
  }
  updateChartData() {
    this.api.ListReports().then(event => {
      let reports = event.items as Array<Report>;
      const filteredReports = [];
      if (this.filename) {
        for (const report of reports) {
          if (report.filename === this.filename) {
            filteredReports.push(report);
          }
        }
        reports = filteredReports;
      }
      const patientCountsByMonthDict = {};
      const totalPatientCountsByMonthArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (let i = 0; i < reports.length; i++) {
        reports[i].position = i + 1;
        let month = reports[i].predictedDate.split('/')[1];
        const year = reports[i].predictedDate.split('/')[2];
        if (month[0] === '0') { month = month[1]; }
        if (!(year in patientCountsByMonthDict)) {
          patientCountsByMonthDict[year] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        if (!(this.options.Year.includes(year))) {
          this.options.Year.push(year);
        }
        patientCountsByMonthDict[year][+month - 1] += 1;
        totalPatientCountsByMonthArr[+month - 1] += 1;
      }
      this.options.Year.sort();
      this.options.Year.unshift(this.options.Year.pop());
      if (!this.selectedChartYear || this.selectedChartYear === 'Select Year') {
        this.patientCountsByMonth = [
          { data: totalPatientCountsByMonthArr, label: 'Total number of patients with complications' }
        ];
      }
      else {
        this.patientCountsByMonth = [
          { data: patientCountsByMonthDict[this.selectedChartYear], label: 'Number of patients with complications in '
              + this.selectedChartYear }
        ];
      }

      this.dataSource = new MatTableDataSource(reports);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource);

    });
  }


}
