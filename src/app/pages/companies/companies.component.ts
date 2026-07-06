import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface InfoCard {
  title: string;
  description: string;
}

interface ServiceCard extends InfoCard {
  icon: string;
  iconPath: string;
}

interface DetailSection {
  title: string;
  paragraphs: string[];
  items?: string[];
}

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
  benefits = [
    'Mayor productividad y rendimiento laboral',
    'Reduccion del ausentismo',
    'Disminucion de enfermedades cronicas y costos asociados',
    'Mejora del clima laboral',
    'Mayor compromiso del personal'
  ];

  mainServices: ServiceCard[] = [
    {
      icon: 'business_center',
      iconPath: 'assets/icons/vegetable-icon (27).png',
      title: 'Nutricionista presencial para la empresa',
      description: 'Consultas presenciales de 30 minutos, planes de alimentacion personalizados y seguimientos continuos para colaboradores.'
    },
    {
      icon: 'videocam',
      iconPath: 'assets/icons/vegetable-icon (28).png',
      title: 'Nutricionista online para la empresa',
      description: 'Atencion virtual para empleados remotos mediante videollamada, con el mismo enfoque de consulta, plan y seguimiento.'
    },
    {
      icon: 'monitor_heart',
      iconPath: 'assets/icons/vegetable-icon (29).png',
      title: 'Evaluacion nutricional de colaboradores',
      description: 'Valoracion integral con mediciones antropometricas, analisis de habitos alimentarios y evaluacion de factores de riesgo.'
    },
    {
      icon: 'person',
      iconPath: 'assets/icons/vegetable-icon (30).png',
      title: 'Consultas individuales',
      description: 'Atencion personalizada segun objetivos, estado de salud, estilo de vida y requerimientos especificos de cada colaborador.'
    },
    {
      icon: 'groups',
      iconPath: 'assets/icons/vegetable-icon (31).png',
      title: 'Talleres de alimentacion saludable',
      description: 'Talleres dinamicos y participativos para promover habitos saludables, energia diaria y prevencion nutricional.'
    },
    {
      icon: 'trending_down',
      iconPath: 'assets/icons/vegetable-icon (32).png',
      title: 'Programas de perdida de peso',
      description: 'Programas estructurados con educacion nutricional, acompanamiento profesional y seguimiento continuo.'
    },
    {
      icon: 'health_and_safety',
      iconPath: 'assets/icons/vegetable-icon (33).png',
      title: 'Prevencion de enfermedades',
      description: 'Estrategias nutricionales para prevenir y controlar diabetes, hipertension, obesidad, dislipidemias y riesgo cardiovascular.'
    },
    {
      icon: 'event_available',
      iconPath: 'assets/icons/vegetable-icon (34).png',
      title: 'Ferias de salud',
      description: 'Evaluaciones nutricionales, asesoramiento profesional, actividades educativas y promocion de estilos de vida saludables.'
    },
    {
      icon: 'fact_check',
      iconPath: 'assets/icons/vegetable-icon (35).png',
      title: 'Seguimiento nutricional',
      description: 'Acompanamiento periodico para evaluar avances, reforzar habitos y ajustar recomendaciones nutricionales.'
    }
  ];

  audienceItems = [
    'Empresas e instituciones',
    'Embajadas y consulados',
    'Centros educativos y universidades',
    'Organizaciones publicas y privadas',
    'Asociaciones y grupos comunitarios'
  ];

  workshopBenefits = [
    'Mejorar los habitos alimentarios de los colaboradores',
    'Reducir el estres asociado a la alimentacion y el estilo de vida',
    'Incrementar energia, concentracion y productividad',
    'Promover una cultura de bienestar dentro de la organizacion',
    'Disminuir factores de riesgo asociados a enfermedades cronicas'
  ];

  menuServices: DetailSection[] = [
    {
      title: 'Menus para colegios, guarderias y centros educativos',
      paragraphs: [
        'Disenamos menus balanceados y adecuados para cada etapa de crecimiento, garantizando el aporte nutricional necesario para el desarrollo fisico e intelectual de ninos y adolescentes.',
        'Cumplimos criterios de calidad, variedad y seguridad alimentaria, promoviendo habitos saludables desde edades tempranas.'
      ],
      items: [
        'Creacion, revision y supervision de menus',
        'Menus equilibrados, variados y adaptados a productos locales',
        'Adaptacion a alergias, intolerancias u otras condiciones medicas',
        'Calculo nutricional y fichas tecnicas de preparacion',
        'Validacion profesional por nutricionista colegiado/a'
      ]
    },
    {
      title: 'Menus para guarderias',
      paragraphs: [
        'La primera infancia es una etapa clave para el desarrollo fisico, cognitivo y la formacion de habitos alimentarios saludables.',
        'Brindamos asesoria nutricional para guarderias y servicios de alimentacion infantil, con menus equilibrados y adaptados a cada grupo etario.'
      ],
      items: [
        'Alimentacion basal',
        'Texturas adaptadas y progresion alimentaria',
        'Introduccion de alimentos tradicional o Baby Led Weaning',
        'Alergias, intolerancias y condiciones especificas',
        'Control y seguimiento del servicio de cocina'
      ]
    },
    {
      title: 'Menus y asesoramiento para residencias',
      paragraphs: [
        'Creamos, revisamos y supervisamos planificaciones alimentarias para residencias de personas mayores, centros de dia y servicios institucionales.',
        'La alimentacion adecuada en esta etapa contribuye a prevenir y manejar enfermedades cronicas, mantener autonomia y mejorar la calidad de vida.'
      ],
      items: [
        'Alimentacion basal y texturas modificadas',
        'Disfagia, diabetes, hipertension e hipercolesterolemia',
        'Dietas vegetarianas o adaptaciones especificas',
        'Informe tecnico, calculo nutricional y fichas tecnicas',
        'Asesoramiento continuo para la mejora de calidad alimentaria'
      ]
    },
    {
      title: 'Menus empresariales',
      paragraphs: [
        'Elaboramos menus equilibrados y adaptados a las necesidades de cada empresa, garantizando variedad, calidad nutricional y aceptacion por parte de los colaboradores.',
        'Buscamos mejorar la alimentacion dentro del entorno laboral sin descuidar sabor, practicidad y viabilidad operativa.'
      ],
      items: [
        'Talleres nutricionales para colaboradores',
        'Talleres para personal de cocina',
        'Evaluaciones nutricionales individuales',
        'Elaboracion de menus institucionales',
        'Programas de bienestar corporativo'
      ]
    }
  ];

  outsourcingBenefits = [
    'Reduccion de costes',
    'Optimizacion del tiempo',
    'Acreditacion con menus equilibrados nutricionales',
    'Asesoramiento dietetico',
    'Incremento de la satisfaccion de los comensales'
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
