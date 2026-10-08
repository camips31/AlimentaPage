import { inject } from '@angular/core';
import { WhatsappService } from '../whatsapp-selector/whatsapp.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  readonly whatsapp = inject(WhatsappService);
  currentYear = new Date().getFullYear();

  footerForm = {
    name: '',
    email: '',
    message: ''
  };

  socialLinks = {
    instagram: 'https://www.instagram.com/alimenta.bol?igsh=am82MzF6aW9xcjln',
    facebook: 'https://www.facebook.com/share/1LCzxk5mQx/',
    tiktok: 'https://www.tiktok.com/@alimenta.bol?_r=1&_t=ZS-97UYWM1TIE0'
  };

  sendFooterWhatsApp(): void {
    if (!this.footerForm.name.trim() || !this.footerForm.message.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.footerForm.email.trim())) return;
    const message = `Hola, soy ${this.footerForm.name}.
Mi correo es: ${this.footerForm.email}

Mensaje: ${this.footerForm.message}`;

    this.whatsapp.open(message);
  }
}
