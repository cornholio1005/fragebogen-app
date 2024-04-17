import { Component, OnInit } from '@angular/core';
import { QuestionModel } from '../model/question-model';
import { HttpErrorResponse } from '@angular/common/http';
import { QuestionListService } from './question-list.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.page.html',
  styleUrls: ['./question-list.page.scss'],
})
export class QuestionListPage implements OnInit {

  questions!: QuestionModel[];

  constructor(private questionListService: QuestionListService) { }

  ngOnInit() {
    console.log();
  }

  ionViewWillEnter(){
    this.getQuestionsFromDB();
  }

  getQuestionsFromDB():void{
    console.log('####getQuestionsFromDB ');
    this.questionListService.getQuestionsFromDB().subscribe({
      next:(response: QuestionModel[]) => {
        console.log('####getParticipantsFromDB SERVICE Before ENTER NEXT###');
        this.questions = response;
        for(let question of this.questions){
          console.log('####Person from DB###'+'\n'+
                      'ID: ' + question.id +'\n'+
                      'Name: ' +question.text +'\n'
          );
        }
        console.log('####getParticipantsFromDB SERVICE  AFTER NEXT###');
      },
      error:(err: HttpErrorResponse) => {
        console.log('ERRORRRR IN SERVICE CLASS')
        console.log(err.message)},
      complete:() => console.log('Complete')
    });
  }

}
