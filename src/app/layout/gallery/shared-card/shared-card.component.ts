import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-card',
  templateUrl: './shared-card.component.html',
  styleUrls: ['./shared-card.component.scss']
})
export class SharedCardComponent implements OnInit {
  @Input() imagesArray!:Array<any>
  @Input() from!:string;
  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges():void{
  }

}
