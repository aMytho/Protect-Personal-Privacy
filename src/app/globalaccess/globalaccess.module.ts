import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { MdComponent } from '../md/md.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


/**
 * Stores the markdown and HTTP client so any module that imports it has access to it.
 * Imported into the root module and several others
 */
@NgModule({
  declarations: [
    MdComponent
  ],
  exports: [
    MdComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
  ]
})
export class GlobalaccessModule { }