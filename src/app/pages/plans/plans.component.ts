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
      name: 'Primera Consulta Nutricional',
      subtitle: 'Evaluación inicial integral',
      price: '150 Bs',
      duration: '45 a 60 minutos',
      isPopular: false,
      includes: [
        'Entrevista nutricional completa',
        'Evaluación nutricional mediante metodología ISAK',
        'Análisis de composición corporal',
        'Detección de deficiencias e intolerancias nutricionales',
        'Informe nutricional integral',
        'Revisión o solicitud de análisis laboratoriales'
      ],
      buttonText: 'Reservar Consulta',
      whatsappMsg: 'Hola! Quiero reservar una Primera Consulta Nutricional'
    },
    {
      id: 2,
      name: 'Plan 1 mes',
      subtitle: 'Acompañamiento personalizado mensual',
      price: '445 Bs',
      duration: '1 mes',
      isPopular: true,
      includes: [
        'Plan de alimentación personalizado',
        'Menú semanal o sistema de intercambios',
        'Recetas saludables',
        'Comunicación vía WhatsApp',
        'Seguimiento online',
        '1 taller de nutrición o medicina del estilo de vida'
      ],
      buttonText: 'Quiero este plan',
      whatsappMsg: 'Hola! Quiero el Plan 1 mes'
    },
    {
      id: 3,
      name: 'Plan 12 semanas',
      subtitle: 'Programa de 3 meses para avanzar con seguimiento',
      price: '990 Bs',
      duration: '3 meses',
      isPopular: false,
      includes: [
        '3 planes nutricionales personalizados',
        'Recetas e intercambios saludables',
        'Comunicación vía WhatsApp',
        'Seguimiento online',
        '4 reconsultas presenciales cada 20 días',
        'Evaluación de avances y objetivos',
        '4 talleres de nutrición o medicina del estilo de vida',
        '20% de descuento en paquete de 6 barritas'
      ],
      buttonText: 'Quiero este plan',
      whatsappMsg: 'Hola! Quiero el Plan 12 semanas'
    },
    {
      id: 4,
      name: 'Método Fit - 12 semanas',
      subtitle: 'Nutrición, entrenamiento o terapia conductual',
      price: '1.500 Bs',
      duration: '3 meses',
      isPopular: false,
      includes: [
        '3 planes de alimentación personalizados',
        '4 reconsultas cada 20 días',
        'Plan de entrenamiento personalizado o sesión de terapia conductual psicológica',
        'Suplementación incluida: proteína o Metabolism Booster',
        'Recetas saludables',
        'Comunicación vía WhatsApp'
      ],
      buttonText: 'Quiero este plan',
      whatsappMsg: 'Hola! Quiero el Método Fit - 12 semanas'
    }
  ];

  benefits = [
    {
      icon: 'person',
      title: 'Atención Personalizada',
      description: 'Cada plan se adapta a tus objetivos, hábitos y necesidades.'
    },
    {
      icon: 'chat',
      title: 'Soporte Continuo',
      description: 'Acompañamiento por WhatsApp durante tu proceso.'
    },
    {
      icon: 'sync_alt',
      title: 'Flexibilidad',
      description: 'Opciones presenciales, online y con seguimiento progresivo.'
    },
    {
      icon: 'monitoring',
      title: 'Seguimiento',
      description: 'Evaluación de avances y ajustes según tus resultados.'
    }
  ];

  contactWhatsApp(message: string) {
    const phone = '59175000000';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
