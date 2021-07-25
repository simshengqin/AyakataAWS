import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {Task} from '../../core/models/task';
import {APIService} from '../../API.service';
import {Report} from '../../core/models/report';
import {DateHelper} from '../../core/services/date-helper';

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.scss']
})
export class MyTaskComponent implements OnInit {

  dataSource;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  tableColumns: string[] = ['position', 'id', 'uploadDate', 'status'];
  // data = [
  //   {filename: 'test1.csv', uploadDate: '16/01/2015', patientCount: '5', status: 'processing'},
  //   {filename: 'test2.csv', uploadDate: '18/05/2015', patientCount: '8', status: 'processing'},
  //   {filename: 'test3.csv', uploadDate: '26/06/2015', patientCount: '11', status: 'completed'},
  //   {filename: 'test4.csv', uploadDate: '22/01/2015', patientCount: '15', status: 'completed'},
  //   {filename: 'test5.csv', uploadDate: '16/05/2015', patientCount: '12', status: 'processing'},
  //   {filename: 'test6.csv', uploadDate: '21/03/2015', patientCount: '13', status: 'completed'},
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
  patientCountsByMonth: Array<any>;
  selectedChartYear = 'Select Year';
  isNoTasksInAWS = false;
  constructor(
    private router: Router,
    private api: APIService,
    private dateHelper: DateHelper,
  ) {

  }

  async ngOnInit(): Promise<void> {
    await Promise.all([
      this.dateHelper.getFormat('fullMonthDayYear'),
    ]).then((results) => {
      this.fullMonthDayYearFormat = results[1];
    });

    this.api.ListTasks().then(event => {
      const tasks = event.items as Array<Task>;
      if (tasks.length == 0) { this.isNoTasksInAWS = true; }
      for (let i = 0; i < tasks.length; i++) {
        tasks[i].position = i + 1;
      }
      this.dataSource = new MatTableDataSource(tasks);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    //this.updateChartData();

  }


  onViewReport(filename: string) {
    this.router.navigate(['my-report'], { queryParams: { filename }});
  }
  onRowClick(row: any) {
    this.clickedRows.has(row) ? this.clickedRows.delete(row) : this.clickedRows.add(row);
    //this.updateChartData();
  }
  // updateChartData() {
  //   this.api.ListReports().then(event => {
  //     let reports = event.items as Array<Report>;
  //     if (this.clickedRows.size > 0) {
  //       const filteredReports = [];
  //       for (const report of reports) {
  //         for (const clickedRow of this.clickedRows) {
  //           if (clickedRow.filename === report.filename) {
  //             filteredReports.push(report);
  //             break;
  //           }
  //         }
  //       }
  //       reports = filteredReports;
  //     }
  //     const patientCountsByMonthDict = {};
  //     const totalPatientCountsByMonthArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  //     for (let i = 0; i < reports.length; i++) {
  //       reports[i].position = i + 1;
  //       let month = reports[i].predictedDate.split('/')[1];
  //       const year = reports[i].predictedDate.split('/')[2];
  //       if (month[0] === '0') { month = month[1]; }
  //       if (!(year in patientCountsByMonthDict)) {
  //         patientCountsByMonthDict[year] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  //       }
  //       if (!(this.options.Year.includes(year))) {
  //         this.options.Year.push(year);
  //       }
  //       patientCountsByMonthDict[year][+month - 1] += 1;
  //       totalPatientCountsByMonthArr[+month - 1] += 1;
  //     }
  //     this.options.Year.sort();
  //     this.options.Year.unshift(this.options.Year.pop());
  //     if (!this.selectedChartYear || this.selectedChartYear === 'Select Year') {
  //       this.patientCountsByMonth = [
  //         { data: totalPatientCountsByMonthArr, label: 'Total number of patients with complications' }
  //       ];
  //     }
  //     else {
  //       this.patientCountsByMonth = [
  //         { data: patientCountsByMonthDict[this.selectedChartYear], label: 'Number of patients with complications in '
  //             + this.selectedChartYear }
  //       ];
  //     }
  //   });
  // }
}
