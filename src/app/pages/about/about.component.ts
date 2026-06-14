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
  
  description = 'Alimenta es un centro de asesoramiento nutricional personalizado que ofrece atención integral a través de un equipo de profesionales especializados en distintas áreas de la nutrición. Con presencia en La Paz y Santa Cruz.  Alimenta brinda consultas individuales, planes alimentarios personalizados y talleres de educación nutricional. Nuestra filosofía se basa en una alimentación flexible y no restrictiva, que alimenta el cuerpo, la mente y las emociones.';

  team = [
    {
      name: 'Lic. Alba Yesenia Condori Quispe',
      specialty: 'Nutrición Pediátrica y Materno Infantil',
      credential: 'C - 8461858',
      city: 'La Paz',
      image: 'assets/images/team/alba.jpg',
      description: 'Nutricionista comprometida con brindar una atención cercana, personalizada y libre de restricciones innecesarias. Creo firmemente que la alimentación no debe ser un castigo, sino una herramienta para mejorar tu bienestar y calidad de vida. Por ello, mi enfoque integra la educación nutricional, ayudándote a entender cómo y por qué alimentarte mejor, para lograr resultados sostenibles a largo plazo y construir una relación saludable con la comida.'
    },
    {
      name: 'Lic. María René Nuñez Menacho',
      specialty: 'Nutrición Pediátrica y Materno Infantil',
      credential: 'N – 9664083',
      city: 'Santa Cruz',
      image: 'assets/images/team/maria.jpg',
      description: 'Soy nutricionista dietista enfocada en el diseño de planes de alimentación personalizados y el acompañamiento integral de pacientes. Me enfoco en promover la salud a través de la construcción de hábitos sostenibles, con la empatía para guiar a las personas hacia una mejor calidad de vida.'
    },
    {
      name: 'Lic. Ariani Santistevan Alpire',
      specialty: 'Nutrición en Recomposición Corporal',
      credential: 'S – 7709260',
      city: 'Santa Cruz',
      image: 'assets/images/team/ariani.jpg',
      description: 'Soy Licenciada en Nutrición y Dietética con formación clínica y hospitalaria. Creo que una buena nutrición va mucho más allá de entregar un plan alimentario. Me gusta conocer a cada paciente, entender sus hábitos, necesidades, posibilidades y objetivos para construir estrategias que realmente se adapten a su vida. Disfruto crear una relación cercana y de confianza, acompañando cada proceso de manera personalizada. Mi mayor interés está en la nutrición clínica, especialmente en el área endocrinológica y metabólica, donde la alimentación puede generar un impacto significativo en la salud y calidad de vida.'
    },
    {
      name: 'Lic. Katherine Paz Villarroel',
      specialty: 'Nutrición en Recomposición Corporal',
      credential: 'C - 6094050',
      city: 'La Paz',
      image: 'assets/images/team/katherine.jpg',
      description: 'Como nutricionista deportiva, me apasiona todo lo que es el esfuerzo y el deleite deportivo, la pasión de llegar más lejos y por supuesto, comprendo las necesidades nutricionales y emocionales que conlleva. Confío que un plan nutricional bien estructurado y adaptado a tus requerimientos, ayuda mucho a tu recuperación y máximo rendimiento físico y mental.'
    },
    {
      name: 'Lic. Valeria Isabel Carrillo Sainz',
      specialty: 'Nutrición Deportiva',
      credential: 'C - 6144191',
      city: 'La Paz',
      image: 'assets/images/team/valeria.jpg',
      description: 'Especialista en nutrición deportiva, apasionada por ayudar a deportistas y personas activas a alcanzar su máximo rendimiento a través de la alimentación adecuada.'
    },
    {
      name: 'Lic. Mariel Llaguno Gómez',
      specialty: 'Nutrición en Recomposición Corporal y Bariatría',
      credential: 'C - 6148826',
      city: 'La Paz',
      image: 'assets/images/team/mariel.jpg',
      description: 'Licenciada Nutricionista, con más de 3 años de experiencia en consulta del área clínica. Actualmente con un enfoque anti-dietas centrada en la medicina del estilo de vida (MEV) y en la salud hormonal femenina, brindando acompañamiento en las diferentes etapas de la vida de la mujer.'
    },
    {
      name: 'Lic. Lucía Pinell',
      specialty: 'Psicología Cognitivo Conductual',
      image: 'assets/images/team/lucia.jpg',
      description: 'Psicóloga especializada en terapia cognitivo conductual, trabajando en equipo para el bienestar integral de nuestros pacientes.'
    },
    {
      name: 'Cecilia Monterrey',
      specialty: 'Área de Entrenamiento',
      image: 'assets/images/team/cecilia.jpg',
      description: 'Especialista en entrenamiento físico, complementando el enfoque integral de salud y bienestar.'
    }
  ];

  values = [
    {
      icon: 'verified_user',
      title: 'Confianza',
      description: 'Construimos relaciones basadas en la confianza y la transparencia con cada paciente'
    },
    {
      icon: 'favorite',
      title: 'Compromiso',
      description: 'Dedicados a tu bienestar y a acompañarte en cada paso de tu proceso'
    },
    {
      icon: 'people',
      title: 'Empatía',
      description: 'Comprendemos tus necesidades y te acompañamos con cercanía y calidez'
    },
    {
      icon: 'workspace_premium',
      title: 'Profesionalismo',
      description: 'Respaldo científico y experiencia en cada consulta y recomendación'
    },
    {
      icon: 'balance',
      title: 'Ética',
      description: 'Actuamos con integridad y responsabilidad en cada aspecto de nuestro trabajo'
    },
    {
      icon: 'school',
      title: 'Educación',
      description: 'Empoderamos a nuestros pacientes con conocimiento para decisiones saludables'
    },
    {
      icon: 'spa',
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
