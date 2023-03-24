import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-case-side-bar',
  templateUrl: './case-side-bar.component.html',
  styleUrls: ['./case-side-bar.component.css']
})
export class CaseSideBarComponent {
  @Output() id = new EventEmitter<number>();

  showCase(id: number) {
    this.id.emit(id);
  }
}
