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

  panelColors = ['#CFE0E6', '#F0BFA0', '#C9B79C', '#D9C7D2', '#B8B89A'];

  processSteps = [
    { title: 'Evaluación Inicial', description: 'Profunda comprensión de tu historial médico, hábitos y objetivos.' },
    { title: 'Plan Personalizado', description: 'Diseño de un programa único que integra nutrición, psicología y ejercicio.' },
    { title: 'Seguimiento Continuo', description: 'Consultas regulares para ajustar el plan y celebrar logros.' },
    { title: 'Autonomía de Salud', description: 'Empoderamiento con conocimientos para mantener tu bienestar a largo plazo.' }
  ];

  services = [
    {
      icon: 'local_hospital',
      title: 'Nutrición Clínica',
      description: 'Nutrición clínica del adulto, cirugía bariátrica y salud hormonal femenina'
    },
    {
      icon: 'child_care',
      title: 'Nutrición en Etapas de la Vida',
      description: 'Nutrición pediátrica, adolescencia y materno infantil'
    },
    {
      icon: 'fitness_center',
      title: 'Nutrición Deportiva y Rendimiento',
      description: 'Nutrición deportiva y planes para rendimiento físico'
    },
    {
      icon: 'restaurant',
      title: 'Evaluación Nutricional Individual',
      description: 'Evaluación completa y personalizada de tu estado nutricional'
    },
    {
      icon: 'menu_book',
      title: 'Talleres y Educación',
      description: 'Talleres presenciales y virtuales de educación nutricional'
    }
  ];

  benefits = [
    {
      icon: 'person',
      title: 'Atención Personalizada',
      description: 'Planes diseñados específicamente para tus necesidades y objetivos'
    },
    {
      icon: 'bar_chart',
      title: 'Seguimiento Profesional',
      description: 'Evaluaciones periódicas para ajustar tu plan y asegurar resultados'
    },
    {
      icon: 'local_hospital',
      title: 'Presencial y Online',
      description: 'Flexibilidad para atenderte como prefieras, desde donde estés'
    },
    {
      icon: 'integration_instructions',
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

 professionals = [
  {
    name: 'Lic. Lucía Pinell',
    specialty: 'Psicología Cognitivo Conductual',
  },
  {
    name: 'Lic. Mariel Llaguno Gómez',
    specialty: 'Nutrición en Recomposición Corporal y Bariatría',
    credential: 'C - 6148826',
    city: 'La Paz'
  },
  {
    name: 'Lic. Katherine Paz Villarroel',
    specialty: 'Nutrición en Recomposición Corporal',
    credential: 'C - 6094050',
    city: 'La Paz'
  },
  {
    name: 'Lic. Valeria Isabel Carrillo Sainz',
    specialty: 'Nutrición Deportiva',
    credential: 'C - 6144191',
    city: 'La Paz'
  },
  {
    name: 'Lic. María René Nuñez Menacho',
    specialty: 'Nutrición Pediátrica y Materno Infantil',
    credential: 'N – 9664083',
    city: 'Santa Cruz'
  },
  {
    name: 'Lic. Ariani Santistevan Alpire',
    specialty: 'Nutrición en Recomposición Corporal',
    credential: 'S – 7709260',
    city: 'Santa Cruz'
  },
  {
    name: 'Lic. Alba Yesenia Condori Quispe',
    specialty: 'Nutrición Pediátrica y Materno Infantil',
    credential: 'C - 8461858',
    city: 'La Paz'
  },
  {
    name: 'Cecilia Monterrey',
    specialty: 'Área de Entrenamiento',
  }
];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
