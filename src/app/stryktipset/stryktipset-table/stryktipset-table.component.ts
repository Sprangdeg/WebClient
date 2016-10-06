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
    constructor(private stryktipsetService: StryktipsetService) { }

  ngOnInit() {
     this.getStryktipsetCoupong();
  }

  calculatePrice(){
    var price = 0;
    if(this.coupong != null){
    this.coupong.forEach(e => {
      price = price != 0 
              ? price * (this.markCost(e.HomeMark) + this.markCost(e.DrawMark) + this.markCost(e.AwayMark))
              : (this.markCost(e.HomeMark) + this.markCost(e.DrawMark) + this.markCost(e.AwayMark));  
    });
    }
    return price;
  }

  markCost(mark: boolean){
    return mark ? 1 : 0; 
  }

  getStryktipsetCoupong(){
      this.stryktipsetService.getStryktipsetCoupong()
                                .subscribe(
                                    coupong => this.coupong = coupong,
                                    error =>  this.errorMessage = <any>error);;
  }

}
