import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({

  selector: 'app-student-organizer',
  templateUrl: './student-organizer.component.html',
  styleUrls: ['./student-organizer.component.css']
})
export class StudentOrganizerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = "";
    idCounter = 0;
    public students: Student[] = [];
    
    public group1: Student[] = [];
    public group2: Student[] = [];
    public group3: Student[] = [];
    public group4: Student[] = [];
    public group5: Student[] = [];
    public group6: Student[] = [];
    public group7: Student[] = [];
    public group8: Student[] = [];

    knowledgeLevel1: Student[] = [];
    knowledgeLevel2: Student[] = [];
    knowledgeLevel3: Student[] = [];
    knowledgeLevel4: Student[] = [];

    addStudent(studentName: string, studentKnowledge: number) {    
      if (studentName) {
        var student = new Student(this.idCounter, studentName, studentKnowledge);
        var canAddStudent = this.addToKnowledgeLevel(student);
        if(canAddStudent){       
          this.idCounter++;
          this.students.push(student);      
          this.setGroup(student, this.getRandomGroup());
        }
        else
          alert("Kan inte lägga till fler elever på den kunskapsnivån");
      }
    }


    addToKnowledgeLevel(student: Student){
        var knowledge = student.knowledge;
        switch (Number(knowledge))
        {
          case 1:
            var canDo = this.canAddToKnowledgeLevel(this.knowledgeLevel1);
            if(canDo)
              this.knowledgeLevel1.push(student);
            return canDo;
          case 2:
            var canDo = this.canAddToKnowledgeLevel(this.knowledgeLevel2);
            if(canDo)
              this.knowledgeLevel2.push(student);
            return canDo;
          case 3:
            var canDo = this.canAddToKnowledgeLevel(this.knowledgeLevel3);
            if(canDo)
              this.knowledgeLevel3.push(student);
            return canDo;
          case 4:
            var canDo = this.canAddToKnowledgeLevel(this.knowledgeLevel4);
            if(canDo)
              this.knowledgeLevel4.push(student);
            return canDo;
        }
    }

    getRandomGroup(){
       return Math.floor(Math.random() * 8) + 1;
    }

    canAddToKnowledgeLevel(knowledgeLevel : Student[]){
      return knowledgeLevel.length < 8;

    }

    setGroup(student: Student, groupNumber: number){
      
      if(this.canAddToGroup(student, groupNumber)){
        switch (groupNumber)
        {
          case 1:
            this.group1.push(student);
            this.group1 = this.shuffleArray(this.group1);
            break;
          case 2:
            this.group2.push(student);
            this.group2 = this.shuffleArray(this.group2);
            break;
          case 3:
            this.group3.push(student);
            this.group3 = this.shuffleArray(this.group3);
            break;
          case 4:
            this.group4.push(student);
            this.group4 = this.shuffleArray(this.group4);
            break;
          case 5:
            this.group5.push(student);
            this.group5 = this.shuffleArray(this.group5);
            break;
          case 6:
            this.group6.push(student);
            this.group6 = this.shuffleArray(this.group6);
            break;
          case 7:
            this.group7.push(student);
            this.group7 = this.shuffleArray(this.group7);
            break;
          case 8:
            this.group8.push(student);
            this.group8 = this.shuffleArray(this.group8);
            break;
        default : false;
        }
      } 
      else{
        this.setGroup(student, this.getRandomGroup())
      } 
    }

    shuffleArray(array : Student[]) {
      var currentIndex = array.length;
      var temporaryValue : Student;
      var randomIndex : number;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    canAddToGroup(student: Student, group: number){
        switch (group)
        {
          case 1:
            return !this.arrayContainsKnowledge(this.group1 , student.knowledge);
          case 2:
            return !this.arrayContainsKnowledge(this.group2 , student.knowledge);
          case 3:
            return !this.arrayContainsKnowledge(this.group3 , student.knowledge);
          case 4:
            return !this.arrayContainsKnowledge(this.group4 , student.knowledge);
          case 5:
            return !this.arrayContainsKnowledge(this.group5 , student.knowledge);
          case 6:
            return !this.arrayContainsKnowledge(this.group6 , student.knowledge);
          case 7:
            return !this.arrayContainsKnowledge(this.group7 , student.knowledge);
          case 8:
            return !this.arrayContainsKnowledge(this.group8 , student.knowledge);
        default : false;
        }
    }

    arrayContainsKnowledge(group: Student[], knowledge: number){
        for(var student of group){
          if(student.knowledge === knowledge){
            return true;
          }
        }
        return false;
    }
}
