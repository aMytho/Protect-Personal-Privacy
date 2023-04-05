import { Component, ElementRef, ViewChild } from '@angular/core';
import { browserSelection } from './browser.types';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html'
})
export class BrowserComponent {
  @ViewChild("chrome")
  chrome!: ElementRef;
  @ViewChild("firefox")
  firefox!: ElementRef;
  
  public browser: browserSelection = "";

  public swapBrowser(browser: browserSelection) {
    this.browser = browser;
    if (browser == "Chrome") {
      this.chrome.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      this.firefox.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openLink(link: string) {
    window.open("https://" + link);
  }
}