import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChaimaaLougsariComponent} from '../chaimaa-lougsari/chaimaa-lougsari.component'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ChaimaaLougsariComponent],
  imports: [
    CommonModule, FormsModule

  ],
  exports : [ChaimaaLougsariComponent],
})
export class ChaimaLougsariModule { }

