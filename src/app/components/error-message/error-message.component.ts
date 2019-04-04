import { Component } from '@angular/core';
import { ErrorMessageService } from '../../shared/services/error-message.service';

@Component({
  selector: 'error-message',
  templateUrl: './error-message.component.html'
})
export class MessagesComponent {
  constructor(public messageService: ErrorMessageService) {}
}
