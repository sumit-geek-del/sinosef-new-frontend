import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImgTransform]'
})
export class ImgTransformDirective {

  constructor(private _el:ElementRef, private _renderer:Renderer2) {
    
    this._renderer.setStyle(this._el.nativeElement, 'cursor', 'pointer');

   }

}
