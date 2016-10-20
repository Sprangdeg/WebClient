import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guess-the-font',
  templateUrl: './guess-the-font.component.html',
  styleUrls: ['./guess-the-font.component.css']
})
export class GuessTheFontComponent implements OnInit {
  fontFamily : string;
  constructor() { 
    this.getFont();
  }

  checkAnswer(event){
    alert("Clicked" + event.currentTarget.attributes['data-font'].value);
  }

  getFont(){
    this.fontFamily = "Times new roman";
  }

  ngOnInit() {
  }

}
