import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-band',
  templateUrl: './message-band.component.html',
  styleUrls: ['./message-band.component.scss']
})
export class MessageBandComponent {

  @Input() 
  message?: string = 'No Message.';

  @Input() 
  showBand: boolean = true;
  
}
