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
    'Servicios',
    'Pagos',
    'Planes',
    'General'
  ];

  faqs: FaqItem[] = [
    {
      question: '¿Cómo agendo una consulta?',
      answer: 'Puedes agendar tu consulta de tres formas: enviándonos un mensaje por WhatsApp, llamando a nuestro teléfono o completando el formulario de contacto en nuestra web. Te responderemos lo antes posible para coordinar tu cita.',
      isOpen: false,
      category: 'Consultas'
    },
    {
      question: '¿La atención es online o presencial?',
      answer: 'Ofrecemos ambas modalidades. Puedes elegir la que mejor se adapte a tus necesidades. Las consultas online son por videollamada y tienen la misma calidad que las presenciales.',
      isOpen: false,
      category: 'Consultas'
    },
    {
      question: '¿Cuánto dura una consulta?',
      answer: 'La primera consulta dura aproximadamente 60 minutos, ya que incluye una evaluación completa. Las consultas de seguimiento duran entre 30-45 minutos.',
      isOpen: false,
      category: 'Consultas'
    },
    {
      question: '¿Se realizan planes personalizados?',
      answer: 'Sí, todos nuestros planes son 100% personalizados. Tomamos en cuenta tus objetivos, preferencias alimentarias, rutina diaria, condiciones de salud y presupuesto para crear un plan que se adapte perfectamente a ti.',
      isOpen: false,
      category: 'Servicios'
    },
    {
      question: '¿Atienden niños?',
      answer: 'Sí, contamos con nutricionistas especializadas en nutrición infantil y adolescente. Trabajamos con niños desde los 2 años en adelante.',
      isOpen: false,
      category: 'Servicios'
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos transferencias bancarias, QR de todos los bancos, efectivo y tarjetas de crédito/débito. El pago se realiza al momento de la consulta o al inicio del plan elegido.',
      isOpen: false,
      category: 'Pagos'
    },
    {
      question: '¿Puedo cambiar de plan durante el tratamiento?',
      answer: 'Sí, entendemos que las necesidades pueden cambiar. Puedes ajustar tu plan en cualquier momento. Contáctanos y te ayudaremos a hacer la transición.',
      isOpen: false,
      category: 'Planes'
    },
    {
      question: '¿Qué pasa si no puedo asistir a una consulta?',
      answer: 'Te pedimos que nos avises con al menos 24 horas de anticipación para poder reprogramar tu cita sin ningún costo. Las cancelaciones con menos tiempo podrían tener un cargo.',
      isOpen: false,
      category: 'Consultas'
    },
    {
      question: '¿Ofrecen planes para empresas?',
      answer: 'Sí, tenemos programas corporativos que incluyen evaluaciones nutricionales, talleres educativos y seguimiento grupal. Estos programas están diseñados para mejorar la salud y productividad de los equipos de trabajo.',
      isOpen: false,
      category: 'Servicios'
    },
    {
      question: '¿Necesito hacer análisis de laboratorio?',
      answer: 'Depende de tu caso. En algunos casos solicitamos análisis de sangre para tener un panorama completo de tu salud. Si ya tienes análisis recientes (menos de 6 meses), puedes traerlos a tu consulta.',
      isOpen: false,
      category: 'Consultas'
    },
    {
      question: '¿Cuánto tiempo toma ver resultados?',
      answer: 'Los resultados varían según cada persona y sus objetivos. Generalmente, los cambios físicos se notan a partir de las 3-4 semanas, pero los cambios en energía y bienestar pueden sentirse desde la primera semana.',
      isOpen: false,
      category: 'General'
    },
    {
      question: '¿Trabajan con seguros médicos?',
      answer: 'Emitimos facturas que puedes presentar a tu seguro para reembolso, pero no tenemos convenios directos. Te recomendamos consultar con tu seguro sobre la cobertura de consultas nutricionales.',
      isOpen: false,
      category: 'Pagos'
    },
    {
      question: '¿Qué diferencia hay entre un nutricionista y un nutriólogo?',
      answer: 'En Bolivia, ambos términos se refieren a profesionales licenciados en Nutrición y Dietética. Todos nuestros profesionales cuentan con título universitario y están capacitados para brindarte atención integral.',
      isOpen: false,
      category: 'General'
    },
    {
      question: '¿Hacen dietas para deportistas?',
      answer: 'Sí, contamos con especialistas en nutrición deportiva que trabajan con atletas de diferentes disciplinas, desde amateur hasta profesional. Los planes incluyen periodización nutricional y estrategias de suplementación.',
      isOpen: false,
      category: 'Servicios'
    },
    {
      question: '¿Puedo llevar acompañante a la consulta?',
      answer: 'Sí, especialmente en el caso de niños, adolescentes o personas mayores. Para adultos también es bienvenido si deseas el apoyo de alguien cercano.',
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
    // Cerrar todos los FAQs al cambiar de categoría
    this.faqs.forEach(faq => faq.isOpen = false);
  }

  contactWhatsApp() {
    const phone = '59175000000';
    const message = 'Hola! Tengo una pregunta que no encontré en las FAQ';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
