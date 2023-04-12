import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-case-side-bar',
  templateUrl: './case-side-bar.component.html',
  styleUrls: ['./case-side-bar.component.css']
})
export class CaseSideBarComponent {
  /**
   * The ID
   */
  @Output() id = new EventEmitter<number>();

  /**
   * Lets the other component know that a new article is needed
   * @param id The new id
   */
  showCase(id: number) {
    this.id.emit(id);
  }
}
