import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

import { Match, MarkRow } from '../Match'
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
    marks: MarkRow[] = [];
    mode = 'Observable';
    constructor(private stryktipsetService: StryktipsetService) { }

  ngOnInit() {
     this.getStryktipsetCoupong();
     this.initMarks();
  }

  calcPrice(index : number, price : number){
    if(index == 13)
      return price;

    if(index == 0)
      price = this.markCost(this.marks[index].HomeMark)
            + this.markCost(this.marks[index].DrawMark)
            + this.markCost(this.marks[index].AwayMark);
    else
      price = price * 
            (this.markCost(this.marks[index].HomeMark)
            + this.markCost(this.marks[index].DrawMark)
            + this.markCost(this.marks[index].AwayMark));
    
    return this.calcPrice(++index, price)
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

  getStryktipsetMarks(){
      this.stryktipsetService.getStryktipsetMarks()
                                .subscribe(
                                    marks => this.marks = marks,
                                    error =>  this.errorMessage = <any>error);;
  }

  initMarks(){
    for(let i = 0; i<13; i++){
      this.marks.push(<MarkRow>({
        HomeMark: false,
        DrawMark: false,
        AwayMark: false,
        }))
    }    
  }
}
