import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

import { StryktipsetTableComponent } from './stryktipset-table/stryktipset-table.component'

@Component({
  selector: 'app-stryktipset',
  templateUrl: 'stryktipset.component.html',
  styleUrls: ['stryktipset.component.css']
})

export class StryktipsetComponent implements OnInit {
    constructor() { }

  ngOnInit() {
  }

}
