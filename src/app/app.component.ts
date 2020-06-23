import { ReportService } from './report.service';
import { Component, OnInit } from '@angular/core';
import { ReportModel } from './report.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data: ReportModel[];

  ngOnInit() {
    this.reportService.getPurchasesByPerson().subscribe(report => {
      report.forEach(item => {
        item.amount > 300 ? item.highAmount = true : item.highAmount = false;
      });
      this.data = report;
    })
  }

  constructor(private reportService: ReportService) {}


}
