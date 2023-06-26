import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';
import { LottieModule } from 'ngx-lottie';
import player from "lottie-web";

// Export this function

export function playerFactory() {
  return player;;
}
@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    MatFormFieldModule,
    MatInputModule, ReactiveFormsModule,
    FormsModule,
    SharedModule,
    LottieModule.forRoot({ player: playerFactory })
  ]
})
export class ContactUsModule { }
