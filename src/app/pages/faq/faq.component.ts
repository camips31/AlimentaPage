import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
  category: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  selectedCategory: string = 'Todas';

  categories = [
    'Todas',
    'Consultas',
    'Atención',
    'Pagos y Seguros',
    'General'
  ];

  faqs: FaqItem[] = [
    {
      question: '¿Cómo agendo una consulta?',
      answer: 'Para agendar una consulta puedes comunicarte a nuestro número de WhatsApp dependiendo de la sucursal que prefieras, en la ciudad de La Paz o en Santa Cruz.',
      isOpen: false,
      category: 'Consultas'
    },
    {
      question: '¿La atención es online o presencial?',
      answer: 'Tenemos ambas modalidades de atención. Los horarios varían de acuerdo a la disponibilidad de nuestras nutricionistas.',
      isOpen: false,
      category: 'Atención'
    },
    {
      question: '¿Cuánto dura una consulta?',
      answer: 'Una consulta tiene una duración promedio de 45 a 60 minutos para brindarte una atención de calidad y diseñar un plan de tratamiento 100% personalizado.',
      isOpen: false,
      category: 'Consultas'
    },
    {
      question: '¿Se realizan planes personalizados?',
      answer: 'Sí, todos nuestros planes son 100% personalizados, de acuerdo a las necesidades y gustos de cada uno de nuestros pacientes.',
      isOpen: false,
      category: 'Atención'
    },
    {
      question: '¿Atienden niños?',
      answer: 'Sí, tenemos nutricionistas capacitadas para la atención de tu niño.',
      isOpen: false,
      category: 'Atención'
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Actualmente aceptamos pagos por QR y efectivo.',
      isOpen: false,
      category: 'Pagos y Seguros'
    },
    {
      question: '¿Qué pasa si no puedo asistir a una consulta?',
      answer: 'Te reagendamos. Tienes la posibilidad de reagendar tu consulta siempre que notifiques tu falta con anticipación.',
      isOpen: false,
      category: 'Consultas'
    },
    {
      question: '¿Ofrecen planes para empresas?',
      answer: 'Sí, según las necesidades o disposición de la empresa se elabora un plan especial acorde a la cantidad de personas, a las actividades o con un enfoque de acuerdo a su trabajo.',
      isOpen: false,
      category: 'General'
    },
    {
      question: '¿Necesito hacer análisis de laboratorio?',
      answer: 'Es posible que nuestras nutricionistas te soliciten algún análisis de laboratorio si es necesario para descartar o confirmar alguna patología o deficiencia nutricional.',
      isOpen: false,
      category: 'Consultas'
    },
    {
      question: '¿Trabajan con seguros médicos?',
      answer: 'Sí, actualmente trabajamos con Bisa Seguros y seguros COBEE.',
      isOpen: false,
      category: 'Pagos y Seguros'
    },
    {
      question: '¿Puedo llevar acompañante a la consulta?',
      answer: 'Por supuesto. Puedes llevar un acompañante a la consulta.',
      isOpen: false,
      category: 'Consultas'
    }
  ];

  get filteredFaqs() {
    if (this.selectedCategory === 'Todas') {
      return this.faqs;
    }
    return this.faqs.filter(faq => faq.category === this.selectedCategory);
  }

  toggleFaq(faq: FaqItem) {
    faq.isOpen = !faq.isOpen;
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.faqs.forEach(faq => faq.isOpen = false);
  }

  contactWhatsApp() {
    const phone = '59175000000';
    const message = 'Hola! Tengo una pregunta que no encontré en las FAQ';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
