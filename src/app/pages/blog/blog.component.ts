import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface BlogPost {
  id: number;
  title: string;
  author: string;
  label: string;
  excerpt: string;
  image: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      id: 1,
      label: 'Alimentación consciente',
      author: 'Valeria',
      image: 'assets/articulos/hambre emocional.jpg',
      title: '¿Cómo diferenciar el hambre emocional del hambre fisiológica?',
      excerpt: 'Reconoce las señales de tu cuerpo y cómo influyen tus emociones al comer.'
    },
    {
      id: 2,
      label: 'Hábitos sostenibles',
      author: 'Valeria',
      image: 'assets/articulos/Dieta restritiva.jpg',
      title: 'Por qué las dietas restrictivas fracasan y qué hacer en su lugar.',
      excerpt: 'Descubre un enfoque flexible para construir hábitos que puedas mantener.'
    },
    {
      id: 3,
      label: 'Bienestar diario',
      author: 'Valeria',
      image: 'assets/articulos/salud-matabolica.jpg',
      title: 'Cómo mejorar tu salud metabólica con pequeños cambios diarios.',
      excerpt: 'Pequeños hábitos para cuidar tu energía y bienestar cada día.'
    }
  ];

  contactWhatsApp(postTitle: string) {
    const phone = '59178250459';
    const message = `Hola! Quiero mas informacion sobre el blog: ${postTitle}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
