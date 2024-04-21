import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Ifairdata } from '../interface/fairs';

@Component({
  selector: 'app-fairsdetails',
  templateUrl: './fairsdetails.component.html',
  styleUrls: ['./fairsdetails.component.scss']
})
export class FairsdetailsComponent implements OnInit, OnChanges {

  constructor() { }
  
  @Input()getCardDetails!:Array<Ifairdata>;
  @Input()getCardId! : any;

  fairId!:any;
  fairObj!:any

  ngOnInit(): void {
    console.log(this.getCardDetails,this.getCardId);
    this.fairId = this.getCardDetails[0];
    console.log(this.fairId)
  }
  ngOnChanges(): void {
    this.fairId = this.getCardDetails.find(card => card.fairId === this.getCardId);
    console.log(this.fairId)
  }

}
