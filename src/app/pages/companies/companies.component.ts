import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CollaboratorLogo {
  name: string;
  logo: string;
}

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent {
  selectedService = 0;
  get activeService() { return this.briefingServices[this.selectedService]; }
  selectService(value: string) { this.selectedService = Number(value); }

  briefingServices = [
  {
    "title": "Bienestar Corporativo",
    "paragraphs": [
      "Consultas, talleres y acompañamiento para tu equipo y sus familiares directos.",
      "Lo que reciben tus colaboradores:",
      "•\tAcceso a consultas de nutrición personalizada, psicología y entrenamiento físico",
      "•\tCondiciones preferentes frente a la tarifa particular",
      "•\tAtención presencial en nuestras sedes de La Paz y Santa Cruz, o virtual y asincrónica desde cualquier lugar del país",
      "•\tTalleres de bienestar: alimentación saludable, manejo del estrés, pausas activas y postura en el puesto de trabajo",
      "•\tProgramas adaptados a las necesidades de cada equipo",
      "Lo que recibe la empresa:",
      "•\tUn equipo con menos ausentismo por enfermedades prevenibles",
      "•\tReportes periódicos de uso, con datos reales para justificar la inversión en bienestar",
      "•\tUn sello de reconocimiento como empresa que invierte en el cuidado de su gente, listo para employer branding"
    ]
  },
  {
    "title": "Alianzas con Aseguradoras",
    "paragraphs": [
      "Trabajamos junto a compañías de seguros de salud para que sus asegurados accedan a nutrición y psicología dentro de su cobertura, con reportes de resultados que respaldan el valor del beneficio ante la aseguradora."
    ]
  },
  {
    "title": "Alianzas Institucionales y ONG",
    "paragraphs": [
      "Adaptamos nuestro acompañamiento nutricional y psicológico a organizaciones con una misión social, integrándonos a los programas que ya tienen en marcha en lugar de proponer algo aislado — con condiciones accesibles pensadas para la población que atienden."
    ]
  },
  {
    "title": "Red de Profesionales de la Salud",
    "paragraphs": [
      "Médicos y consultorios de distintas especialidades —pediatría, endocrinología, ginecología, traumatología, dermatología, bariatría— pueden derivar a sus pacientes a Alimenta cuando la nutrición o la psicología complementan su tratamiento, con seguimiento y coordinación entre ambos equipos."
    ]
  },
  {
    "title": "Alianzas con Centros de Pilates, Reformer y Yoga",
    "paragraphs": [
      "Colaboramos con estudios de movimiento para que sus alumnos tengan acceso a nutrición y psicología aplicada a su práctica física, con talleres conjuntos —virtuales o presenciales— sobre alimentación y movimiento."
    ]
  },
  {
    "title": "Alianzas con Farmacias",
    "paragraphs": [
      "Acompañamos a cadenas de farmacias para que sus clientes reciban orientación nutricional y psicológica real —incluyendo un programa de acompañamiento responsable para tratamientos de control de peso—, con capacitación a su personal y presencia en sucursal."
    ]
  },
  {
    "title": "Charlas de Nutrición en Empresas",
    "paragraphs": [
      "Llevamos una charla de nutrición puntual a tu empresa, sin necesidad de un convenio de bienestar completo — ideal como primer acercamiento o como actividad para una fecha específica (aniversario de la empresa, semana de la salud, cierre de año)."
    ]
  },
  {
    "title": "Tercerización de Menús para Guarderías",
    "paragraphs": [
      "Diseñamos y supervisamos los menús de tu guardería con respaldo nutricional profesional, sin que la institución necesite contratar a un nutricionista en planilla — con revisión y actualización periódica según la edad y las necesidades de los niños."
    ]
  },
  {
    "title": "Tercerización de Menús para Residencias",
    "paragraphs": [
      "El mismo acompañamiento profesional, adaptado a residencias de adultos mayores: menús supervisados que consideran patologías frecuentes como diabetes, hipertensión o dificultades de masticación, con ajustes periódicos según las necesidades de cada residente."
    ]
  },
  {
    "title": "Presencia en Medios — Vocería Experta en Nutrición",
    "paragraphs": [
      "Nuestras nutricionistas participan como invitadas en programas de radio y televisión, y como autoras de artículos de nutrición para revistas — llevando el nombre de Alimenta como referencia experta en medios de comunicación."
    ]
  }
];

  benefitIcons = ['trending_up', 'event_available', 'health_and_safety', 'sentiment_satisfied_alt', 'groups'];

  benefits = [
    'Mayor productividad y rendimiento laboral',
    'Reducción del ausentismo',
    'Disminución de enfermedades crónicas y costos asociados',
    'Mejora del clima laboral',
    'Mayor compromiso del personal'
  ];

  internshipPhotos = [
    'assets/pasantias/Image 2026-06-24 at 20.50.26.jpeg',
    'assets/pasantias/Image 2026-06-26 at 11.10.27.jpeg',
    'assets/pasantias/IMG_20260624_125057.jpg.jpeg',
    'assets/pasantias/IMG_20260624_125159.jpg.jpeg',
    'assets/pasantias/IMG_20260624_125638.jpg.jpeg',
    'assets/pasantias/IMG_20260624_125902.jpg.jpeg',
    'assets/pasantias/IMG_20260624_125920.jpg.jpeg',
    'assets/pasantias/IMG_20260624_125958.jpg.jpeg',
    'assets/pasantias/IMG_20260624_130125.jpg.jpeg'
  ];

  collaborators: CollaboratorLogo[] = [
    {
      name: 'Bisa Seguros',
      logo: 'assets/empresas/bisa.jpg'
    },
    {
      name: 'COBEE',
      logo: 'assets/empresas/coobee.jpg'
    },
    {
      name: 'Bolsa Boliviana de Valores',
      logo: 'assets/empresas/Bolsa_Boliviana_de_Valores_logo.svg.webp'
    },
    {
      name: 'Univalle',
      logo: 'assets/empresas/univalle-bolivia-2022-logo-png_seeklogo-443102.png'
    },
    {
      name: 'UMSA',
      logo: 'assets/empresas/Logo_Umsa.png'
    },
    {
      name: 'Sweet Fit',
      logo: 'assets/empresas/sweet-fit.jpg'
    },
    {
      name: 'Bolivia TV',
      logo: 'assets/empresas/bolivia.TV.jpg'
    },
    {
      name: 'Pulso de la Tarde',
      logo: 'assets/empresas/pulso.jpg'
    },
    {
      name: 'Canal PTV',
      logo: 'assets/empresas/ptv.jpg'
    },
    {
      name: 'Embajada Britanica',
      logo: 'assets/empresas/embaja.britanica.jpg'
    }
  ];

  contactWhatsApp(subject = 'planes y servicios para empresas') {
    const phone = '59177731818';
    const message = `Hola! Quiero mas informacion sobre ${subject}.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  }
}
