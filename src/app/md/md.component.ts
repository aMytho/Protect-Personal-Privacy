import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-md',
  templateUrl: './md.component.html',
  styleUrls: ['./md.component.css']
})
export class MdComponent {
  /**
   * Number representing the current post
   */
  @Input() post: number = 0;

  /**
   * Link to the active post.
   */
  public src:string = "";

  /**
   * Based on the ID, return the related post
   * @param id The post to access
   */
  getPost(id: number) {
    switch(id) {
      case -1: this.src = '/assets/posts/alternativeServives.md'; break;
      case 1: this.src = '/assets/posts/demo copy.md'; break;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // Post updated, load new post
    this.getPost(changes['post'].currentValue);
  }
}
