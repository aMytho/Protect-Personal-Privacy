import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  public src:string = "";

  getPost(id: number) {
    if (id == 1) {
      this.src = '/assets/posts/demo copy.md'
    }
    alert(1)
  }

  ngOnInit(): void {
    this.getPost(1);
  }
}
