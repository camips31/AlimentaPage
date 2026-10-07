import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class WhatsappService {
  readonly requests = new Subject<string>();
  open(message = 'Hola, me gustaría recibir información sobre Alimenta', event?: Event) {
    event?.preventDefault();
    this.requests.next(message);
  }
}
