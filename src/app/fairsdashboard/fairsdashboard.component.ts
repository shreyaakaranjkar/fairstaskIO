import { Component, OnInit } from '@angular/core';
import { Ifairdata } from '../interface/fairs';
import { fairsArr } from '../const/fairs';

@Component({
  selector: 'app-fairsdashboard',
  templateUrl: './fairsdashboard.component.html',
  styleUrls: ['./fairsdashboard.component.scss']
})
export class FairsdashboardComponent implements OnInit {

  constructor() { }
  fairsArr! : Array<Ifairdata>;
  cardId!:any;
  cardObj!:Ifairdata;

  ngOnInit(): void {
    this.fairsArr = fairsArr;
    console.log(fairsArr)
  }
  getCardDetails(fairId:string){
    console.log(fairId);
    this.cardId = fairId;
    console.log(this.cardId)
  }

}
