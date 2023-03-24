import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseRoutingModule } from './case-routing.module';
import { GeneralComponent } from './general/general.component';
import { CaseSideBarComponent } from './case-side-bar/case-side-bar.component';
import { MarkdownModule } from 'ngx-markdown';
import { GlobalaccessModule } from '../globalaccess/globalaccess.module';


@NgModule({
  declarations: [
    GeneralComponent,
    CaseSideBarComponent,
  ],
  imports: [
    CommonModule,
    CaseRoutingModule,
    GlobalaccessModule,
    MarkdownModule.forChild()
  ]
})
export class CaseModule { }
