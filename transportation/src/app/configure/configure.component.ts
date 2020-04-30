import { TransportationDetails } from './../label-externalization/transportation-externalisation';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.css']
})
export class ConfigureComponent implements OnInit {
  obj=new TransportationDetails();
  constructor() { }

  ngOnInit() {
  }

}
