import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseRoutingModule } from './case-routing.module';
import { PostComponent } from './post/post.component';
import { GeneralComponent } from './general/general.component';
import { CaseSideBarComponent } from './case-side-bar/case-side-bar.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    PostComponent,
    GeneralComponent,
    CaseSideBarComponent
  ],
  imports: [
    CommonModule,
    CaseRoutingModule,
    MarkdownModule.forChild()
  ]
})
export class CaseModule { }
