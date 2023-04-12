import { Component, ElementRef, ViewChild } from '@angular/core';
import { browserSelection } from './browser.types';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ["./browser.component.css"],
  animations: [
    //Holds the color transforms
    trigger("toggleClick", [
      state('Chrome', style({
        background: "linear-gradient(to bottom, #176087, #2e5c91)"
      })),
      state("Firefox", style({
        background: "linear-gradient(to bottom, #176087, #26043a)"
      })),
      state('none', style({
        background: "#176087"
      })),
      // CSS Gradients are not animatable. We go from one gradient, to a solid color, to a gradient as a workaround
      transition("Firefox <=> Chrome", animate("3000ms linear", keyframes([
        style({background: "#176087", offset: 0.5}),
      ])) ),
      transition("none => Chrome", animate("1000ms linear")),
      transition("none => Firefox", animate("1000ms linear"))
    ])
  ]
})
export class BrowserComponent {
  //Selects the chrome and firefox sections
  @ViewChild("chrome")
  chrome!: ElementRef;
  @ViewChild("firefox")
  firefox!: ElementRef;
  
  public browser: browserSelection = "none";

  /**
   * Switches browsers. Hides one and shows the other.
   * @param browser The new browser
   */
  public swapBrowser(browser: browserSelection) {
    this.browser = browser;
    //Scroll to the new section (Only works if one is already open)
    if (this.browser == "Chrome") {
      this.chrome.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      this.firefox.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /**
   * Opens a link to a new domain
   * @param link The new domain
   */
  openLink(link: string) {
    window.open("https://" + link);
  }
}