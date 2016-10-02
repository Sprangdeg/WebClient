import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

import { Match } from '../Match'
import { StryktipsetService } from '../../stryktipset.service'

@Component({
  selector: 'stryktipset-table',
  templateUrl: './stryktipset-table.component.html',
  styleUrls: ['./stryktipset-table.component.css'],
  providers: [ StryktipsetService ]
})
export class StryktipsetTableComponent implements OnInit {
    errorMessage: string;
    coupong: Match[];
    mode = 'Observable';
    price: number = 100;
    constructor(private stryktipsetService: StryktipsetService) { }

  ngOnInit() {
     this.getStryktipsetCoupong();
  }

  onSelect(match){
    alert("Hello");
  }

  getStryktipsetCoupong(){
      this.stryktipsetService.getStryktipsetCoupong()
                                .subscribe(
                                    coupong => this.coupong = coupong,
                                    error =>  this.errorMessage = <any>error);;
  }

}
