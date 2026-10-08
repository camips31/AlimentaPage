import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class WhatsappService {
  readonly requests = new Subject<string>();
  open(message = 'Hola, quisiera agendar una consulta de Nutrición Clínica. ¿Podrían indicarme la disponibilidad?', event?: Event) {
    event?.preventDefault();
    this.requests.next(message);
  }
}
