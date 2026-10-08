import { inject } from '@angular/core';
import { WhatsappService } from '../../shared/whatsapp-selector/whatsapp.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  readonly whatsapp = inject(WhatsappService);
  contactIcons: Record<string, string> = {
    WhatsApp: 'M20.5 3.5A11.9 11.9 0 0 0 1.8 17.8L0 24l6.4-1.7A12 12 0 0 0 24 11.9c0-3.2-1.2-6.2-3.5-8.4ZM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.3-.4A9.9 9.9 0 1 1 12 21.8Zm5.5-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.7-.3-.5.3-.5.9-1.7.1-.2 0-.4 0-.6l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.1.2 2.2 3.4 5.4 4.8 2 .8 2.8.9 3.8.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z',
    Email: 'M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z',
    Instagram: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z',
    Facebook: 'M14 22v-9h3l.5-4H14V7c0-1 .3-2 2-2h2V1.5A25 25 0 0 0 15 1c-3 0-5 1.8-5 5v3H7v4h3v9h4Z',
    TikTok: 'M16.5 2c.3 2.5 1.8 4.2 4.5 4.4v3.2a8 8 0 0 1-4.5-1.3v7c0 3.5-2.3 6.2-5.8 6.2-3.6 0-5.9-2.5-5.9-5.5 0-3.5 2.9-6 6.5-5.4V14c-1.6-.5-3.1.4-3.1 2 0 1.2.9 2.2 2.3 2.2 1.6 0 2.4-1.1 2.4-2.8V2h3.6Z',
    LinkedIn: 'M5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h4v12H3V9Zm6 0h4v1.6c.6-1 1.8-1.9 3.6-1.9 3.8 0 4.4 2.5 4.4 5.7V21h-4v-5.9c0-1.4 0-3.2-2-3.2s-2 1.5-2 3.1v6H9V9Z',
    Map: 'm15 5-6-2-7 3v15l7-3 6 2 7-3V2l-7 3Zm-5 .5 4 1.3v10.7l-4-1.3V5.5ZM4 7.3l4-1.7v10.7l-4 1.8V7.3Zm16 8.4-4 1.7V6.7l4-1.8v10.8Z'
  };

  contactForm = {
    name: '',
    message: ''
  };

  contactInfo = {
    whatsapp: '+591 78250459',
    emails: ['alimenta.vc@gmail.com', 'alimentaempresas@gmail.com'],
    locations: [
      {
        city: 'Sede La Paz',
        address: 'La Paz, sucursal Sopocachi, Av. Sánchez Lima, Edificio Orabela, oficina 2B',
        phones: ['78250459'],
        mapUrl: 'https://www.google.com/maps/dir//-16.5124489,-68.1254433/@-16.5124489,-68.1280182,17z/data=!4m8!1m5!3m4!2zMTbCsDMwJzQ0LjgiUyA2OMKwMDcnMzEuNiJX!8m2!3d-16.5124489!4d-68.1254433!4m1!3e2?hl=es&entry=ttu'
      },
      {
        city: 'Sede Santa Cruz',
        address: 'Santa Cruz, Avenida Beni, calle Guapomó entre 2do anillo y Av. Los Cusis, Pediatrics Centro Médico',
        phones: ['76838851'],
        mapUrl: 'https://maps.app.goo.gl/cTv1T7xipNjYinJX9'
      }
    ]
  };

  socialMedia = [
    {
      name: 'Instagram',
      icon: 'photo_camera',
      url: 'https://www.instagram.com/alimenta.bol?igsh=am82MzF6aW9xcjln',
      handle: '@alimenta.bol'
    },
    {
      name: 'Facebook',
      icon: 'thumb_up',
      url: 'https://www.facebook.com/share/1LCzxk5mQx/',
      handle: 'Alimenta Centro de Nutrición - Bolivia'
    },
    {
      name: 'TikTok',
      icon: 'music_note',
      url: 'https://www.tiktok.com/@alimenta.bol?_r=1&_t=ZS-97UYWM1TIE0',
      handle: '@alimenta.bol'
    },
    {
      name: 'LinkedIn',
      icon: 'business',
      url: 'https://www.linkedin.com/company/alimenta-centro-de-asesoramiento-nutricional-personalizado/',
      handle: 'Alimenta Centro de Asesoramiento Nutricional'
    }
  ];

  submitForm() {
    const name = this.contactForm.name.trim();
    const message = this.contactForm.message.trim();
    if (!name || !message) return;
    this.contactWhatsApp('Hola, soy ' + name + '.\n\n' + message);
  }

  contactWhatsApp(message: string = 'Hola, quisiera agendar una consulta. ¿Podrían orientarme sobre el servicio más adecuado e indicarme la disponibilidad?') {
    this.whatsapp.open(message);
  }

  openSocialMedia(url: string) {
    window.open(url, '_blank');
  }
}
