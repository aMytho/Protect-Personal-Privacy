import { Component } from '@angular/core';
import { userCommunication } from './communication.types';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html'
})
export class CommunicationComponent {

  public communication: userCommunication = "";

  public swapCommunication(choice: userCommunication) {
    this.communication = choice;
  }

  openLink(link: string) {
    window.open("https://" + link);
  }
}
