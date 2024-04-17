import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionListService } from '../question-list.service';
import { QuestionModel } from 'src/app/model/question-model';

@Component({
  selector: 'app-questoin-update',
  templateUrl: './questoin-update.page.html',
  styleUrls: ['./questoin-update.page.scss'],
})
export class QuestoinUpdatePage implements OnInit {

  form!: NgForm;
  isLoading = true;
  questionId!: number;
  loadedQuestion!: QuestionModel;

  constructor(private activatedRoute: ActivatedRoute,
    private questionListService: QuestionListService,
    private router: Router) { }

  ngOnInit() {
    console.log();

    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('questionId')){
        //redirect
        return;
      }

      //const questionId = +paramMap.get('questionId');//the plus turns string type to number type
      //this.questionId = +paramMap.get('questionId');
      //this.isLoading = true;
      //this.getQuestionByIdFromDB(this.questionId);
  });
  }

  onSubmit( form: NgForm){

  }

}
