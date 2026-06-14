import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      id: 1,
      title: 'Nutrición Clínica del Adulto',
      icon: 'local_hospital',
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

  companies = [
    {
      name: 'Empresa 1',
      logo: 'assets/images/companies/company1.png'
    },
    {
      name: 'Empresa 2',
      logo: 'assets/images/companies/company2.png'
    },
    {
      name: 'Empresa 3',
      logo: 'assets/images/companies/company3.png'
    },
    {
      name: 'Empresa 4',
      logo: 'assets/images/companies/company4.png'
    }
  ];

  contactWhatsApp(message: string) {
    const phone = '59177731818';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
