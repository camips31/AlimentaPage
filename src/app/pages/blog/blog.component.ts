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
      label: 'Articulo 1',
      author: 'Valeria',
      image: 'assets/articulos/hambre emocional.jpg',
      title: 'Como diferenciar el hambre emocional del hambre fisiologica',
      excerpt: 'Una guia para reconocer senales del cuerpo, emociones y patrones que pueden influir en la alimentacion diaria.'
    },
    {
      id: 2,
      label: 'Articulo 2',
      author: 'Valeria',
      image: 'assets/articulos/Dieta restritiva.jpg',
      title: 'Por que las dietas restrictivas fracasan y que hacer en su lugar',
      excerpt: 'Una mirada practica sobre habitos sostenibles, flexibilidad alimentaria y acompanamiento profesional.'
    },
    {
      id: 3,
      label: 'Articulo 3',
      author: 'Valeria',
      image: 'assets/articulos/salud-matabolica.jpg',
      title: 'Como mejorar tu salud metabolica con pequenos cambios diarios',
      excerpt: 'Cambios simples en tu rutina que pueden apoyar tu energia, composicion corporal y bienestar general.'
    }
  ];

  contactWhatsApp(postTitle: string) {
    const phone = '59177731818';
    const message = `Hola! Quiero mas informacion sobre el blog: ${postTitle}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
