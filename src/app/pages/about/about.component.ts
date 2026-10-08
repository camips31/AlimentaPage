import { TEAM } from '../../data/team';
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
  mission = 'Brindar atención profesional y personalizada, promoviendo hábitos de vida saludables a través de una filosofía no restrictiva y un enfoque integral que combine el bienestar físico, mental y emocional de cada paciente.';
  
  vision = 'Ser el centro de bienestar líder en Bolivia reconocido por su excelencia, innovación y enfoque humano, contribuyendo a mejorar la calidad de vida de las personas mediante el acompañamiento nutricional continuo y la educación alimentaria consciente.';
  
  history = [
    'Somos un centro de bienestar que une nutrición, psicología y entrenamiento. Te acompañamos en La Paz, Santa Cruz y online en toda Bolivia.',
    'Creemos en una alimentación flexible, sin restricciones, para cuidar tu cuerpo, mente y emociones con hábitos sostenibles.',
    'Ofrecemos consultas individuales, programas personalizados, talleres y servicios para empresas.'
  ];

  aboutImages = ["assets/plan-nutricional-historia.png"];

  team: any[] = TEAM;

  values = [
    {
      icon: 'verified_user',
      iconPath: 'assets/icons/vegetable-icon (20).png',
      title: 'Confianza',
      description: 'Construimos relaciones basadas en la confianza y la transparencia con cada paciente.'
    },
    {
      icon: 'favorite',
      iconPath: 'assets/icons/vegetable-icon (21).png',
      title: 'Compromiso',
      description: 'Dedicados a tu bienestar y a acompañarte en cada paso de tu proceso.'
    },
    {
      icon: 'people',
      iconPath: 'assets/icons/vegetable-icon (22).png',
      title: 'Empatía',
      description: 'Comprendemos tus necesidades y te acompañamos con cercanía y calidez.'
    },
    {
      icon: 'workspace_premium',
      iconPath: 'assets/icons/vegetable-icon (23).png',
      title: 'Profesionalismo',
      description: 'Respaldo científico y experiencia en cada consulta y recomendación.'
    },
    {
      icon: 'balance',
      iconPath: 'assets/icons/vegetable-icon (24).png',
      title: 'Ética',
      description: 'Actuamos con integridad y responsabilidad en cada aspecto de nuestro trabajo.'
    },
    {
      icon: 'school',
      iconPath: 'assets/icons/vegetable-icon (25).png',
      title: 'Educación',
      description: 'Empoderamos a nuestros pacientes con conocimiento para tomar decisiones saludables.'
    },
    {
      icon: 'spa',
      iconPath: 'assets/icons/vegetable-icon (26).png',
      title: 'Bienestar Integral',
      description: 'Enfoque holístico que considera cuerpo, mente y estilo de vida.'
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
