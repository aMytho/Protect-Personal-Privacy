import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {
  /**
   * The article element
   */
  @ViewChild("article")
  public articleElement!: ElementRef;
  /**
   * Is a case loaded? Used to show/hide homepage
   */
  public articleSelected: boolean = false;
  /**
   * ID of the current article
   */
  public id: number = 0;

  /**
   * Sets a new article
   * @param id The new ID
   */
  public updateArticle(id: number) {
    this.articleSelected = true;
    this.id = id;
  }
}
