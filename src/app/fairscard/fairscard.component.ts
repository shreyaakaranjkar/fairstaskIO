import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ifairdata } from '../interface/fairs';

@Component({
  selector: 'app-fairscard',
  templateUrl: './fairscard.component.html',
  styleUrls: ['./fairscard.component.scss']
})
export class FairscardComponent implements OnInit {

  constructor() { }
  @Input()singlefairscard!:Ifairdata
  @Output()sendCardDetails : EventEmitter<string>=new EventEmitter<string>();
  selectedFair!:string;

  ngOnInit(): void {
  }

  sendDataToParent(cardFairId : string){
    console.log(cardFairId);
    this.sendCardDetails.emit(cardFairId)
  }
}
