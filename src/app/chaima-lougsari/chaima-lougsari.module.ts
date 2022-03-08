import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ChaimaaLougsariComponent} from '../chaimaa-lougsari/chaimaa-lougsari.component'


@NgModule({
  declarations: [ChaimaaLougsariComponent],
  imports: [
    CommonModule
  ],
  exports : [ChaimaaLougsariComponent],
})
export class ChaimaLougsariModule { }
