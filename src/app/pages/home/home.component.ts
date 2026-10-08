import { TEAM } from '../../data/team';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly heroBackgrounds = [1, 2, 3, 4, 5].map(n => 'assets/bg (' + n + ').png');
  activeBackground = 0;
  backgroundsPaused = false;
  private backgroundTimer?: ReturnType<typeof setInterval>;
  ngOnInit() {
    this.backgroundsPaused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.backgroundTimer = setInterval(() => {
      if (!this.backgroundsPaused && !document.hidden) this.activeBackground = (this.activeBackground + 1) % this.heroBackgrounds.length;
    }, 6500);
  }
  ngOnDestroy() { if (this.backgroundTimer) clearInterval(this.backgroundTimer); }
  selectBackground(index: number) { this.activeBackground = index; }

  whatsappLink = 'https://wa.me/59178250459?text=Hola%2C%20quisiera%20agendar%20una%20consulta.%20%C2%BFPodr%C3%ADan%20orientarme%20sobre%20el%20servicio%20m%C3%A1s%20adecuado%20e%20indicarme%20la%20disponibilidad%3F';


  processSteps = [
    { title: 'Evaluación Inicial', description: 'Profunda comprensión de tu historial médico, hábitos y objetivos.' },
    { title: 'Plan Personalizado', description: 'Diseño de un programa único que integra nutrición, psicología y ejercicio.' },
    { title: 'Seguimiento Continuo', description: 'Consultas regulares para ajustar el plan y celebrar logros.' },
    { title: 'Autonomía de Salud', description: 'Empoderamiento con conocimientos para mantener tu bienestar a largo plazo.' }
  ];

  services = [
  {
    "icon": "local_hospital",
    "iconPath": "assets/icons/vegetable-icon (1).png",
    "title": "Nutrición Clínica",
    "description": "Atención nutricional para cuidar tu salud y acompañar condiciones clínicas."
  },
  {
    "icon": "restaurant",
    "iconPath": "assets/icons/vegetable-icon (2).png",
    "title": "Nutrición Personalizada",
    "description": "Planes de alimentación adaptados a tus necesidades, hábitos y objetivos."
  },
  {
    "icon": "psychology",
    "iconPath": "assets/icons/vegetable-icon (3).png",
    "title": "Psicología Clínica",
    "description": "Acompañamiento para tu bienestar emocional y una relación saludable con la alimentación."
  }
];

  benefits = [
    {
      icon: 'person',
      iconPath: 'assets/icons/vegetable-icon (6).png',
      title: 'Atención Personalizada',
      description: 'Planes diseñados específicamente para tus necesidades y objetivos.'
    },
    {
      icon: 'bar_chart',
      iconPath: 'assets/icons/vegetable-icon (7).png',
      title: 'Seguimiento Profesional',
      description: 'Evaluaciones periódicas para ajustar tu plan y asegurar resultados.'
    },
    {
      icon: 'local_hospital',
      iconPath: 'assets/icons/vegetable-icon (8).png',
      title: 'Presencial y Online',
      description: 'Flexibilidad para atenderte como prefieras, desde donde estés.'
    },
    {
      icon: 'integration_instructions',
      iconPath: 'assets/icons/vegetable-icon (9).png',
      title: 'Enfoque Integral',
      description: 'Abordaje completo que considera todos los aspectos de tu salud.'
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
    const card = carousel.querySelector<HTMLElement>('.testimonial-card');
    if (!card) return;
    const gap = parseFloat(getComputedStyle(carousel).columnGap) || 0;
    const step = card.getBoundingClientRect().width + gap;
    const current = Math.round(carousel.scrollLeft / step);
    const target = Math.max(0, Math.min((current + direction) * step, carousel.scrollWidth - carousel.clientWidth));
    carousel.scrollTo({
      left: target,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    });
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
