import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMainDiv]'
})
export class MainDivDirective {
  @Input() appMainDiv!:string;
  constructor(private _el:ElementRef) {

   }

   ngAfterContentChecked(){
    if((this.appMainDiv && this.appMainDiv=='left')){
      this._el.nativeElement.style.padding = '30px 0px 30px 50px';
    }
    else{
      this._el.nativeElement.style.padding = '30px 100px 30px 0';
    }
    
   }

}
