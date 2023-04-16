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
  @Input() public post: number = 0;

  /**
   * Link to the active post.
   */
  public src:string = "";

  /**
   * Based on the ID, set the related post
   * @param id The post to access
   */
  getPost(id: number) {
    console.log("Loading markdown with id of: " + id)
    switch(id) {
      case -1: this.src = '/assets/posts/alternativeServives.md'; break;
      case 1: this.src = '/assets/posts/demo copy.md'; break;
      case 2: this.src = '/assets/posts/cases/privacyVsSecurity.md'; break;
      case 3: this.src = '/assets/posts/cases/breaches/reddit.md'; break;
      case 4: this.src = '/assets/posts/cases/breaches/openAI.md'; break;
      case 5: this.src = '/assets/posts/cases/free.md'; break;
      case 6: this.src = '/assets/posts/cases/simple.md'; break;
      case 7: this.src = '/assets/posts/cases/breaches/carriers.md'; break;
      case 8: this.src = '/assets/posts/cases/breaches/googleLocation.md'; break;
      case 9: this.src = '/assets/posts/cases/breaches/facebookMeta.md'; break;
      case 10: this.src = '/assets/posts/cases/intheknow.md'; break;
      case 11: this.src = '/assets/posts/cases/hide.md'; break;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // Post updated, load new post
    this.getPost(changes['post'].currentValue);
  }
}