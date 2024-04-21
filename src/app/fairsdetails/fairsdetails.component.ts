import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Ifairdata } from '../interface/fairs';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-fairsdetails',
  templateUrl: './fairsdetails.component.html',
  styleUrls: ['./fairsdetails.component.scss']
})
export class FairsdetailsComponent implements OnInit, OnChanges {

  constructor() { }
  
  // @Input()getCardDetails!:Array<Ifairdata>;
  @Input()getCardId! : any;
  @Input()cardId! : string;
  getcardData!:any
  @Output()selectedCardId : EventEmitter<string> = new EventEmitter()

  fairId!:any;
  fairObj!:any
  @Input()getCardDetails!:Ifairdata

  ngOnInit(): void {
    // console.log(this.getCardDetails,this.getCardId);
    // this.fairId = this.getCardDetails[0];
    // console.log(this.fairId)
    console.log(this.getCardDetails);
    // this.selectedCardId.emit(this.getCardDetails.fairId)
  }
  ngOnChanges(): void {
  }

}
