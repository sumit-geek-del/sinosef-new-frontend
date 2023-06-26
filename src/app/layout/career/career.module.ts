import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerRoutingModule } from './career-routing.module';
import { CareerComponent } from './career.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select'
import { LottieModule } from 'ngx-lottie';
import player from "lottie-web";


export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    CareerComponent
  ],
  imports: [
    CommonModule,
    CareerRoutingModule,
    MatFormFieldModule,
    MatInputModule, ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    LottieModule.forRoot({player:playerFactory})
  ]
})
export class CareerModule { }
