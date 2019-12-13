import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IEmployee} from './employee.ts';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EmployeeService {

  private _url: string = 'http://test-tr.grouprm.net/employee.json'; //http://test-tr.grouprm.net/employee.json  ./employees.json
  constructor(private http: HttpClient) { }

  getEmployee() {
    return [
      {"id":1, "name":"Andrew", "age":30},
      {"id":2, "name":"Brandon", "age":25},
      {"id":3, "name":"Christina", "age":26},
      {"id":4, "name":"Elena", "age":28}
    ];
    // return  'hi';
  }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }

}