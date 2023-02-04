import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainDivDirective } from './Directives/Main_div/main-div.directive';
import { ImgTransformDirective } from './Directives/img-transform/img-transform.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainDivDirective,
    ImgTransformDirective,
  ],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent, FooterComponent, MainDivDirective, ImgTransformDirective]
})
export class SharedModule { }
