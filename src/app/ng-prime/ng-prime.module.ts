import { NgModule } from '@angular/core';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputNumberModule} from 'primeng/inputnumber';
import {MenubarModule} from 'primeng/menubar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {RippleModule} from 'primeng/ripple';


@NgModule({
  exports:[
    AccordionModule,
    ButtonModule,
    CardModule,
    InputNumberModule,
    MenubarModule,
    ProgressSpinnerModule,
    RippleModule
  ]
})
export class NgPrimeModule { }
