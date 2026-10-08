import { inject } from '@angular/core';
import { WhatsappService } from '../../shared/whatsapp-selector/whatsapp.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ProductItem {
  image?: string;
  name: string;
  description: string;
  ingredients?: string;
  presentations?: { size: string; price: number }[];
  priceNote?: string;
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
  readonly whatsapp = inject(WhatsappService);
  selectedCategory = 0;
  get activeCategory() { return this.productCategories[this.selectedCategory]; }

  productCategories: ProductCategory[] = [
  {
    "title": "Proteínas",
    "description": "Opciones para complementar tu alimentación, recuperación y objetivos de composición corporal.",
    "products": [
      {
        "name": "Proteína aislada de suero de leche",
        "description": "Absorción ultrarrápida. Recuperación posejercicio. Síntesis muscular. Fortalece el sistema inmunológico.",
        "image": "assets/productos/SUERO DE LECHE.png",
        "presentations": [
          {
            "size": "250 g",
            "price": 190
          },
          {
            "size": "500 g",
            "price": 330
          },
          {
            "size": "1 kg",
            "price": 580
          },
          {
            "size": "2 kg",
            "price": 980
          },
          {
            "size": "4,5 kg",
            "price": 1960
          }
        ]
      },
      {
        "name": "Proteína de soya aislada",
        "description": "Ideal para veganos y vegetarianos. Favorece la salud cardiovascular. Apoyo durante la menopausia y cuidado óseo.",
        "image": "assets/productos/SOYA AISLADA.jpg",
        "presentations": [
          {
            "size": "250 g",
            "price": 190
          },
          {
            "size": "500 g",
            "price": 330
          },
          {
            "size": "1 kg",
            "price": 580
          },
          {
            "size": "2 kg",
            "price": 980
          },
          {
            "size": "4,5 kg",
            "price": 1960
          }
        ]
      },
      {
        "name": "Proteína de soya aislada (bolsa pequeña)",
        "description": "Proteína de origen vegetal. Sin gluten. Sin azúcares añadidos.",
        "image": "assets/productos/SOYA ISOLADA.png",
        "priceNote": "Consultar precio"
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
        "image": "assets/productos/ANTIESTRESS.png",
        "presentations": [
          {
            "size": "Bolsa de 100 g",
            "price": 45
          }
        ]
      },
      {
        "name": "Mate Tekin",
        "description": "Facilita el descenso de peso de manera natural y promueve una digestión ligera.",
        "ingredients": "Manzanilla, anís, menta, sen y gramilla.",
        "image": "assets/productos/TEKIN.png",
        "presentations": [
          {
            "size": "Bolsa de 100 g",
            "price": 45
          }
        ]
      },
      {
        "name": "Mate Gastritis",
        "description": "Desinflamante del tracto digestivo que ayuda a neutralizar la acidez y el ardor estomacal.",
        "ingredients": "Zarzaparrilla, manzanilla, boldo, hinojo y alcachofa.",
        "image": "assets/productos/GASTRITIS.png",
        "presentations": [
          {
            "size": "Bolsa de 100 g",
            "price": 45
          }
        ]
      },
      {
        "name": "Mate Hepático",
        "description": "Desinflamante y digestivo. Absorbe los gases y normaliza la secreción biliar.",
        "ingredients": "Boldo, manzanilla, alcachofa, menta y carqueja.",
        "image": "assets/productos/HEPATICO.jpg",
        "presentations": [
          {
            "size": "Bolsa de 100 g",
            "price": 45
          }
        ]
      },
      {
        "name": "Mate Anticolesterol",
        "description": "Diurético, ayuda a eliminar colesterol y triglicéridos.",
        "ingredients": "Alfalfa, zarzaparrilla, alcachofa, bolsa de pastor y lengua de vaca.",
        "image": "assets/productos/ANTICOLESTEROL.png",
        "presentations": [
          {
            "size": "Bolsa de 100 g",
            "price": 45
          }
        ]
      },
      {
        "name": "Mate Reductor",
        "description": "Laxante suave, ayuda a eliminar excesos de grasas del organismo y facilita el descenso de peso.",
        "ingredients": "Manzanilla, anís, menta, fucus, té verde y gramilla.",
        "image": "assets/productos/REDUCTOR.jpg",
        "presentations": [
          {
            "size": "Bolsa de 100 g",
            "price": 45
          }
        ]
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
        "image": "assets/productos/OMEGA3.png",
        "presentations": [
          {
            "size": "30 cápsulas",
            "price": 180
          }
        ]
      },
      {
        "name": "Hormone Balance",
        "description": "Energía y vitalidad. Fortalecimiento inmunológico. Antioxidante. Regula la función hormonal.",
        "image": "assets/productos/HORMONE BALANCE.png",
        "presentations": [
          {
            "size": "30 cápsulas",
            "price": 160
          }
        ]
      },
      {
        "name": "Metabolism Booster",
        "description": "Apoyo metabólico. Complemento para objetivos nutricionales. Acompañamiento con un plan profesional.",
        "image": "assets/productos/BOOSTER.png",
        "priceNote": "Consultar precio"
      },
      {
        "name": "Bisglicinato de magnesio",
        "description": "Suplemento de magnesio en cápsulas. Consulta sus características y disponibilidad.",
        "presentations": [
          {
            "size": "30 cápsulas",
            "price": 160
          },
          {
            "size": "60 cápsulas",
            "price": 295
          },
          {
            "size": "90 cápsulas",
            "price": 395
          }
        ],
        "image": "assets/productos/bisglicinato_de_magnesio.png"
      },
      {
        "name": "Citrato de magnesio",
        "description": "Suplemento de magnesio en cápsulas. Consulta sus características y disponibilidad.",
        "presentations": [
          {
            "size": "30 cápsulas",
            "price": 160
          },
          {
            "size": "60 cápsulas",
            "price": 295
          },
          {
            "size": "90 cápsulas",
            "price": 395
          }
        ],
        "image": "assets/productos/citrato_de_magnesio.png"
      },
      {
        "name": "Malato de magnesio",
        "description": "Suplemento de magnesio en cápsulas. Consulta sus características y disponibilidad.",
        "presentations": [
          {
            "size": "30 cápsulas",
            "price": 160
          },
          {
            "size": "60 cápsulas",
            "price": 295
          },
          {
            "size": "90 cápsulas",
            "price": 395
          }
        ],
        "image": "assets/productos/malato_de_magnesio.png"
      },
      {
        "name": "Óxido de magnesio",
        "description": "Suplemento de magnesio en cápsulas. Consulta sus características y disponibilidad.",
        "presentations": [
          {
            "size": "30 cápsulas",
            "price": 160
          },
          {
            "size": "60 cápsulas",
            "price": 295
          },
          {
            "size": "90 cápsulas",
            "price": 395
          }
        ],
        "image": "assets/productos/oxido_de_magnesio.png"
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
        "image": "assets/productos/STEVIA NATURAL.png",
        "priceNote": "Consultar precio"
      },
      {
        "name": "Stevia en polvo",
        "description": "Bajo impacto metabólico. Fácil disolución. Alto rendimiento. Sabor similar al azúcar.",
        "image": "assets/productos/STEVIA EN POLVO.png",
        "priceNote": "Consultar disponibilidad"
      },
      {
        "name": "Eritritol",
        "description": "0% índice glucémico. Sabor similar al azúcar. De fácil digestión. Resistente al calor.",
        "image": "assets/productos/ERITRITOL.png",
        "presentations": [
          {
            "size": "40 g",
            "price": 40
          },
          {
            "size": "80 g",
            "price": 70
          }
        ]
      }
    ]
  }
];

  contactWhatsApp(productName: string) {
    const message = `Hola, quisiera consultar sobre ${productName}. ¿Podrían indicarme qué opciones tienen disponibles y cómo realizar un pedido?`;
    this.whatsapp.open(message);
  }
}
