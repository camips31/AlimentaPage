import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  mission = 'Brindar atención nutricional profesional y personalizada, promoviendo hábitos de vida saludables a través de una filosofía no restrictiva y un enfoque integral que combine el bienestar físico, mental y emocional de cada paciente.';
  
  vision = 'Ser el centro de nutrición líder en Bolivia reconocido por su excelencia, innovación y enfoque humano, contribuyendo a mejorar la calidad de vida de las personas mediante el acompañamiento nutricional continuo y la educación alimentaria consciente.';
  
  history = [
    'Alimenta es un centro de asesoramiento nutricional personalizado que ofrece atención integral a través de un equipo de profesionales especializados en distintas áreas de la nutrición.',
    'Con presencia en las ciudades La Paz y Santa Cruz, brindamos consultas individuales, programas nutricionales personalizados, talleres educativos y servicios corporativos enfocados en la promoción de hábitos saludables.',
    'Nuestra filosofía se basa en una alimentación flexible y no restrictiva que alimenta el cuerpo, la mente y las emociones, ayudando a las personas a construir una relación saludable y sostenible con la alimentación.'
  ];

  aboutImages = [
    'assets/espacios/Image 2026-06-24 at 20.54.40 (1).jpeg',
    'assets/espacios/Image 2026-06-24 at 20.53.45.jpeg',
    'assets/espacios/Image 2026-06-24 at 20.54.40.jpeg',
    'assets/espacios/Image 2026-06-24 at 20.58.16.jpeg',
    'assets/espacios/Image 2026-06-24 at 20.58.19.jpeg',
    'assets/espacios/Image 2026-06-24 at 20.58.21.jpeg',
    'assets/espacios/Image 2026-06-24 at 21.05.31.jpeg',
    'assets/espacios/Image 2026-06-24 at 21.05.32.jpeg',
    'assets/espacios/Image 2026-06-24 at 21.05.33.jpeg'
  ];

  team: any[] = [
    {
      name: 'Lic. Alba Yesenia Condori Quispe',
      specialty: 'Nutrición Pediátrica y Materno Infantil',
      credential: 'C - 8461858',
      city: 'La Paz',
      id: 'alba-condori',
      image: 'assets/Profiles/normalized/Alba.png',
      description: 'Soy Licenciada en Nutrición y Dietética, especializada en nutrición clínica y pediátrica. Acompaño a niños, adolescentes, adultos y familias mediante una atención personalizada, diseñando estrategias que se ajusten a cada etapa de la vida, objetivos de salud y condiciones médicas.',
      education: [
        'Licenciatura en Nutrición y Dietética - Universidad Mayor de San Andrés (UMSA).',
        'Diplomado en Educación Superior - CEPIES.',
        'Diplomado en Nutrición Pediátrica - INED.',
        'Certificación Internacional ISAK Nivel 2 - Perfil Completo.'
      ],
      specializations: [
        'Nutrición clínica en adultos',
        'Nutrición pediátrica',
        'Recomposición corporal',
        'Educación alimentaria y cambio de hábitos',
        'Evaluación antropométrica completa (ISAK)'
      ],
      philosophy: 'Creo que una alimentación saludable no debe sentirse como una dieta restrictiva ni convertirse en una carga. La comida forma parte de nuestra vida cotidiana y también debe disfrutarse. Mi objetivo es ayudarte a desarrollar hábitos que puedas mantener a largo plazo, con un plan de alimentación personalizado que se adapte a tu realidad, tus gustos y tus necesidades. Porque cada persona es única, cada tratamiento nutricional también debe serlo.'
    },
    {
      name: 'Lic. María René Nuñez Menacho',
      specialty: 'Nutrición Pediátrica y Materno Infantil',
      credential: 'N - 9664083',
      city: 'Santa Cruz',
      id: 'maria-rene-nunez',
      image: 'assets/Profiles/normalized/Rene.png',
      description: 'Licenciada en Nutrición y Dietética, especializada en nutrición clínica para patologías crónicas, educación superior y marketing aplicado a la salud.',
      education: [
        'Licenciatura en Nutrición y Dietética - Universidad Nacional Ecológica.',
        'Diplomado en Educación Superior y Tecnología Educativa - Universidad Tecnológica Privada de Santa Cruz - UTEPSA.',
        'Antropometría ISAK Nivel 1 - Certificaciones.',
        'Taller teórico Parto Humanizado y Lactancia Materna - Universidad Nacional Ecológica.',
        'Seminario de actualización en Nutrición: tratamiento nutricional en litiasis renal, screening cardiometabólico en nutrición y tratamiento nutricional en obesidad infantil.',
        '1er Congreso Internacional de Trastornos de la Conducta Alimentaria - Federación Nacional de Nutrición y Ciencia, Universidad Autónoma del Estado de Morelos, Facultad de Ciencias del Deporte.',
        'Psiconutrición en Trastorno del Espectro Autista y TDAH - Gesyp Gabinete Espacio Salud y Psicoterapia.'
      ],
      specializations: [
        'Nutrición clínica',
        'Nutrición materno-infantil',
        'Psiconutrición',
        'Dieta cetogénica',
        'Microbiota',
        'Antropometría'
      ],
      philosophy: 'Nutricionista dietista enfocada en el diseño de planes de alimentación personalizados y el acompañamiento integral de pacientes. Me enfoco en promover la salud a través de la construcción de hábitos sostenibles, con la empatía para guiar a las personas hacia una mejor calidad de vida.'
    },
    {
      name: 'Lic. Katherine Paz Villarroel',
      specialty: 'Nutrición en Recomposición Corporal',
      credential: 'P - 6094050',
      city: 'La Paz',
      id: 'katherine-paz',
      image: 'assets/Profiles/normalized/Katherine.png'
    },
    {
      name: 'Lic. Ariani Santistevan Alpire',
      specialty: 'Nutrición en Recomposición Corporal',
      credential: 'S - 7709260',
      city: 'Santa Cruz',
      id: 'ariani-santistevan',
      image: 'assets/Profiles/normalized/Ariani.png',
      description: 'Licenciada en Nutrición y Dietética con experiencia en el acompañamiento nutricional de pacientes que buscan mejorar su salud y calidad de vida mediante estrategias personalizadas, educación alimentaria y un enfoque basado en evidencia científica, adaptado a las necesidades individuales de cada persona.',
      education: [
        'Licenciatura en Nutrición y Dietética - Universidad Evangélica Boliviana.',
        'Seminario de Soporte Nutricional en Pacientes Críticamente Enfermos - Hospital San Juan de Dios.',
        'Capacitación en Nutrición Hospitalaria.',
        'Formación en Eje Cerebro-Intestino-Microbiota - Cultivarte.',
        'Actualización en Nutrición en Cirrosis Hepática.',
        'Actualización en Intervención Nutricional en Artritis Reumatoidea y Artrosis.',
        'Formación en Nutrición Ginecológica - CEPIC.',
        'Formación en Nutrición Antiinflamatoria.',
        'Inglés nivel C1 - Universidad UTEPSA.'
      ],
      specializations: [
        'Nutrición clínica del adulto',
        'Nutrición endocrinológica',
        'Nutrición femenina',
        'Nutrición antiinflamatoria',
        'Educación alimentaria y cambio de hábitos',
        'Prevención y manejo nutricional de enfermedades crónicas'
      ],
      philosophy: 'Creo que una alimentación saludable debe adaptarse a la vida de las personas y no al revés. Mi objetivo es acompañar a cada paciente en la construcción de hábitos sostenibles que le permitan mejorar su salud, bienestar y calidad de vida mediante estrategias prácticas, personalizadas y respaldadas por evidencia científica.'
    },
    {
      name: 'Lic. Carrillo Sainz Valeria Isabel',
      specialty: 'Nutrición Clínica y Deportiva',
      credential: 'C - 6144191',
      city: 'La Paz',
      id: 'valeria-carrillo',
      image: '',
      description: 'Licenciada en Nutrición y Dietética con amplia experiencia en el acompañamiento nutricional de pacientes que buscan mejorar su salud, composición corporal y rendimiento físico mediante estrategias basadas en evidencia científica y adaptadas a sus necesidades individuales.',
      education: [
        'Licenciatura en Nutrición y Dietética - Universidad Mayor de San Andrés.',
        'Diplomado en Nutrición Clínica y Metabolismo - Universidad Mayor de San Andrés.',
        'Diplomado en Nutrición Deportiva - Universidad Mayor de San Andrés.',
        'Certificación Internacional ISAK Nivel 1 en Cineantropometría - Universidad Mayor de San Andrés.',
        'Formación en Medicina del Estilo de Vida - Universidad Mayor de San Andrés.',
        'Curso de Actualización en Obesidad y Salud Metabólica - Universidad Mayor de San Andrés.'
      ],
      specializations: [
        'Pérdida de grasa y recomposición corporal',
        'Nutrición clínica del adulto',
        'Salud metabólica',
        'Nutrición deportiva',
        'Educación alimentaria',
        'Cambio de hábitos y adherencia nutricional'
      ],
      philosophy: 'Creo que una alimentación saludable debe adaptarse a la vida de las personas y no al revés. Mi objetivo es acompañar a cada paciente para que logre resultados sostenibles, mejorando no solo su alimentación, sino también su bienestar físico y emocional.'
    },
    {
      name: 'Lic. Llaguno Gómez Mariel',
      specialty: 'Nutrición en Recomposición Corporal y Bariatría',
      credential: 'LL - 6148826',
      city: 'La Paz',
      id: 'mariel-llaguno',
      image: 'assets/Profiles/normalized/Mariel.png',
      description: 'Licenciada en Nutrición y Dietética con más de 7 años de experiencia en el área clínica y educativa. Especializada en evaluación nutricional integral, diseño de planes alimentarios personalizados, atención presencial y online, docencia universitaria, gestión de servicios de alimentación y divulgación científica.',
      education: [
        'Licenciatura en Nutrición y Dietética, 2015-2019, La Paz, Bolivia - Universidad Mayor de San Andrés (UMSA).',
        'Diplomado en Endocrinología Ginecológica, en curso - Nutriinfo Argentina.',
        'Nutrición y Obesidad: Control de Sobrepeso, 2020, La Paz, Bolivia - Universidad Nacional Autónoma de México (UNAM), curso online.',
        'Nutrición deportiva, 2020, La Paz, Bolivia - G-SE Online Education Center, Buenos Aires, Argentina.',
        'Antropometrista ISAK Nivel I, 2017, La Paz, Bolivia - International Society for the Advancement of Kinanthropometry.'
      ],
      specializations: [
        'Salud hormonal femenina',
        'Cirugía bariátrica',
        'Recomposición corporal',
        'Nutrición clínica del adulto'
      ],
      philosophy: 'Actualmente trabajo con un enfoque anti-dietas centrado en la medicina del estilo de vida (MEV) y en la salud hormonal femenina, brindando acompañamiento en las diferentes etapas de la vida de la mujer.'
    },
    {
      name: 'Lic. Lucía Pinell',
      specialty: 'Psicología Cognitivo Conductual',
      city: 'La Paz',
      id: 'lucia-pinell',
      image: 'assets/Profiles/normalized/Lucia.png',
      description: 'Soy Licenciada en Psicología con enfoque cognitivo-conductual, especializada en terapias breves basadas en evidencia. Acompaño a adolescentes y adultos en el abordaje de trastornos de la conducta alimentaria, ansiedad y depresión, mediante procesos terapéuticos individuales y familiares orientados a promover el bienestar emocional y mejorar la calidad de vida.',
      education: [
        'Licenciatura en Psicología - Universidad Católica Boliviana "San Pablo".',
        'Certificación en Neuropsicología Clínica: Evaluación con herramientas de screening - Universidad Católica Boliviana "San Pablo".',
        'Maestrante en Psicología Clínica - Universidad Andina Simón Bolívar, sede Sucre.'
      ],
      specializations: [
        'Terapia individual para trastornos de la conducta alimentaria, ansiedad y depresión',
        'Terapia familiar orientada al acompañamiento y manejo de trastornos de la conducta alimentaria'
      ],
      philosophy: 'Creo que la salud mental es la base para construir una vida plena. La forma en que pensamos, sentimos y actuamos influye directamente en nuestro bienestar, nuestras relaciones y nuestra capacidad para alcanzar nuestras metas. Mi compromiso es brindarte un espacio seguro, de escucha y acompañamiento, donde juntos podamos desarrollar las herramientas necesarias para afrontar los desafíos de la vida y generar cambios duraderos.'
    },
    {
      name: 'Cecilia Monterrey',
      specialty: 'Área de Entrenamiento',
      city: 'La Paz',
      id: 'cecilia-monterrey',
      image: 'assets/Profiles/normalized/Cecilia.png',
      description: 'Entrenadora personal certificada con experiencia en entrenamiento de fuerza, recomposición corporal y promoción de hábitos saludables. Mi enfoque se basa en la prescripción individualizada del ejercicio, adaptando cada programa a las necesidades, objetivos y condición física de cada persona para lograr resultados seguros y sostenibles. Cuento con formación especializada en salud femenina, lo que me permite abordar las particularidades del entrenamiento y la nutrición de la mujer en las diferentes etapas de la vida, sin perder de vista un enfoque integral orientado a la salud y el bienestar de todas las personas.',
      education: [
        'Certificación como Personal Trainer - FEBOFI (2017).',
        'Certificación como Bodybuilding and Fitness Trainer - Academia Olympia (2021).',
        'Certificación especializada en Nutrición, Entrenamiento y Farmacología de la Mujer - CICÉ.'
      ],
      specializations: [
        'Entrenamiento de fuerza',
        'Recomposición corporal',
        'Pérdida de grasa y desarrollo de masa muscular',
        'Entrenamiento para la salud y el bienestar',
        'Salud femenina y entrenamiento en las diferentes etapas de la vida',
        'Educación en hábitos saludables y adherencia al ejercicio',
        'Prescripción individualizada del ejercicio'
      ],
      achievements: [
        'Campeona Absoluta FEBOFI a nivel Municipal y Departamental, categoría Bikini (2021).',
        'Campeona Novice Wellness NPC (2024).'
      ],
      philosophy: 'Creo que el ejercicio es una herramienta fundamental para mejorar la salud, prevenir enfermedades y aumentar la calidad de vida. Mi objetivo es acompañar a cada persona mediante programas de entrenamiento personalizados, seguros y adaptados a sus necesidades, fomentando hábitos sostenibles que contribuyan a su bienestar físico y mental.'
    }
  ];

  values = [
    {
      icon: 'verified_user',
      iconPath: 'assets/icons/vegetable-icon (20).png',
      title: 'Confianza',
      description: 'Construimos relaciones basadas en la confianza y la transparencia con cada paciente'
    },
    {
      icon: 'favorite',
      iconPath: 'assets/icons/vegetable-icon (21).png',
      title: 'Compromiso',
      description: 'Dedicados a tu bienestar y a acompañarte en cada paso de tu proceso'
    },
    {
      icon: 'people',
      iconPath: 'assets/icons/vegetable-icon (22).png',
      title: 'Empatía',
      description: 'Comprendemos tus necesidades y te acompañamos con cercanía y calidez'
    },
    {
      icon: 'workspace_premium',
      iconPath: 'assets/icons/vegetable-icon (23).png',
      title: 'Profesionalismo',
      description: 'Respaldo científico y experiencia en cada consulta y recomendación'
    },
    {
      icon: 'balance',
      iconPath: 'assets/icons/vegetable-icon (24).png',
      title: 'Ética',
      description: 'Actuamos con integridad y responsabilidad en cada aspecto de nuestro trabajo'
    },
    {
      icon: 'school',
      iconPath: 'assets/icons/vegetable-icon (25).png',
      title: 'Educación',
      description: 'Empoderamos a nuestros pacientes con conocimiento para decisiones saludables'
    },
    {
      icon: 'spa',
      iconPath: 'assets/icons/vegetable-icon (26).png',
      title: 'Bienestar Integral',
      description: 'Enfoque holístico que considera cuerpo, mente y estilo de vida'
    }
  ];

  milestones = [
    { year: '2018', event: 'Fundación de Alimenta' },
    { year: '2019', event: 'Expansión del equipo multidisciplinario' },
    { year: '2021', event: 'Implementación de atención online' },
    { year: '2023', event: 'Más de 1000 pacientes atendidos' },
    { year: '2025', event: 'Programa de nutrición corporativa' }
  ];
}
