import { NgModule } from '@angular/core';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';

@NgModule({
  exports:[
    AccordionModule,
    ButtonModule,
    RippleModule
  ]
})
export class NgPrimeModule { }
