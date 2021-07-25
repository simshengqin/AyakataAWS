import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {Task} from '../../core/models/task';
import {APIService} from '../../API.service';
import {Report} from '../../core/models/report';
import {DateHelper} from '../../core/services/date-helper';
import {ActivatedRoute} from '@angular/router';
import {Storage} from 'aws-amplify';

@Component({
  selector: 'app-my-report',
  templateUrl: './my-report.component.html',
  styleUrls: ['./my-report.component.scss']
})
export class MyReportComponent implements OnInit {
  dataSource;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  tableColumns: string[] = ['patientNo', 'predictedMonths', 'predictedDate']; // ,'position', 'predictedDate'];
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
  reports: Array<Report> = [];
  isNoReportsInAWS = false;
  constructor(private api: APIService, private dateHelper: DateHelper, private activatedRoute: ActivatedRoute,) {
  }

  async ngOnInit(): Promise<void> {
    await Promise.all([
      this.dateHelper.getFormat('fullMonthDayYear'),
    ]).then((results) => {
      this.fullMonthDayYearFormat = results[1];
    });
    // for (let i = 0; i < 2000; i++) {
    //   const newReport = {
    //     id: i.toString(),
    //     patientID: '6',
    //     predictedMonths: '6',
    //     predictedDate: '65000',
    //   };
    //   await this.api.CreateReport(newReport);
    //
    // }
    // this.activatedRoute.queryParams.subscribe(async params => {
    //   this.filename = params.filename;
    //   console.log(this.filename);
    // });
    // this.api.ListReports().then(event => {
    //   const reports = event.items as Array<Report>;
    //
    // });
    await this.loadReports();
  }
  async loadReports() {
    // this.api.ListReports().then(event => {
    // let reports = event.items as Array<Report>;
    const taskID = '02558c19-ae10-4ebf-8b5f-c8f9cb34a4aa';
    // const storage = this.amplifyService.storage();

    const storageOptions = {
      bucket: 'sagemaker-output-sq',
      // see https://github.com/aws/aws-amplify/blob/master/packages/aws-amplify/src/Storage/Storage.ts#L325
      // public appears to be the only option that doesn't append hardcoded values
      customPrefix: {
        public: ''
      },
      download: true ,
      level: 'public'
    };
    // this.reports = [];
    await Storage.get( 'public/output.csv', storageOptions ).then(
      async data => {
        data["Body"].text().then(

          async csvText => {
            // console.log(csvText);
            const csvTextArr = csvText.split('\n');
            // - 1 as there is an empty line at the end
            for (let i = 1; i < csvTextArr.length - 1; i++) {
              const lineArr = csvTextArr[i].split(',');
              const report = {
                patientNo: lineArr[0],
                predictedMonths: lineArr[1],
                predictedDate: lineArr[2]
              };
              this.reports.push(report);
            }
            this.updateChartData();

          });
        // console.log(this.reports);
      },
      error => {
        this.isNoReportsInAWS = true;
        console.log( 'No reports found', error );
      });
  }

  async updateChartData() {
    let filteredReports = [];
    if (this.selectedChartYear && this.selectedChartYear !== 'Select Year') {
      for (let i = 0; i < this.reports.length; i++) {
        const year = this.reports[i].predictedDate.split('-')[0];
        if (year === this.selectedChartYear) {
          filteredReports.push(this.reports[i]);

        }
      }
    }
    else {
      filteredReports = this.reports;
    }
    const patientCountsByMonthDict = {};
    const totalPatientCountsByMonthArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredReports.length; i++) {
      filteredReports[i].position = i + 1;
      if (filteredReports[i].predictedDate === '') { continue; }
      const year = filteredReports[i].predictedDate.split('-')[0];
      let month = filteredReports[i].predictedDate.split('-')[1];

      if (month[0] === '0') {
        month = month[1];
      }
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
        {data: totalPatientCountsByMonthArr, label: 'Total number of patients with complications'}
      ];
    } else {
      this.patientCountsByMonth = [
        {
          data: patientCountsByMonthDict[this.selectedChartYear], label: 'Number of patients with complications in '
            + this.selectedChartYear
        }
      ];
    }

    this.dataSource = new MatTableDataSource(filteredReports);
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'predictedDate': return new Date(item.predictedDate);
        default: return item[property];
      }
    };
    this.dataSource.paginator = this.paginator;

  }


}
