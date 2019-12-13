import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {EmployeeService} from '../employee.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public texVal="123";
  public texType="text";
  public isDisabled=true;
  public hasError = true;
  public isSpecial = true;
  public messageClass = {
    "text-success" : !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.hasError
  }

  public name ="";
  public displayName = false;
  public color="blue";

  public colors = ["red", "blue", "green"];
  public employees = [];
  public employeesHttp = [];

  @Input('parentData') public parentDataAlias;
  @Output() public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit('Hey code evolution');
  }

  public titleStyles = {
    fontStyle:'italic'
  }
  //constructor() { }
  constructor(private _employeeService: EmployeeService) {}

  onClick(event) {
    this.greeting= "you hav just clicked me";
    console.log(event.type);
  }

  logMessage(i) {
    alert(i);
  }

  // ngOnInit() {
  // }

  ngOnInit() {
    this.employees = this._employeeService.getEmployee();
    this._employeeService.getEmployees().subscribe(data => this.employeesHttp = data);
    console.log(this.employees);
  }

  

}