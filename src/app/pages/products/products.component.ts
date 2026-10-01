import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ProductItem {
  image?: string;
  name: string;
  description: string;
  ingredients?: string;
}

interface ProductCategory {
  title: string;
  description: string;
  products: ProductItem[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  selectedCategory = 0;
  get activeCategory() { return this.productCategories[this.selectedCategory]; }

  productCategories: ProductCategory[] = [
  {
    "title": "Proteínas",
    "description": "Opciones para complementar tu alimentación, recuperación y objetivos de composición corporal.",
    "products": [
      {
        "name": "Proteína aislada de suero de leche",
        "description": "Absorción ultrarrápida. Recuperación post-ejercicio. Síntesis muscular. Fortalece el sistema inmunológico.",
        "image": "assets/productos/Proteina-suero-de-leche.jpg"
      },
      {
        "name": "Proteína de soya aislada",
        "description": "Ideal para veganos y vegetarianos. Favorece la salud cardiovascular. Apoyo durante la menopausia y cuidado óseo.",
        "image": "assets/productos/proteina-soya-aislada-alimenta.jpg"
      },
      {
        "name": "Proteína de Soja Isolada",
        "description": "Proteína de origen vegetal. Sin gluten. Sin azúcares añadidos.",
        "image": "assets/productos/Proteina de Soja Isolada.jpg"
      }
    ]
  },
  {
    "title": "Mates",
    "description": "Mezclas de hierbas para preparar infusiones. Consulta sus características y disponibilidad por WhatsApp.",
    "products": [
      {
        "name": "Mate Antiestrés",
        "description": "Calma los nervios, tranquilizante, actúa sobre cualquier alteración nerviosa.",
        "ingredients": "Psionaria, melisa, tilo, valeriana y menta.",
        "image": "assets/productos/Antiestres.jpg"
      },
      {
        "name": "Mate Tekin",
        "description": "Facilita el descenso de peso de manera natural y promueve una digestión ligera.",
        "ingredients": "Manzanilla, anís, menta, sen y gramilla.",
        "image": "assets/productos/Tekin.jpg"
      },
      {
        "name": "Mate Gastritis",
        "description": "Desinflamante del tracto digestivo que ayuda a neutralizar la acidez y el ardor estomacal.",
        "ingredients": "Zarzaparrilla, manzanilla, boldo, hinojo y alcachofa.",
        "image": "assets/productos/Gastritis.jpg"
      },
      {
        "name": "Mate Hepático",
        "description": "Desinflamante, absorbe los gases, normaliza la secreción biliar y digestivo.",
        "ingredients": "Boldo, manzanilla, alcachofa, menta y carqueja.",
        "image": "assets/productos/mate hepatico .jpg"
      },
      {
        "name": "Mate Anticolesterol",
        "description": "Diurético, ayuda a eliminar colesterol y triglicéridos.",
        "ingredients": "Alfalfa, zarzaparrilla, alcachofa, bolsa de pastor y lengua de vaca."
      },
      {
        "name": "Mate Reductor",
        "description": "Laxante suave, ayuda a eliminar excesos de grasas del organismo y facilita el descenso de peso.",
        "ingredients": "Manzanilla, anís, menta, fucus, té verde y gramilla.",
        "image": "assets/productos/Paquete mate reductor.jpg"
      }
    ]
  },
  {
    "title": "Suplementos",
    "description": "Productos para acompañamiento cardiovascular, hormonal, metabólico y bienestar general.",
    "products": [
      {
        "name": "Omega 3 - 500 EPA 250 DHA",
        "description": "Protección cardiovascular. Antiinflamatorio. Ayuda a la concentración y memoria. Cuidado de la piel.",
        "image": "assets/productos/omega3.jpg"
      },
      {
        "name": "Hormone Balance",
        "description": "Energía y vitalidad. Fortalecimiento inmunológico. Antioxidante. Regula función hormonal.",
        "image": "assets/productos/Hormone-balance.jpg"
      },
      {
        "name": "Metabolism Booster",
        "description": "Apoyo metabólico. Complemento para objetivos nutricionales. Acompanamiento con plan profesional.",
        "image": "assets/productos/booster.png"
      }
    ]
  },
  {
    "title": "Edulcorantes",
    "description": "Alternativas para endulzar con bajo impacto metabólico y uso práctico en cocina.",
    "products": [
      {
        "name": "Stevia natural en polvo",
        "description": "100% natural. Cero calorías. Apto para diabéticos. Segura para cocinar.",
        "image": "assets/productos/Stevia-natural-alimenta.jpg"
      },
      {
        "name": "Stevia en polvo",
        "description": "Bajo impacto metabólico. Fácil disolución. Alto rendimiento. Sabor mas identico al azúcar.",
        "image": "assets/productos/Stevia-en-polvo.jpg"
      },
      {
        "name": "Eritritol",
        "description": "0% índice glucémico. Sabor similar al azúcar. De fácil digestión. Resistente al calor.",
        "image": "assets/productos/Eritritol.jpg"
      }
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
