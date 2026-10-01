import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ProductItem {
  name: string;
  description: string;
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
  productCategories: ProductCategory[] = [
  {
    "title": "Proteinas",
    "description": "Opciones para complementar tu alimentacion, recuperacion y objetivos de composicion corporal.",
    "products": [
      {
        "name": "Proteina aislada de suero de leche",
        "description": "Absorcion ultrarrapida. Recuperacion post-ejercicio. Sintesis muscular. Fortalece el sistema inmunologico."
      },
      {
        "name": "Proteina de soya aislada",
        "description": "Ideal para veganos y vegetarianos. Favorece la salud cardiovascular. Apoyo durante la menopausia y cuidado oseo."
      },
      {
        "name": "Proteina de Soja Isolada",
        "description": "Proteina de origen vegetal. Sin gluten. Sin azucares anadidos."
      }
    ]
  },
  {
    "title": "Mates",
    "description": "Mezclas de hierbas para preparar infusiones. Consulta sus características y disponibilidad por WhatsApp.",
    "products": [
      {
        "name": "Mate Antiestres",
        "description": "Calma los nervios, tranquilizante, actua sobre cualquier alteracion nerviosa."
      },
      {
        "name": "Mate Tekin",
        "description": "Facilita el descenso de peso de manera natural y promueve una digestion ligera."
      },
      {
        "name": "Mate Gastritis",
        "description": "Desinflamante del tracto digestivo que ayuda a neutralizar la acidez y el ardor estomacal."
      },
      {
        "name": "Mate Hepatico",
        "description": "Desinflamante, absorbe los gases, normaliza la secrecion biliar y digestivo."
      },
      {
        "name": "Mate Anticolesterol",
        "description": "Diuretico, ayuda a eliminar colesterol y trigliceridos."
      },
      {
        "name": "Mate Reductor",
        "description": "Laxante suave, ayuda a eliminar excesos de grasas del organismo y facilita el descenso de peso."
      }
    ]
  },
  {
    "title": "Suplementos",
    "description": "Productos para acompanamiento cardiovascular, hormonal, metabolico y bienestar general.",
    "products": [
      {
        "name": "Omega 3 - 500 EPA 250 DHA",
        "description": "Proteccion cardiovascular. Antiinflamatorio. Ayuda a la concentracion y memoria. Cuidado de la piel."
      },
      {
        "name": "Hormone Balance",
        "description": "Energia y vitalidad. Fortalecimiento inmunologico. Antioxidante. Regula funcion hormonal."
      },
      {
        "name": "Metabolism Booster",
        "description": "Apoyo metabolico. Complemento para objetivos nutricionales. Acompanamiento con plan profesional."
      }
    ]
  },
  {
    "title": "Edulcorantes",
    "description": "Alternativas para endulzar con bajo impacto metabolico y uso practico en cocina.",
    "products": [
      {
        "name": "Stevia natural en polvo",
        "description": "100% natural. Cero calorias. Apto para diabeticos. Segura para cocinar."
      },
      {
        "name": "Stevia en polvo",
        "description": "Bajo impacto metabolico. Facil disolucion. Alto rendimiento. Sabor mas identico al azucar."
      },
      {
        "name": "Eritritol",
        "description": "0% indice glucemico. Sabor similar al azucar. De facil digestion. Resistente al calor."
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
