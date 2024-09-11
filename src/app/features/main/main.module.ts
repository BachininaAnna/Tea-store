import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {NgbAccordionModule, NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import { AccordionComponent } from './accordion/accordion.component';
import {MainComponent} from "./main/main.component";
import { AccordionOldComponent } from './accordion-old/accordion-old.component';

@NgModule({
  declarations: [
    MainComponent,
    AccordionComponent,
    AccordionOldComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgbModalModule,
    NgbAccordionModule
  ]
})
export class MainModule { }
