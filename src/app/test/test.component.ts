import { Component, OnInit } from '@angular/core';

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

  public titleStyles = {
    fontStyle:'italic'
  }
  constructor() { }

  onClick() {
    this.greeting= "you hav just clicked me";
  }

  ngOnInit() {
  }

}