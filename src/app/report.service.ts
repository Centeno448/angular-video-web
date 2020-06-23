import { ReportModel } from './report.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getPurchasesByPerson(){
    return this.http.get<ReportModel[]>('http://localhost:4000/api/report/purchases');
  }
}
