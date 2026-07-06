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
  contactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  contactInfo = {
    whatsapp: '+591 77731818',
    emails: ['alimenta.vc@gmail.com', 'alimentaempresas@gmail.com'],
    locations: [
      {
        city: 'Sede La Paz',
        address: 'La Paz, sucursal Sopocachi, Av. Sánchez Lima, Edificio Orabela, oficina 2B',
        phones: ['77731818', '78250459'],
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
      handle: 'Alimenta Centro de Nutricion - Bolivia'
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
    const message = `Hola! Mi nombre es ${this.contactForm.name}
Email: ${this.contactForm.email}
Teléfono: ${this.contactForm.phone}

Mensaje: ${this.contactForm.message}`;

    this.contactWhatsApp(message);
  }

  contactWhatsApp(message: string = '¡Hola! Me gustaría agendar una consulta') {
    const phone = '59177731818';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  openSocialMedia(url: string) {
    window.open(url, '_blank');
  }
}
