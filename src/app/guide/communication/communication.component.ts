import { Component } from '@angular/core';
import { userCommunication } from './communication.types';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html'
})
export class CommunicationComponent {

  /**
   * The communication method
   */
  public communication: userCommunication = "";

  /**
   * Switches from SMS to email or vice versa
   * @param choice The new communication choice
   */
  public swapCommunication(choice: userCommunication) {
    this.communication = choice;
  }

  //Opens a link to another domain.
  openLink(link: string) {
    window.open("https://" + link);
  }
}
