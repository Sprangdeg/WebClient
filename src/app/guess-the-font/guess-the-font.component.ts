import { Component, OnInit } from '@angular/core';
import { Font } from './Font';
import { Answer } from './Answer';
import { DomSanitizer, SafeStyle} from '@angular/platform-browser';
import { ReversePipe } from './reverse-array.pipe'

  const Fonts: Font[] = [
    {id: 1, name: 'Arial'}, 
    {id: 2, name: 'Helvetica-Neue'},
    {id: 3, name: 'Helvetica'},
    {id: 4, name: 'Sans-serif'},
    {id: 5, name: 'Baskerville'},
    {id: 6, name: 'Baskerville-Old-Face'},
    {id: 7, name: 'Hoefler-Text'}, 
    {id: 8, name: 'Garamond'},
    {id: 9, name: 'Times-New-Roman'},
    {id: 10, name: 'Serif'},
    {id: 11, name: 'BigCaslon'},
    {id: 12, name: 'Book-Antiqua'},
    {id: 13, name: 'Palatino-Linotype'},
    {id: 14, name: 'Georgia'},
    {id: 15, name: 'Consolas'},
    {id: 16, name: 'monospace'},
    {id: 17, name: 'monaco'}
    ];

function shuffleFonts() {
    var j, x, i;
    for (i = Fonts.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = Fonts[i - 1];
        Fonts[i - 1] = Fonts[j];
        Fonts[j] = x;
    }
}

@Component({
  selector: 'app-guess-the-font',
  templateUrl: './guess-the-font.component.html',
  styleUrls: ['./guess-the-font.component.css'],
})
export class GuessTheFontComponent implements OnInit {
  question: Font;
  answer1: Font;
  answer2: Font;
  answer3: Font;
  answer4: Font;
  answer5: Font;
  correct: boolean;
  incorrect: boolean;
  answers : Answer[] = [];
  correctAnswers : number;
  wrongAnswers : number;

  constructor() { 
    this.createQuestion();
    this.correctAnswers = 0;
    this.wrongAnswers = 0;
  }

  checkAnswer(event){
    if(event.currentTarget.attributes['name'].value == this.question.id){
      this.correct = true;
      this.correctAnswers++;
    }
    else{
      this.correct = false;
      this.wrongAnswers++;
    }
    this.addAnswer(event.currentTarget.nextSibling.data);
    event.target.checked = false;
    this.createQuestion();
  }

  addAnswer(question){
    var answer : Answer = {answer: this.question.name, correct: this.correct ? "success" : "danger", guess: question};
    this.answers.push(answer);
  }

  createQuestion(){
     shuffleFonts();
    this.answer1 = Fonts[0];
    this.answer2 = Fonts[1];
    this.answer3 = Fonts[2];
    this.answer4 = Fonts[3];
    this.answer5 = Fonts[4]; 

    let index = Math.floor(Math.random() * 5)
    this.question = Fonts[index];
  }


  ngOnInit() {
  }

}
