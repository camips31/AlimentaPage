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
    "id": 1,
    "name": "Primera consulta nutricional",
    "subtitle": "Entrevista, antropometría e informe nutricional",
    "price": "150 Bs",
    "duration": "45 a 60 minutos",
    "includes": [
      "Entrevista inicial",
      "Medición antropométrica",
      "Informe completo de estado nutricional"
    ],
    "isPopular": false,
    "buttonText": "Reservar",
    "whatsappMsg": "Hola! Me interesa Primera consulta nutricional"
  },
  {
    "id": 2,
    "name": "Plan 1 mes",
    "subtitle": "Plan personalizado + taller de nutrición",
    "price": "410 Bs",
    "duration": "1 mes",
    "includes": [
      "Plan alimentario personalizado",
      "Entrega por correo electrónico o impreso",
      "Explicación presencial o virtual",
      "Taller de nutrición"
    ],
    "isPopular": true,
    "buttonText": "Reservar",
    "whatsappMsg": "Hola! Me interesa Plan 1 mes"
  },
  {
    "id": 3,
    "name": "Reconsulta de seguimiento",
    "subtitle": "Seguimiento nutricional",
    "price": "120 Bs",
    "duration": "Según seguimiento",
    "includes": [
      "Antropometría",
      "Taller de nutrición"
    ],
    "isPopular": false,
    "buttonText": "Reservar",
    "whatsappMsg": "Hola! Me interesa Reconsulta de seguimiento"
  },
  {
    "id": 4,
    "name": "Plan 12 semanas",
    "subtitle": "3 meses de seguimiento · Ahorra 400 Bs",
    "price": "980 Bs",
    "duration": "Vigencia: 6 meses",
    "includes": [
      "Primera consulta nutricional incluida",
      "3 × Plan 1 mes",
      "Plan personalizado y explicación presencial o virtual cada mes",
      "Precio por separado: 150 + 3 × 410 = 1380 Bs"
    ],
    "isPopular": false,
    "buttonText": "Reservar",
    "whatsappMsg": "Hola! Me interesa Plan 12 semanas"
  },
  {
    "id": 5,
    "name": "COMBO Método Fit",
    "subtitle": "Nutrición + psicología o entrenamiento",
    "price": "1500 Bs",
    "duration": "Vigencia: 1 año",
    "includes": [
      "Plan 12 semanas, incluida la primera consulta: 910 Bs",
      "Primera visita de introducción + primera consulta de psicología, o 1 plan de entrenamiento: 240 Bs",
      "Metabolism Booster (30 cápsulas) o proteína vegana de soja (500 g): 350 Bs"
    ],
    "isPopular": false,
    "buttonText": "Reservar",
    "whatsappMsg": "Hola! Me interesa COMBO Método Fit"
  },
  {
    "id": 6,
    "name": "Primera visita de psicología",
    "subtitle": "Introducción",
    "price": "90 Bs",
    "duration": "30 minutos",
    "includes": [
      "Visita de introducción"
    ],
    "isPopular": false,
    "buttonText": "Reservar",
    "whatsappMsg": "Hola! Me interesa Primera visita de psicología"
  },
  {
    "id": 7,
    "name": "Primera consulta de psicología",
    "subtitle": "Acompañamiento psicológico",
    "price": "180 Bs",
    "duration": "60 minutos",
    "includes": [
      "Primera consulta"
    ],
    "isPopular": false,
    "buttonText": "Reservar",
    "whatsappMsg": "Hola! Me interesa Primera consulta de psicología"
  },
  {
    "id": 8,
    "name": "Psicología: 4 sesiones",
    "subtitle": "Ahorra 80 Bs",
    "price": "640 Bs",
    "duration": "160 Bs/visita",
    "includes": [
      "4 sesiones de psicología"
    ],
    "isPopular": false,
    "buttonText": "Reservar",
    "whatsappMsg": "Hola! Me interesa Psicología: 4 sesiones"
  },
  {
    "id": 9,
    "name": "Psicología: 6 sesiones",
    "subtitle": "Ahorra 150 Bs",
    "price": "930 Bs",
    "duration": "155 Bs/visita",
    "includes": [
      "6 sesiones de psicología"
    ],
    "isPopular": false,
    "buttonText": "Reservar",
    "whatsappMsg": "Hola! Me interesa Psicología: 6 sesiones"
  },
  {
    "id": 10,
    "name": "Psicología: 10 sesiones",
    "subtitle": "Ahorra 350 Bs",
    "price": "1450 Bs",
    "duration": "145 Bs/visita",
    "includes": [
      "10 sesiones de psicología"
    ],
    "isPopular": false,
    "buttonText": "Reservar",
    "whatsappMsg": "Hola! Me interesa Psicología: 10 sesiones"
  },
  {
    "id": 11,
    "name": "Plan de entrenamiento",
    "subtitle": "Para casa o inicio en el gimnasio",
    "price": "300 Bs",
    "duration": "1 mes",
    "includes": [
      "Plan de entrenamiento personalizado"
    ],
    "isPopular": false,
    "buttonText": "Reservar",
    "whatsappMsg": "Hola! Me interesa Plan de entrenamiento"
  },
  {
    "id": 12,
    "name": "Nutrición a domicilio",
    "subtitle": "Primera consulta en tu hogar",
    "price": "200 Bs",
    "duration": "Primera consulta",
    "includes": [
      "Atención nutricional a domicilio"
    ],
    "isPopular": false,
    "buttonText": "Reservar",
    "whatsappMsg": "Hola! Me interesa Nutrición a domicilio"
  },
  {
    "id": 13,
    "name": "Consulta asincrónica",
    "subtitle": "Online en toda Bolivia",
    "price": "120 Bs",
    "duration": "Por WhatsApp",
    "includes": [
      "Resuelve dudas y da seguimiento nutricional escribiendo directamente por WhatsApp",
      "Sin necesidad de agendar videollamada",
      "Disponible en toda Bolivia, sin importar tu ciudad"
    ],
    "isPopular": false,
    "buttonText": "Reservar",
    "whatsappMsg": "Hola! Me interesa Consulta asincrónica"
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
    const phone = '59177731818';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
