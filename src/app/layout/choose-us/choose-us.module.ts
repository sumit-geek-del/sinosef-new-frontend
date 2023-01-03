import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChooseUsRoutingModule } from './choose-us-routing.module';
import { ChooseUsComponent } from './choose-us.component';


@NgModule({
  declarations: [
    ChooseUsComponent
  ],
  imports: [
    CommonModule,
    ChooseUsRoutingModule
  ]
})
export class ChooseUsModule { }
