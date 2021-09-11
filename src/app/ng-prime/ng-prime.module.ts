import { NgModule } from '@angular/core';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {RippleModule} from 'primeng/ripple';


@NgModule({
  exports:[
    AccordionModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    RippleModule
  ]
})
export class NgPrimeModule { }
