import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

import { stryktipsetCoupong } from './StryktipsetCoupong'
import { StryktipsetService } from '../stryktipset.service'

@Component({
  selector: 'app-stryktipset',
  templateUrl: 'stryktipset.component.html',
  styleUrls: ['stryktipset.component.css'],
  providers: [ StryktipsetService ]
})

export class StryktipsetComponent implements OnInit {
    errorMessage: string;
    content: stryktipsetCoupong;
    mode = 'Observable';

    constructor(private stryktipsetService: StryktipsetService) { }

  ngOnInit() {
     this.getStryktipsetCoupong();
  }

  getStryktipsetCoupong(){
      this.stryktipsetService.getStryktipsetCoupong()
                                .subscribe(
                                    content => this.content = content,
                                    error =>  this.errorMessage = <any>error);;
  }

}
