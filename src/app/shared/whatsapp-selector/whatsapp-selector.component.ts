import { Component, ElementRef, ViewChild, DestroyRef, inject, AfterViewInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WhatsappService } from './whatsapp.service';
@Component({
 selector: 'app-whatsapp-selector', standalone: true,
 template: `
 <dialog #dialog aria-labelledby="whatsapp-title" aria-describedby="whatsapp-help" (click)="backdrop($event)">
   <div class="selector-content">
     <button class="close" type="button" aria-label="Cerrar selector" (click)="close()">×</button>
     <h2 id="whatsapp-title">¿Con qué sede quieres hablar?</h2>
     <p id="whatsapp-help">Elige una sede para continuar en WhatsApp.</p>
     <a [href]="link('59178250459')" target="_blank" rel="noopener noreferrer" (click)="close()"><span><strong>La Paz</strong><small>+591 78250459</small></span><span aria-hidden="true">↗</span></a>
     <a [href]="link('59176838851')" target="_blank" rel="noopener noreferrer" (click)="close()"><span><strong>Santa Cruz</strong><small>+591 76838851</small></span><span aria-hidden="true">↗</span></a>
   </div>
 </dialog>`,
 styles: [`
 dialog { padding:0; width:calc(100% - 32px); max-width:390px; margin:auto; border:1px solid #e2e4d9; border-radius:20px; background:#fffdf7; color:#24485a; box-shadow:0 20px 70px #0003; }
 dialog::backdrop { background:#142c3866; }
 .selector-content { padding:28px 24px 24px; position:relative; }
 h2 { font-size:21px; line-height:1.3; margin:8px 20px 10px 0; }
 p { font-size:14px; line-height:1.5; color:#66716f; margin:0 0 20px; }
 a { display:flex; align-items:center; justify-content:space-between; gap:12px; padding:14px 16px; margin-top:10px; background:#eef3f4; border:1px solid #dbe5e7; border-radius:12px; color:#315f71; text-decoration:none; }
 a:hover { background:#e0ecef; border-color:#3f6e81; }
 strong { display:block; font-size:16px; } small { display:block; font-size:13px; margin-top:4px; }
 .close { position:absolute; top:8px; right:8px; width:36px; height:36px; border:0; background:transparent; color:#315f71; font-size:26px; cursor:pointer; }
 a:focus-visible,button:focus-visible { outline:2px solid #3f6e81; outline-offset:3px; }
 `]
})
export class WhatsappSelectorComponent implements AfterViewInit {
 @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;
 private service = inject(WhatsappService);
 private destroyRef = inject(DestroyRef);
 message = '';
 ngAfterViewInit() {
  this.service.requests.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(message => {
   this.message = message;
   if (!this.dialog.nativeElement.open) this.dialog.nativeElement.showModal();
  });
 }
 link(phone: string) { return 'https://wa.me/' + phone + '?text=' + encodeURIComponent(this.message); }
 close() { this.dialog.nativeElement.close(); }
 backdrop(event: MouseEvent) { if(event.target === this.dialog.nativeElement) { const r=this.dialog.nativeElement.getBoundingClientRect(); if(event.clientX<r.left || event.clientX>r.right || event.clientY<r.top || event.clientY>r.bottom) this.close(); } }
}
