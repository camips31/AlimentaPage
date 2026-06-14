import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  selectedCategory: string = 'Todos';
  
  categories = [
    'Todos',
    'Alimentación Saludable',
    'Recetas',
    'Tips Nutricionales',
    'Mitos Alimentarios',
    'Hidratación',
    'Nutrición Deportiva',
    'Hábitos Saludables'
  ];

  blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '10 Alimentos que no pueden faltar en tu dieta diaria',
      excerpt: 'Descubre los alimentos esenciales que debes incluir en tu alimentación para mantener una dieta balanceada y saludable.',
      content: 'Contenido completo del artículo...',
      category: 'Alimentación Saludable',
      image: 'assets/blog/alimentos-esenciales.jpg',
      date: '10 Mayo 2026',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Batidos proteicos: ¿Son realmente necesarios?',
      excerpt: 'Analizamos cuándo es recomendable consumir batidos de proteína y cuándo no son necesarios.',
      content: 'Contenido completo del artículo...',
      category: 'Nutrición Deportiva',
      image: 'assets/blog/batidos-proteicos.jpg',
      date: '8 Mayo 2026',
      readTime: '6 min'
    },
    {
      id: 3,
      title: 'Receta: Bowl de Quinoa con Vegetales',
      excerpt: 'Una receta fácil, nutritiva y deliciosa perfecta para el almuerzo o cena.',
      content: 'Contenido completo del artículo...',
      category: 'Recetas',
      image: 'assets/blog/bowl-quinoa.jpg',
      date: '5 Mayo 2026',
      readTime: '4 min'
    },
    {
      id: 4,
      title: '5 Mitos sobre las carbohidratos que debes conocer',
      excerpt: 'Desmitificamos las creencias más comunes sobre los carbohidratos y su impacto en la salud.',
      content: 'Contenido completo del artículo...',
      category: 'Mitos Alimentarios',
      image: 'assets/blog/mitos-carbohidratos.jpg',
      date: '3 Mayo 2026',
      readTime: '7 min'
    },
    {
      id: 5,
      title: '¿Cuánta agua debes tomar al día?',
      excerpt: 'La verdad sobre la hidratación y cómo calcular tus necesidades de agua personales.',
      content: 'Contenido completo del artículo...',
      category: 'Hidratación',
      image: 'assets/blog/hidratacion.jpg',
      date: '1 Mayo 2026',
      readTime: '5 min'
    },
    {
      id: 6,
      title: 'Snacks saludables para llevar al trabajo',
      excerpt: 'Ideas prácticas de colaciones nutritivas que puedes preparar y llevar contigo.',
      content: 'Contenido completo del artículo...',
      category: 'Tips Nutricionales',
      image: 'assets/blog/snacks-saludables.jpg',
      date: '28 Abril 2026',
      readTime: '4 min'
    },
    {
      id: 7,
      title: 'Cómo crear hábitos alimentarios sostenibles',
      excerpt: 'Estrategias probadas para desarrollar y mantener hábitos de alimentación saludable a largo plazo.',
      content: 'Contenido completo del artículo...',
      category: 'Hábitos Saludables',
      image: 'assets/blog/habitos-sostenibles.jpg',
      date: '25 Abril 2026',
      readTime: '8 min'
    },
    {
      id: 8,
      title: 'Alimentación pre y post entrenamiento',
      excerpt: 'Qué comer antes y después de hacer ejercicio para optimizar tu rendimiento y recuperación.',
      content: 'Contenido completo del artículo...',
      category: 'Nutrición Deportiva',
      image: 'assets/blog/pre-post-entrenamiento.jpg',
      date: '22 Abril 2026',
      readTime: '6 min'
    },
    {
      id: 9,
      title: 'Receta: Smoothie verde energizante',
      excerpt: 'Un batido lleno de nutrientes perfecto para comenzar tu día con energía.',
      content: 'Contenido completo del artículo...',
      category: 'Recetas',
      image: 'assets/blog/smoothie-verde.jpg',
      date: '20 Abril 2026',
      readTime: '3 min'
    }
  ];

  get filteredPosts() {
    if (this.selectedCategory === 'Todos') {
      return this.blogPosts;
    }
    return this.blogPosts.filter(post => post.category === this.selectedCategory);
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
  }

  contactWhatsApp() {
    const phone = '59175000000';
    const message = 'Hola! Me gustaría suscribirme al blog de Alimenta';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
