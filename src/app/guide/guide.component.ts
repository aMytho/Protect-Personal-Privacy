import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent {
  constructor(private router: Router) {}

  /**
   * Switch to a specific page in the guide
   * @param page The page to switch to
   */
  public switchPages(page: string) {
    this.router.navigate(["/guide/", page]);
  }
}
