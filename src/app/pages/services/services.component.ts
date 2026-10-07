import { inject } from '@angular/core';
import { WhatsappService } from '../../shared/whatsapp-selector/whatsapp.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  readonly whatsapp = inject(WhatsappService);
  serviceVisuals = [
    { image: 'assets/services/clinica.png', summary: 'Cuida tu salud con acompañamiento especializado.' },
    { image: 'assets/services/etapas.png', summary: 'Nutrición para crecer y vivir cada etapa con bienestar.' },
    { image: 'assets/services/deportiva.png', summary: 'Alimenta tu energía y disfruta de tu rendimiento.' },
    { image: 'assets/services/recomposicion.png', summary: 'Avanza hacia tus objetivos con hábitos sostenibles.' }
  ];
  careSteps = [
    { icon: 'assignment', title: 'Evaluación', description: 'Conocemos tu salud, tus hábitos y tus objetivos.' },
    { icon: 'restaurant', title: 'Plan personalizado', description: 'Una alimentación adaptada a tus gustos y necesidades.' },
    { icon: 'groups', title: 'Talleres', description: 'Aprende herramientas prácticas, presencial u online.' },
    { icon: 'favorite_border', title: 'Seguimiento', description: 'Te acompañamos y ajustamos tu plan en el camino.' }
  ];
  serviceHighlights = [
    'Evaluación nutricional individual',
    'Planes alimentarios personalizados',
    'Talleres presenciales y virtuales',
    'Seguimiento nutricional continuo',
    'Colaboración con médicos especialistas',
    'Colaboración con gimnasios y centros deportivos',
    'Colaboración con diferentes empresas en el país',
    'Participación como proveedores de redes de seguros de salud'
  ];

  audienceGroups = [
    {
      title: 'Nutrición Clínica',
      description: 'Para personas que presentan condiciones clínicas o metabólicas y requieren atención nutricional especializada.',
      listTitle: 'Especialidades',
      items: [
        'Diabetes',
        'Obesidad',
        'Hipertensión arterial',
        'Nutrición clínica del adulto',
        'Cirugía bariátrica',
        'Salud hormonal femenina'
      ]
    },
    {
      title: 'Nutrición en las Etapas de la Vida',
      description: 'Para familias que buscan acompañamiento nutricional en cada etapa del desarrollo.',
      listTitle: 'Especialidades',
      items: [
        'Nutrición pediátrica',
        'Nutrición en la adolescencia',
        'Nutrición materno infantil'
      ]
    },
    {
      title: 'Nutrición Deportiva y Rendimiento',
      description: 'Para personas activas, deportistas amateurs y deportistas de alto rendimiento.',
      listTitle: 'Especialidades',
      items: [
        'Nutrición deportiva',
        'Rendimiento físico',
        'Recomposición corporal',
        'Optimización de la composición corporal'
      ]
    },
    {
      title: 'Nutrición en Recomposición Corporal',
      description: 'Para personas que buscan acompañamiento nutricional para mejorar la composición corporal.',
      listTitle: 'Objetivos',
      items: [
        'Pérdida de peso',
        'Pérdida de grasa corporal',
        'Incremento de masa muscular',
        'Acompañamiento pre y post cirugía bariátrica'
      ]
    }
  ];

  services = [
    {
      id: 1,
      title: 'Nutrición Clínica del Adulto',
      icon: 'local_hospital',
      iconPath: 'assets/icons/vegetable-icon (10).png',
      description: 'Manejo nutricional especializado para pacientes con condiciones clínicas y/o metabólicas.',
      targetAudience: 'Pacientes con diabetes, obesidad, hipertensión y otras condiciones de salud',
      benefits: [
        'Evaluación nutricional completa',
        'Plan alimentario terapéutico personalizado',
        'Seguimiento y ajustes continuos',
        'Coordinación con médicos tratantes'
      ],
      duration: 'Según necesidades individuales',
      whatsappMsg: 'Hola! Me interesa el servicio de Nutrición Clínica del Adulto'
    },
    {
      id: 2,
      title: 'Cirugía Bariátrica',
      icon: 'medical_services',
      iconPath: 'assets/icons/vegetable-icon (11).png',
      description: 'Acompañamiento nutricional pre y post cirugía bariátrica para resultados óptimos.',
      targetAudience: 'Pacientes candidatos o que ya pasaron por cirugía bariátrica',
      benefits: [
        'Preparación preoperatoria',
        'Acompañamiento post-quirúrgico',
        'Planes de alimentación progresivos',
        'Prevención de complicaciones'
      ],
      duration: 'Seguimiento continuo',
      whatsappMsg: 'Hola! Me interesa el servicio de Nutrición para Cirugía Bariátrica'
    },
    {
      id: 3,
      title: 'Salud Hormonal Femenina',
      icon: 'favorite',
      iconPath: 'assets/icons/vegetable-icon (12).png',
      description: 'Enfoque en medicina del estilo de vida (MEV) para salud hormonal en diferentes etapas de la mujer.',
      targetAudience: 'Mujeres que buscan equilibrio hormonal y bienestar integral',
      benefits: [
        'Evaluación hormonal nutricional',
        'Plan alimentario para equilibrio hormonal',
        'Acompañamiento en diferentes etapas',
        'Enfoque anti-dietas'
      ],
      duration: 'Mínimo 3 meses',
      whatsappMsg: 'Hola! Me interesa el servicio de Salud Hormonal Femenina'
    },
    {
      id: 4,
      title: 'Nutrición Pediátrica',
      icon: 'child_care',
      iconPath: 'assets/icons/vegetable-icon (13).png',
      description: 'Asesoría nutricional para el crecimiento y desarrollo saludable de los niños.',
      targetAudience: 'Padres de familia que buscan una mejor alimentación para sus hijos',
      benefits: [
        'Evaluación del crecimiento y desarrollo',
        'Planes alimentarios adaptados a la edad',
        'Educación nutricional para padres',
        'Manejo de selectividad alimentaria'
      ],
      duration: 'Según necesidades del niño',
      whatsappMsg: 'Hola! Me interesa el servicio de Nutrición Pediátrica'
    },
    {
      id: 5,
      title: 'Nutrición en la Adolescencia',
      icon: 'school',
      iconPath: 'assets/icons/vegetable-icon (14).png',
      description: 'Orientación nutricional especializada para adolescentes en etapa de crecimiento.',
      targetAudience: 'Adolescentes y sus familias',
      benefits: [
        'Atención personalizada para adolescentes',
        'Construcción de hábitos saludables',
        'Educación nutricional',
        'Prevención de trastornos alimentarios'
      ],
      duration: 'Mínimo 2 meses',
      whatsappMsg: 'Hola! Me interesa el servicio de Nutrición en la Adolescencia'
    },
    {
      id: 6,
      title: 'Nutrición Materno Infantil',
      icon: 'pregnant_woman',
      iconPath: 'assets/icons/vegetable-icon (15).png',
      description: 'Acompañamiento nutricional durante el embarazo, lactancia y primeros años del bebé.',
      targetAudience: 'Mujeres embarazadas, en lactancia y madres de bebés',
      benefits: [
        'Nutrición durante el embarazo',
        'Apoyo en la lactancia materna',
        'Introducción de alimentación complementaria',
        'Baby Led Weaning (BLW)'
      ],
      duration: 'Según etapa',
      whatsappMsg: 'Hola! Me interesa el servicio de Nutrición Materno Infantil'
    },
    {
      id: 7,
      title: 'Nutrición Deportiva',
      icon: 'sports_soccer',
      iconPath: 'assets/icons/vegetable-icon (16).png',
      description: 'Optimiza tu rendimiento deportivo con planes nutricionales especializados.',
      targetAudience: 'Deportistas amateurs y de alto rendimiento',
      benefits: [
        'Evaluación de composición corporal',
        'Plan de alimentación deportiva',
        'Periodización nutricional',
        'Estrategias de suplementación'
      ],
      duration: 'Mínimo 3 meses',
      whatsappMsg: 'Hola! Me interesa el servicio de Nutrición Deportiva'
    },
    {
      id: 8,
      title: 'Nutrición para Rendimiento Físico',
      icon: 'fitness_center',
      iconPath: 'assets/icons/vegetable-icon (17).png',
      description: 'Planes alimentarios para personas activas que buscan mejorar su rendimiento.',
      targetAudience: 'Personas activas que entrenan regularmente',
      benefits: [
        'Plan personalizado según actividad física',
        'Optimización de la composición corporal',
        'Mejora del rendimiento físico',
        'Recuperación post-entrenamiento'
      ],
      duration: 'Mínimo 2 meses',
      whatsappMsg: 'Hola! Me interesa el servicio de Nutrición para Rendimiento Físico'
    },
    {
      id: 9,
      title: 'Recomposición Corporal',
      icon: 'monitor_weight',
      iconPath: 'assets/icons/vegetable-icon (18).png',
      description: 'Alcanza tu composición corporal ideal de forma sostenible y saludable.',
      targetAudience: 'Personas que buscan mejorar su composición corporal',
      benefits: [
        'Plan personalizado sin restricciones',
        'Evaluación de composición corporal',
        'Modificación de hábitos sostenibles',
        'Seguimiento continuo'
      ],
      duration: 'Según objetivos (mínimo 3 meses)',
      whatsappMsg: 'Hola! Me interesa el servicio de Recomposición Corporal'
    },
    {
      id: 10,
      title: 'Talleres y Educación Nutricional',
      icon: 'menu_book',
      iconPath: 'assets/icons/vegetable-icon (19).png',
      description: 'Talleres presenciales y virtuales de educación alimentaria para grupos y empresas.',
      targetAudience: 'Empresas, grupos y comunidades',
      benefits: [
        'Talleres personalizados según grupo',
        'Modalidad presencial y virtual',
        'Temas variados de nutrición',
        'Material educativo incluido'
      ],
      duration: 'Según programación',
      whatsappMsg: 'Hola! Me interesa información sobre los Talleres y Educación Nutricional'
    }
  ];

  contactWhatsApp(message: string) {
    this.whatsapp.open(message);
  }
}
