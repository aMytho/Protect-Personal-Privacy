import { Component } from '@angular/core';

@Component({
  selector: 'app-unsafe',
  templateUrl: './unsafe.component.html',
  styleUrls: ['./unsafe.component.css']
})
export class UnsafeComponent {
  /**
     * Opens a link to a new domain
     * @param link The new domain
     */
  openLink(link: string) {
    window.open("https://" + link);
  }
}
