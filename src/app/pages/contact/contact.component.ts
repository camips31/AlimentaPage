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
    phone: '+591 77731818',
    email: 'contacto@alimenta.bo',
    locations: [
      {
        city: 'La Paz - Sopocachi',
        address: 'Av. Sánchez Lima, Edificio Orabela Oficina 2B',
        mapUrl: 'https://www.google.com/maps/dir//-16.5124489,-68.1254433/@-16.5124489,-68.1280182,17z',
        schedule: [
          { day: 'Lunes - Viernes', hours: '9:00 AM - 7:00 PM' },
          { day: 'Sábados', hours: '9:00 AM - 1:00 PM' }
        ]
      },
      {
        city: 'Santa Cruz',
        address: 'Calle Guapomó, Pediatrics Centro Médico',
        mapUrl: 'https://maps.app.goo.gl/cTv1T7xipNjYinJX9',
        schedule: [
          { day: 'Lunes - Viernes', hours: '9:00 AM - 7:00 PM' },
          { day: 'Sábados', hours: '9:00 AM - 1:00 PM' }
        ]
      }
    ]
  };

  socialMedia = [
    {
      name: 'Instagram',
      icon: 'photo_camera',
      url: 'https://instagram.com/alimenta_bolivia',
      handle: '@alimenta_bolivia'
    },
    {
      name: 'Facebook',
      icon: 'thumb_up',
      url: 'https://facebook.com/alimentabolivia',
      handle: '/alimentabolivia'
    },
    {
      name: 'TikTok',
      icon: 'music_note',
      url: 'https://tiktok.com/@alimenta_bo',
      handle: '@alimenta_bo'
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
    const phone = '5917731818';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  openSocialMedia(url: string) {
    window.open(url, '_blank');
  }
}
