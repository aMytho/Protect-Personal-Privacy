import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '', component: GeneralComponent,
  },
  {
    path: '1', component: PostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseRoutingModule { }
