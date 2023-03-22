import { Component} from '@angular/core';
@Component({
  selector: 'app-alt-services',
  templateUrl: './alt-services.component.html',
  styleUrls: ['./alt-services.component.css']
})
export class AltServicesComponent {
  public scrollTo(element: string) {
    // Technically this is the non angular way, but it works :)
    let target = document.getElementById(element)!;
    window.scroll({
      top: target.getBoundingClientRect().top + window.scrollY,
      behavior: 'smooth',
    });
  }
}
