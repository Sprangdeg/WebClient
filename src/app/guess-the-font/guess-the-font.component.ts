import { Component, OnInit } from '@angular/core';
import { Font } from './Font'
import { DomSanitizer, SafeStyle} from '@angular/platform-browser';

  const Fonts: Font[] = [
    {id: 1, name: 'HelveticaNeue'}, 
    {id: 2, name: 'BaskervilleOldFace'},
    {id: 3, name: 'AndaleMono'},
    {id: 4, name: 'BigCaslon'},
    {id: 5, name: 'Consolas'},
    {id: 6, name: 'ArialNarrow'}
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
  styleUrls: ['./guess-the-font.component.css']
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
questions: SafeStyle;
id : number;
  constructor(private sanitizer: DomSanitizer) { 
    this.createQuestion();
  }

  checkAnswer(event){
    if(event.currentTarget.attributes['name'].value == this.id){
      this.correct = true;
    }
    else{
      this.correct = false;
    }
    this.createQuestion();
  }

  createQuestion(){
    this.answer1 = Fonts[0];
    this.answer2 = Fonts[1];
    this.answer3 = Fonts[2];
    this.answer4 = Fonts[3];
    this.answer5 = Fonts[4];

    shuffleFonts();

    let index = Math.floor(Math.random() * 5)
    this.questions = this.sanitizer.bypassSecurityTrustStyle(Fonts[index].name);
    this.id = Fonts[index].id;
  }

  ngOnInit() {
  }

}
