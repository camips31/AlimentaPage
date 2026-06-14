import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Plan Nutricional Personalizado',
      description: 'Plan de alimentación diseñado específicamente para tus necesidades y objetivos',
      price: 350,
      image: 'assets/images/products/plan-personalizado.jpg',
      features: [
        'Evaluación nutricional completa',
        'Plan alimentario personalizado',
        '4 seguimientos mensuales',
        'Recetario incluido'
      ]
    },
    {
      id: 2,
      name: 'Consulta Individual',
      description: 'Sesión personalizada de nutrición con evaluación completa',
      price: 120,
      image: 'assets/images/products/consulta.jpg',
      features: [
        'Duración: 60 minutos',
        'Evaluación antropométrica',
        'Plan alimentario inicial',
        'Recomendaciones personalizadas'
      ]
    },
    {
      id: 3,
      name: 'Pack Familiar',
      description: 'Orientación nutricional para toda la familia',
      price: 600,
      image: 'assets/images/products/pack-familiar.jpg',
      features: [
        'Hasta 4 miembros de la familia',
        'Planes alimentarios individuales',
        '2 seguimientos mensuales por persona',
        'Educación nutricional grupal'
      ]
    }
  ];

  contactWhatsApp(productName: string) {
    const phone = '59177731818';
    const message = `Hola! Me interesa el producto: ${productName}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
