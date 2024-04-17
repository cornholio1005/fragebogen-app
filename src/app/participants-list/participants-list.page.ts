import { Component, OnInit } from '@angular/core';
import { ParticipantModel } from '../model/participant-model';
import { ParticipantsListService } from './participants-list.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.page.html',
  styleUrls: ['./participants-list.page.scss'],
})
export class ParticipantsListPage implements OnInit {

  participants!: ParticipantModel[];

  constructor(private participantsListService: ParticipantsListService) { }

  ngOnInit() {
      console.log();
  }

  ionViewWillEnter(){
    console.log('ParticipantsListPage ionViewWillEnter');
    this.getParticipantsFromDB();

  }

  getParticipantsFromDB():void{
    console.log('####getParticipantsFromDB SERVICE Before ENTER###');
    this.participantsListService.getParticipantsFromDB().subscribe({
      next:(response: ParticipantModel[]) => {
        console.log('####getParticipantsFromDB SERVICE Before ENTER NEXT###');
        this.participants = response;
        for(let participant of this.participants){
          console.log('####Person from DB###'+'\n'+
                      'ID: ' + participant.id +'\n'+
                      'Name: ' +participant.name +'\n'+
                      'Surname:' +participant.surname +'\n'+
                      'email:' +participant.email +'\n'+
                      'Password: ' +participant.password
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
