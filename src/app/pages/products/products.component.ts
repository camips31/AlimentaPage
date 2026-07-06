import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ProductPrice {
  label: string;
  amount: string;
}

interface ProductItem {
  name: string;
  image: string;
  description?: string;
  prices: ProductPrice[];
  features?: string[];
  ingredients?: string;
}

interface ProductCategory {
  title: string;
  eyebrow: string;
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
      title: 'Proteinas',
      eyebrow: 'Suplementacion',
      description: 'Opciones para complementar tu alimentacion, recuperacion y objetivos de composicion corporal.',
      products: [
        {
          name: 'Proteina aislada de suero de leche',
          image: 'assets/productos/Proteina-suero-de-leche.jpg',
          prices: [
            { label: '500 gr', amount: 'Bs. 330' },
            { label: '1000 gr', amount: 'Bs. 580' }
          ],
          features: [
            'Absorcion ultrarrapida',
            'Recuperacion post-ejercicio',
            'Sintesis muscular',
            'Fortalece el sistema inmunologico'
          ]
        },
        {
          name: 'Proteina de soya aislada',
          image: 'assets/productos/proteina-soya-aislada-alimenta.jpg',
          prices: [
            { label: '500 gr', amount: 'Bs. 330' },
            { label: '1000 gr', amount: 'Bs. 580' }
          ],
          features: [
            'Ideal para veganos y vegetarianos',
            'Favorece la salud cardiovascular',
            'Apoyo durante la menopausia y cuidado oseo'
          ]
        },
        {
          name: 'Proteina de Soja Isolada',
          image: 'assets/productos/Proteina de Soja Isolada.jpg',
          prices: [
            { label: '250 gr', amount: 'Bs. 180' },
            { label: '750 gr', amount: 'Bs. 520' }
          ],
          features: [
            'Proteina de origen vegetal',
            'Sin gluten',
            'Sin azucares anadidos'
          ]
        }
      ]
    },
    {
      title: 'Mates',
      eyebrow: 'Infusiones naturales',
      description: 'Presentacion de 100 gr a Bs. 45, con mezclas naturales para diferentes necesidades.',
      products: [
        {
          name: 'Mate Antiestres',
          image: 'assets/productos/Antiestres.jpg',
          prices: [{ label: '100 gr', amount: 'Bs. 45' }],
          description: 'Calma los nervios, tranquilizante, actua sobre cualquier alteracion nerviosa.',
          ingredients: 'Psionaria, Melisa, Tilo, Valeriana, Menta'
        },
        {
          name: 'Mate Tekin',
          image: 'assets/productos/Tekin.jpg',
          prices: [{ label: '100 gr', amount: 'Bs. 45' }],
          description: 'Facilita el descenso de peso de manera natural y promueve una digestion ligera.',
          ingredients: 'Manzanilla, Anis, Menta, Sen y Gramilla'
        },
        {
          name: 'Mate Gastritis',
          image: 'assets/productos/Gastritis.jpg',
          prices: [{ label: '100 gr', amount: 'Bs. 45' }],
          description: 'Desinflamante del tracto digestivo que ayuda a neutralizar la acidez y el ardor estomacal.',
          ingredients: 'Zarzaparrilla, Manzanilla, Boldo, Hinojo y Alcachofa'
        },
        {
          name: 'Mate Hepatico',
          image: 'assets/productos/mate hepatico .jpg',
          prices: [{ label: '100 gr', amount: 'Bs. 45' }],
          description: 'Desinflamante, absorbe los gases, normaliza la secrecion biliar y digestivo.',
          ingredients: 'Boldo, Manzanilla, Alcachofa, Menta, Carqueja'
        },
        {
          name: 'Mate Anticolesterol',
          image: '',
          prices: [{ label: '100 gr', amount: 'Bs. 45' }],
          description: 'Diuretico, ayuda a eliminar colesterol y trigliceridos.',
          ingredients: 'Alfalfa, Zarzaparrilla, Alcachofa, Bolsa de pastor, Lengua de Vaca'
        },
        {
          name: 'Mate Reductor',
          image: 'assets/productos/Paquete mate reductor.jpg',
          prices: [{ label: '100 gr', amount: 'Bs. 45' }],
          description: 'Laxante suave, ayuda a eliminar excesos de grasas del organismo y facilita el descenso de peso.',
          ingredients: 'Manzanilla, Anis, Menta, Fucus, Te Verde, Gramilla'
        }
      ]
    },
    {
      title: 'Suplementos',
      eyebrow: 'Apoyo nutricional',
      description: 'Productos para acompanamiento cardiovascular, hormonal, metabolico y bienestar general.',
      products: [
        {
          name: 'Omega 3 - 500 EPA 250 DHA',
          image: 'assets/productos/omega3.jpg',
          prices: [
            { label: '30 caps', amount: 'Bs. 180' },
            { label: '90 caps', amount: 'Bs. 540' },
            { label: 'Jarabe', amount: 'Bs. 180' }
          ],
          features: [
            'Proteccion cardiovascular',
            'Antiinflamatorio',
            'Ayuda a la concentracion y memoria',
            'Cuidado de la piel'
          ]
        },
        {
          name: 'Hormone Balance',
          image: 'assets/productos/Hormone-balance.jpg',
          prices: [{ label: '30 caps', amount: 'Bs. 160' }],
          features: [
            'Energia y vitalidad',
            'Fortalecimiento inmunologico',
            'Antioxidante',
            'Regula funcion hormonal'
          ]
        },
        {
          name: 'Metabolism Booster',
          image: 'assets/productos/booster.png',
          prices: [{ label: '30 caps', amount: 'Bs. 360' }],
          features: [
            'Apoyo metabolico',
            'Complemento para objetivos nutricionales',
            'Acompanamiento con plan profesional'
          ]
        }
      ]
    },
    {
      title: 'Edulcorantes',
      eyebrow: 'Endulzantes',
      description: 'Alternativas para endulzar con bajo impacto metabolico y uso practico en cocina.',
      products: [
        {
          name: 'Stevia natural en polvo',
          image: 'assets/productos/Stevia-natural-alimenta.jpg',
          prices: [{ label: '40 gr', amount: 'Bs. 32' }],
          features: [
            '100% natural',
            'Cero calorias',
            'Apto para diabeticos',
            'Segura para cocinar'
          ]
        },
        {
          name: 'Stevia en polvo',
          image: 'assets/productos/Stevia-en-polvo.jpg',
          prices: [{ label: '40 gr', amount: 'Bs. 30' }],
          features: [
            'Bajo impacto metabolico',
            'Facil disolucion',
            'Alto rendimiento',
            'Sabor mas identico al azucar'
          ]
        },
        {
          name: 'Eritritol',
          image: 'assets/productos/Eritritol.jpg',
          prices: [
            { label: '40 gr', amount: 'Bs. 40' },
            { label: '80 gr', amount: 'Bs. 70' }
          ],
          features: [
            '0% indice glucemico',
            'Sabor similar al azucar',
            'De facil digestion',
            'Resistente al calor'
          ]
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
