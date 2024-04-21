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
  @Output()sendCardDetails : EventEmitter<any>=new EventEmitter();
 selectedId! : string

  ngOnInit(): void {
  }


  sendDataToParent(){
    // this.selectedId = this.singlefairscard.fairId
    this.sendCardDetails.emit(this.singlefairscard);

  }
 
}
