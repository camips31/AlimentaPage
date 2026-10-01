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
  // Plan destacado en la versión anterior del catálogo.
  popularPlanIds = new Set([2]);

  planGroups = [
  {
    "title": "Servicio de nutrición",
    "plans": [
      {
        "id": 1,
        "name": "Primera consulta nutricional",
        "subtitle": "Evaluación inicial",
        "price": "150 Bs",
        "duration": "",
        "includes": [
          "Entrevista inicial",
          "Medición antropométrica",
          "Informe completo de estado nutricional"
        ],
        "buttonText": "Reservar",
        "whatsappMsg": "Hola! Me interesa Primera consulta nutricional",
        "saving": ""
      },
      {
        "id": 2,
        "name": "Plan 1 mes",
        "subtitle": "Acompañamiento mensual",
        "price": "410 Bs",
        "duration": "1 mes",
        "includes": [
          "Plan alimentario personalizado enviado por correo",
          "Taller de nutrición"
        ],
        "buttonText": "Reservar",
        "whatsappMsg": "Hola! Me interesa Plan 1 mes",
        "saving": ""
      },
      {
        "id": 3,
        "name": "Reconsulta de seguimiento",
        "subtitle": "",
        "price": "120 Bs",
        "duration": "",
        "includes": [
          "Evaluación antropométrica",
          "Taller de nutrición"
        ],
        "buttonText": "Reservar",
        "whatsappMsg": "Hola! Me interesa Reconsulta de seguimiento",
        "saving": ""
      },
      {
        "id": 4,
        "name": "Plan 12 semanas",
        "subtitle": "3 meses de seguimiento",
        "price": "980 Bs",
        "duration": "Vigencia: 6 meses",
        "includes": [
          "Primera consulta: entrevista, medición antropométrica e informe nutricional",
          "Meses 1, 2 y 3: un plan alimentario personalizado cada mes",
          "Entrega por correo electrónico o impreso y explicación presencial o virtual",
          "Por separado: primera consulta + 3 planes mensuales = 1380 Bs"
        ],
        "buttonText": "Reservar",
        "whatsappMsg": "Hola! Me interesa Plan 12 semanas",
        "saving": "Ahorra 400 Bs"
      },
      {
        "id": 5,
        "name": "COMBO Método Fit",
        "subtitle": "Nutrición + psicología o entrenamiento",
        "price": "1500 Bs",
        "duration": "Vigencia: 1 año",
        "includes": [
          "Plan 12 semanas con la primera consulta incluida: 910 Bs (antes 980 Bs)",
          "Primera visita de introducción + primera consulta de psicología, o un plan de entrenamiento: 240 Bs (referencia de psicología: 270 Bs)",
          "Metabolism Booster (30 cápsulas) o proteína vegana de soja (500 g): 350 Bs (referencia del combo: 470 Bs)"
        ],
        "buttonText": "Reservar",
        "whatsappMsg": "Hola! Me interesa COMBO Método Fit",
        "saving": "Ahorra 220 Bs (~13%)"
      }
    ]
  },
  {
    "title": "Acompañamiento con psicología",
    "plans": [
      {
        "id": 6,
        "name": "Primera visita",
        "subtitle": "Introducción a psicología",
        "price": "90 Bs",
        "duration": "30 minutos",
        "includes": [],
        "buttonText": "Reservar",
        "whatsappMsg": "Hola! Me interesa Primera visita de psicología",
        "saving": ""
      },
      {
        "id": 7,
        "name": "Primera consulta",
        "subtitle": "Acompañamiento psicológico",
        "price": "180 Bs",
        "duration": "60 minutos",
        "includes": [],
        "buttonText": "Reservar",
        "whatsappMsg": "Hola! Me interesa Primera consulta de psicología",
        "saving": ""
      },
      {
        "id": 8,
        "name": "Paquete de 4 sesiones",
        "subtitle": "",
        "price": "640 Bs",
        "duration": "160 Bs/visita",
        "includes": [],
        "buttonText": "Reservar",
        "whatsappMsg": "Hola! Me interesa Psicología: 4 sesiones",
        "saving": "Ahorra 80 Bs"
      },
      {
        "id": 9,
        "name": "Paquete de 6 sesiones",
        "subtitle": "",
        "price": "930 Bs",
        "duration": "155 Bs/visita",
        "includes": [],
        "buttonText": "Reservar",
        "whatsappMsg": "Hola! Me interesa Psicología: 6 sesiones",
        "saving": "Ahorra 150 Bs"
      },
      {
        "id": 10,
        "name": "Paquete de 10 sesiones",
        "subtitle": "",
        "price": "1450 Bs",
        "duration": "145 Bs/visita",
        "includes": [],
        "buttonText": "Reservar",
        "whatsappMsg": "Hola! Me interesa Psicología: 10 sesiones",
        "saving": "Ahorra 350 Bs"
      }
    ]
  },
  {
    "title": "Planes de entrenamiento",
    "plans": [
      {
        "id": 11,
        "name": "Plan de entrenamiento",
        "subtitle": "Para casa o inicio en el gimnasio",
        "price": "300 Bs",
        "duration": "1 mes",
        "includes": [],
        "buttonText": "Reservar",
        "whatsappMsg": "Hola! Me interesa Plan de entrenamiento",
        "saving": ""
      }
    ]
  },
  {
    "title": "Otras modalidades",
    "plans": [
      {
        "id": 12,
        "name": "Nutrición a domicilio",
        "subtitle": "Primera consulta en tu hogar",
        "price": "200 Bs",
        "duration": "",
        "includes": [],
        "buttonText": "Reservar",
        "whatsappMsg": "Hola! Me interesa Nutrición a domicilio",
        "saving": ""
      },
      {
        "id": 13,
        "name": "Consulta asincrónica",
        "subtitle": "Online en toda Bolivia",
        "price": "120 Bs",
        "duration": "Por WhatsApp",
        "includes": [
          "Resuelve dudas y recibe seguimiento nutricional por WhatsApp",
          "Sin necesidad de agendar videollamada"
        ],
        "buttonText": "Reservar",
        "whatsappMsg": "Hola! Me interesa Consulta asincrónica",
        "saving": ""
      }
    ]
  }
];


  contactWhatsApp(message: string) {
    const phone = '59178250459';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
