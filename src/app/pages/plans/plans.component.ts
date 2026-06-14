import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {
  plans = [
    {
      id: 1,
      name: 'Plan Inicial',
      subtitle: 'Ideal para comenzar tu cambio',
      price: 'Consultar',
      duration: '1 mes',
      isPopular: false,
      includes: [
        'Evaluación nutricional completa',
        'Análisis de composición corporal',
        'Plan alimentario personalizado',
        '2 consultas de seguimiento',
        'Recetario digital',
        'Soporte por WhatsApp'
      ],
      modality: 'Presencial u Online',
      whatsappMsg: 'Hola! Me interesa el Plan Inicial'
    },
    {
      id: 2,
      name: 'Plan Transformación',
      subtitle: 'El más elegido para resultados sostenibles',
      price: 'Consultar',
      duration: '3 meses',
      isPopular: true,
      includes: [
        'Todo lo del Plan Inicial',
        '6 consultas de seguimiento',
        'Ajustes mensuales del plan',
        'Educación nutricional continua',
        'Lista de compras personalizada',
        'Guía de meal prep',
        'Acceso a grupo de apoyo',
        'Soporte prioritario por WhatsApp'
      ],
      modality: 'Presencial u Online',
      whatsappMsg: 'Hola! Me interesa el Plan Transformación'
    },
    {
      id: 3,
      name: 'Plan Integral',
      subtitle: 'Acompañamiento completo',
      price: 'Consultar',
      duration: '6 meses',
      isPopular: false,
      includes: [
        'Todo lo del Plan Transformación',
        '12 consultas de seguimiento',
        'Evaluación psicológica nutricional',
        'Sesiones de coaching nutricional',
        'Plan de ejercicios complementario',
        'Análisis de laboratorio incluidos',
        'Taller grupal de cocina saludable',
        'Soporte 24/7 por WhatsApp',
        'Garantía de resultados'
      ],
      modality: 'Presencial u Online',
      whatsappMsg: 'Hola! Me interesa el Plan Integral'
    },
    {
      id: 4,
      name: 'Plan Deportivo',
      subtitle: 'Para atletas y deportistas',
      price: 'Consultar',
      duration: '4 meses',
      isPopular: false,
      includes: [
        'Evaluación deportiva completa',
        'Plan de periodización nutricional',
        '8 consultas de seguimiento',
        'Estrategias de suplementación',
        'Nutrición pre y post entrenamiento',
        'Menús para competencia',
        'Análisis de composición corporal mensual',
        'Soporte por WhatsApp'
      ],
      modality: 'Presencial u Online',
      whatsappMsg: 'Hola! Me interesa el Plan Deportivo'
    },
    {
      id: 5,
      name: 'Plan Familiar',
      subtitle: 'Para toda la familia',
      price: 'Consultar',
      duration: '3 meses',
      isPopular: false,
      includes: [
        'Evaluación para 3-4 miembros',
        'Plan alimentario familiar',
        'Menús compartidos',
        '6 consultas familiares',
        'Educación nutricional para niños',
        'Recetas fáciles y saludables',
        'Lista de compras familiar',
        'Soporte por WhatsApp'
      ],
      modality: 'Presencial u Online',
      whatsappMsg: 'Hola! Me interesa el Plan Familiar'
    },
    {
      id: 6,
      name: 'Plan Corporativo',
      subtitle: 'Para empresas',
      price: 'Consultar',
      duration: 'Personalizado',
      isPopular: false,
      includes: [
        'Evaluaciones grupales',
        'Talleres nutricionales',
        'Charlas de educación alimentaria',
        'Material educativo digital',
        'Seguimiento grupal',
        'Reportes para la empresa',
        'Consultas individuales opcionales',
        'Atención en oficinas'
      ],
      modality: 'Presencial',
      whatsappMsg: 'Hola! Me interesa el Plan Corporativo para mi empresa'
    }
  ];

  benefits = [
    {
      icon: '👥',
      title: 'Atención Personalizada',
      description: 'Cada plan se adapta a tus necesidades específicas'
    },
    {
      icon: '📱',
      title: 'Soporte Continuo',
      description: 'Acompañamiento constante por WhatsApp'
    },
    {
      icon: '🏠',
      title: 'Flexibilidad',
      description: 'Modalidad presencial u online según prefieras'
    },
    {
      icon: '📊',
      title: 'Seguimiento',
      description: 'Mediciones y ajustes regulares de tu progreso'
    }
  ];

  contactWhatsApp(message: string) {
    const phone = '59175000000';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
