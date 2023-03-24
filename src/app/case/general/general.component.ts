import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {
  @ViewChild("article")
  public articleElement!: ElementRef;
  public articleSelected: boolean = false;
  public id: number = 0;

  public updateArticle(id: number) {
    if (this.articleSelected == false) {
      this.articleSelected = true;
      this.id = id;
    }
  }
}
