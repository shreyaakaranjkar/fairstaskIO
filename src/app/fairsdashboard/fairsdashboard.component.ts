import { Component, Input, OnInit } from '@angular/core';
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
  fairId! : Ifairdata
  fairsObj!:Ifairdata;
  selectedFairId!:string;
  @Input()selectedCardId! : string;

  ngOnInit(): void {
    this.fairsArr = fairsArr;
    console.log(fairsArr);
    console.log(this.selectedCardId)
    this.fairsObj = this.fairsArr[0];
    this.selectedFairId = this.fairsObj.fairId
  }
  getCardDetails(fairId:Ifairdata){
    console.log(fairId);
    this.selectedFairId = fairId.fairId
    this.fairsObj = fairId;  
  }
}
