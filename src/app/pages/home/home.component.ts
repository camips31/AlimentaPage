import { TEAM } from '../../data/team';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  whatsappLink = 'https://wa.me/59177731818?text=Hola%2C%20quiero%20agendar%20una%20consulta';

  panelColors = ['#d8ecf7', '#f0dfcf', '#f7efe7', '#cfe2dc', '#e2d7df'];

  processSteps = [
    { title: 'Evaluación Inicial', description: 'Profunda comprensión de tu historial médico, hábitos y objetivos.' },
    { title: 'Plan Personalizado', description: 'Diseño de un programa único que integra nutrición, psicología y ejercicio.' },
    { title: 'Seguimiento Continuo', description: 'Consultas regulares para ajustar el plan y celebrar logros.' },
    { title: 'Autonomía de Salud', description: 'Empoderamiento con conocimientos para mantener tu bienestar a largo plazo.' }
  ];

  services = [
    {
      icon: 'local_hospital',
      iconPath: 'assets/icons/vegetable-icon (1).png',
      title: 'Nutrición Clínica',
      description: 'Nutrición clínica del adulto, cirugía bariátrica y salud hormonal femenina'
    },
    {
      icon: 'child_care',
      iconPath: 'assets/icons/vegetable-icon (2).png',
      title: 'Nutrición en Etapas de la Vida',
      description: 'Nutrición pediátrica, adolescencia y materno infantil'
    },
    {
      icon: 'fitness_center',
      iconPath: 'assets/icons/vegetable-icon (3).png',
      title: 'Nutrición Deportiva y Rendimiento',
      description: 'Nutrición deportiva y planes para rendimiento físico'
    },
    {
      icon: 'restaurant',
      iconPath: 'assets/icons/vegetable-icon (4).png',
      title: 'Evaluación Nutricional Individual',
      description: 'Evaluación completa y personalizada de tu estado nutricional'
    },
    {
      icon: 'menu_book',
      iconPath: 'assets/icons/vegetable-icon (5).png',
      title: 'Talleres y Educación',
      description: 'Talleres presenciales y virtuales de educación nutricional'
    }
  ];

  benefits = [
    {
      icon: 'person',
      iconPath: 'assets/icons/vegetable-icon (6).png',
      title: 'Atención Personalizada',
      description: 'Planes diseñados específicamente para tus necesidades y objetivos'
    },
    {
      icon: 'bar_chart',
      iconPath: 'assets/icons/vegetable-icon (7).png',
      title: 'Seguimiento Profesional',
      description: 'Evaluaciones periódicas para ajustar tu plan y asegurar resultados'
    },
    {
      icon: 'local_hospital',
      iconPath: 'assets/icons/vegetable-icon (8).png',
      title: 'Presencial y Online',
      description: 'Flexibilidad para atenderte como prefieras, desde donde estés'
    },
    {
      icon: 'integration_instructions',
      iconPath: 'assets/icons/vegetable-icon (9).png',
      title: 'Enfoque Integral',
      description: 'Abordaje completo que considera todos los aspectos de tu salud'
    }
  ];

  testimonials = [
    {
      name: 'María González',
      image: 'assets/images/testimonials/maria.jpg',
      text: 'Gracias a Alimenta he logrado mejorar mi relación con la comida y alcanzar mi peso saludable. ¡Excelente atención!',
      rating: 5
    },
    {
      name: 'Carlos Pérez',
      image: 'assets/images/testimonials/carlos.jpg',
      text: 'Como deportista, encontré en Alimenta el apoyo nutricional que necesitaba. Mi rendimiento ha mejorado notablemente.',
      rating: 5
    },
    {
      name: 'Ana Rodríguez',
      image: 'assets/images/testimonials/ana.jpg',
      text: 'El acompañamiento durante mi embarazo fue fundamental. Profesionales comprometidos y cercanos.',
      rating: 5
    }
  ];

  realTestimonials = [
    {
      name: 'Axel Mendoza',
      text: 'Mi experiencia con el Centro Alimenta fue muy buena. Con los planes de alimentación personalizados y los talleres logré resultados increíbles.',
      rating: 5
    },
    {
      name: 'Leticia Rivera',
      text: 'Fueron 3 meses buenos en los que la doctora Patricia fue de apoyo, fue amable todo el tiempo y nos explicó todo lo que implicaba la dieta y los pasos a seguir.',
      rating: 5
    },
    {
      name: 'Hanan Callejas',
      text: 'Amé la atención y aprendí mucho sobre alimentación. Hoy puedo decir que soy más consciente de lo que como y cómo lo hago.',
      rating: 5
    },
    {
      name: 'Katherine Gonzales',
      text: 'Me gustó mucho la atención y la paciencia conmigo, el que me guíen constantemente en mi evolución. Muchas gracias.',
      rating: 5
    },
    {
      name: 'Lourdes Quispe',
      text: 'Muy buena experiencia, nos ayudó al 100% con nuestra salud. Mejoramos en todos los sentidos y aprendimos que no es comer por comer.',
      rating: 5
    },
    {
      name: 'Renata Carrillo Sainz',
      text: 'Alimenta es un equipo de nutricionistas muy profesionales. Me diseñaron un plan alimentario muy personalizado que me ayudó a lograr mis objetivos.',
      rating: 5
    },
    {
      name: 'Noelia Sossa',
      text: 'Un servicio íntegro de primer nivel. Desde el primer momento la atención es de calidad, son muy atentas y empáticas en cada paso.',
      rating: 5
    },
    {
      name: 'Victor Canaviri',
      text: 'Muy contento con el centro. Aprendí y sigo aprendiendo sobre una correcta alimentación, además de apoyarte con tus objetivos.',
      rating: 5
    },
    {
      name: 'Bruno Torres',
      text: 'Agradezco a Alimenta por ayudarme a lograr mis objetivos en mi deporte, con mi rendimiento y mi cuerpo. El ambiente es profesional y acogedor.',
      rating: 5
    },
    {
      name: 'Andrea Mendez',
      text: 'Fue una gran experiencia, aprendí a manejar mis hábitos alimenticios de una mejor manera. Gracias Alimenta.',
      rating: 5
    },
    {
      name: 'Marko Vazquez',
      text: 'Excelente atención e inmejorable servicio, muy buena calidad relación precio, alta profesionalidad y equipo muy amable.',
      rating: 5
    }
  ];

  // Reactivar únicamente cuando se aprueben las fotografías del equipo vigente.
  showTeamCarousel = false;
  heroProfessionals = TEAM.filter(member => member.image);

  scrollHeroTeam(carousel: HTMLElement, direction: number): void {
    carousel.scrollBy({
      left: direction * Math.min(carousel.clientWidth * 0.85, 680),
      behavior: 'smooth'
    });
  }

  scrollTestimonials(carousel: HTMLElement, direction: number): void {
    carousel.scrollBy({
      left: direction * Math.min(carousel.clientWidth * 0.85, 520),
      behavior: 'smooth'
    });
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
