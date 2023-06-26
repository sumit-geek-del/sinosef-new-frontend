import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared-card',
  templateUrl: './shared-card.component.html',
  styleUrls: ['./shared-card.component.scss']
})
export class SharedCardComponent implements OnInit {
  @Input() imagesArray!:Array<any>
  @Input() from!:string;

  src:string = '';
  IsshowEnlargeImage:boolean = false;
  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges():void{
  }

  showEnlargeImage(imageSrc:string){
    this.src = imageSrc;
    this.IsshowEnlargeImage = true;

  }

  hide(value:boolean){
    if(value) this.IsshowEnlargeImage = false
  }

}
