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
  constructor() { }

  ngOnInit() {
  }

}