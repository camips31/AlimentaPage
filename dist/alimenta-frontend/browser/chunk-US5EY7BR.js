import {
  CommonModule
} from "./chunk-4XT7MOVT.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MI7MW4BC.js";

// src/app/pages/products/products.component.ts
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.name;
var _forTrack2 = ($index, $item) => $item.label;
function ProductsComponent_For_10_For_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
  if (rf & 2) {
    const product_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", product_r2.image, \u0275\u0275sanitizeUrl)("alt", product_r2.name);
  }
}
function ProductsComponent_For_10_For_8_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const price_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(price_r3.amount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(price_r3.label);
  }
}
function ProductsComponent_For_10_For_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r2.description);
  }
}
function ProductsComponent_For_10_For_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16)(1, "span");
    \u0275\u0275text(2, "Ingredientes:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", product_r2.ingredients, " ");
  }
}
function ProductsComponent_For_10_For_8_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r4);
  }
}
function ProductsComponent_For_10_For_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 17);
    \u0275\u0275repeaterCreate(1, ProductsComponent_For_10_For_8_Conditional_11_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(product_r2.features);
  }
}
function ProductsComponent_For_10_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275template(2, ProductsComponent_For_10_For_8_Conditional_2_Template, 1, 2, "img", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275repeaterCreate(7, ProductsComponent_For_10_For_8_For_8_Template, 5, 2, "span", 14, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ProductsComponent_For_10_For_8_Conditional_9_Template, 2, 1, "p", 15)(10, ProductsComponent_For_10_For_8_Conditional_10_Template, 4, 1, "p", 16)(11, ProductsComponent_For_10_For_8_Conditional_11_Template, 3, 0, "ul", 17);
    \u0275\u0275elementStart(12, "button", 18);
    \u0275\u0275listener("click", function ProductsComponent_For_10_For_8_Template_button_click_12_listener() {
      const product_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.contactWhatsApp(product_r2.name));
    });
    \u0275\u0275text(13, " Consultar por WhatsApp ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    \u0275\u0275classProp("empty-image", !product_r2.image);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, product_r2.image ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(product_r2.prices);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(9, product_r2.description ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(10, product_r2.ingredients ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(11, (product_r2.features == null ? null : product_r2.features.length) ? 11 : -1);
  }
}
function ProductsComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 5)(1, "div", 6)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 7);
    \u0275\u0275repeaterCreate(7, ProductsComponent_For_10_For_8_Template, 14, 7, "div", 8, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(category_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r6.description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(category_r6.products);
  }
}
var ProductsComponent = class _ProductsComponent {
  constructor() {
    this.productCategories = [
      {
        title: "Proteinas",
        eyebrow: "Suplementacion",
        description: "Opciones para complementar tu alimentacion, recuperacion y objetivos de composicion corporal.",
        products: [
          {
            name: "Proteina aislada de suero de leche",
            image: "assets/productos/Proteina-suero-de-leche.jpg",
            prices: [
              { label: "500 gr", amount: "Bs. 330" },
              { label: "1000 gr", amount: "Bs. 580" }
            ],
            features: [
              "Absorcion ultrarrapida",
              "Recuperacion post-ejercicio",
              "Sintesis muscular",
              "Fortalece el sistema inmunologico"
            ]
          },
          {
            name: "Proteina de soya aislada",
            image: "assets/productos/proteina-soya-aislada-alimenta.jpg",
            prices: [
              { label: "500 gr", amount: "Bs. 330" },
              { label: "1000 gr", amount: "Bs. 580" }
            ],
            features: [
              "Ideal para veganos y vegetarianos",
              "Favorece la salud cardiovascular",
              "Apoyo durante la menopausia y cuidado oseo"
            ]
          },
          {
            name: "Proteina de Soja Isolada",
            image: "assets/productos/Proteina de Soja Isolada.jpg",
            prices: [
              { label: "250 gr", amount: "Bs. 180" },
              { label: "750 gr", amount: "Bs. 520" }
            ],
            features: [
              "Proteina de origen vegetal",
              "Sin gluten",
              "Sin azucares anadidos"
            ]
          }
        ]
      },
      {
        title: "Mates",
        eyebrow: "Infusiones naturales",
        description: "Presentacion de 100 gr a Bs. 45, con mezclas naturales para diferentes necesidades.",
        products: [
          {
            name: "Mate Antiestres",
            image: "assets/productos/Antiestres.jpg",
            prices: [{ label: "100 gr", amount: "Bs. 45" }],
            description: "Calma los nervios, tranquilizante, actua sobre cualquier alteracion nerviosa.",
            ingredients: "Psionaria, Melisa, Tilo, Valeriana, Menta"
          },
          {
            name: "Mate Tekin",
            image: "assets/productos/Tekin.jpg",
            prices: [{ label: "100 gr", amount: "Bs. 45" }],
            description: "Facilita el descenso de peso de manera natural y promueve una digestion ligera.",
            ingredients: "Manzanilla, Anis, Menta, Sen y Gramilla"
          },
          {
            name: "Mate Gastritis",
            image: "assets/productos/Gastritis.jpg",
            prices: [{ label: "100 gr", amount: "Bs. 45" }],
            description: "Desinflamante del tracto digestivo que ayuda a neutralizar la acidez y el ardor estomacal.",
            ingredients: "Zarzaparrilla, Manzanilla, Boldo, Hinojo y Alcachofa"
          },
          {
            name: "Mate Hepatico",
            image: "assets/productos/mate hepatico .jpg",
            prices: [{ label: "100 gr", amount: "Bs. 45" }],
            description: "Desinflamante, absorbe los gases, normaliza la secrecion biliar y digestivo.",
            ingredients: "Boldo, Manzanilla, Alcachofa, Menta, Carqueja"
          },
          {
            name: "Mate Anticolesterol",
            image: "",
            prices: [{ label: "100 gr", amount: "Bs. 45" }],
            description: "Diuretico, ayuda a eliminar colesterol y trigliceridos.",
            ingredients: "Alfalfa, Zarzaparrilla, Alcachofa, Bolsa de pastor, Lengua de Vaca"
          },
          {
            name: "Mate Reductor",
            image: "assets/productos/Paquete mate reductor.jpg",
            prices: [{ label: "100 gr", amount: "Bs. 45" }],
            description: "Laxante suave, ayuda a eliminar excesos de grasas del organismo y facilita el descenso de peso.",
            ingredients: "Manzanilla, Anis, Menta, Fucus, Te Verde, Gramilla"
          }
        ]
      },
      {
        title: "Suplementos",
        eyebrow: "Apoyo nutricional",
        description: "Productos para acompanamiento cardiovascular, hormonal, metabolico y bienestar general.",
        products: [
          {
            name: "Omega 3 - 500 EPA 250 DHA",
            image: "assets/productos/omega3.jpg",
            prices: [
              { label: "30 caps", amount: "Bs. 180" },
              { label: "90 caps", amount: "Bs. 540" },
              { label: "Jarabe", amount: "Bs. 180" }
            ],
            features: [
              "Proteccion cardiovascular",
              "Antiinflamatorio",
              "Ayuda a la concentracion y memoria",
              "Cuidado de la piel"
            ]
          },
          {
            name: "Hormone Balance",
            image: "assets/productos/Hormone-balance.jpg",
            prices: [{ label: "30 caps", amount: "Bs. 160" }],
            features: [
              "Energia y vitalidad",
              "Fortalecimiento inmunologico",
              "Antioxidante",
              "Regula funcion hormonal"
            ]
          },
          {
            name: "Metabolism Booster",
            image: "assets/productos/booster.png",
            prices: [{ label: "30 caps", amount: "Bs. 360" }],
            features: [
              "Apoyo metabolico",
              "Complemento para objetivos nutricionales",
              "Acompanamiento con plan profesional"
            ]
          }
        ]
      },
      {
        title: "Edulcorantes",
        eyebrow: "Endulzantes",
        description: "Alternativas para endulzar con bajo impacto metabolico y uso practico en cocina.",
        products: [
          {
            name: "Stevia natural en polvo",
            image: "assets/productos/Stevia-natural-alimenta.jpg",
            prices: [{ label: "40 gr", amount: "Bs. 32" }],
            features: [
              "100% natural",
              "Cero calorias",
              "Apto para diabeticos",
              "Segura para cocinar"
            ]
          },
          {
            name: "Stevia en polvo",
            image: "assets/productos/Stevia-en-polvo.jpg",
            prices: [{ label: "40 gr", amount: "Bs. 30" }],
            features: [
              "Bajo impacto metabolico",
              "Facil disolucion",
              "Alto rendimiento",
              "Sabor mas identico al azucar"
            ]
          },
          {
            name: "Eritritol",
            image: "assets/productos/Eritritol.jpg",
            prices: [
              { label: "40 gr", amount: "Bs. 40" },
              { label: "80 gr", amount: "Bs. 70" }
            ],
            features: [
              "0% indice glucemico",
              "Sabor similar al azucar",
              "De facil digestion",
              "Resistente al calor"
            ]
          }
        ]
      }
    ];
  }
  contactWhatsApp(productName) {
    const phone = "59177731818";
    const message = `Hola! Me interesa el producto: ${productName}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }
  static {
    this.\u0275fac = function ProductsComponent_Factory(t) {
      return new (t || _ProductsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductsComponent, selectors: [["app-products"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 0, consts: [[1, "products-page"], [1, "products-hero"], [1, "container", "hero-inner"], [1, "catalog-section"], [1, "container"], [1, "category-block"], [1, "category-heading"], [1, "products-grid"], [1, "product-card", 3, "empty-image"], [1, "product-card"], [1, "product-image"], ["loading", "lazy", 3, "src", "alt"], [1, "product-content"], [1, "price-row"], [1, "price-chip"], [1, "description"], [1, "ingredients"], [1, "features"], [1, "btn", "btn-primary", 3, "click"]], template: function ProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4, "Productos para acompanar tu bienestar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, " Proteinas, mates, suplementos y edulcorantes seleccionados para complementar tu proceso nutricional de forma practica. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "section", 3)(8, "div", 4);
        \u0275\u0275repeaterCreate(9, ProductsComponent_For_10_Template, 9, 2, "article", 5, _forTrack0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275repeater(ctx.productCategories);
      }
    }, dependencies: [CommonModule], styles: ['\n\n.products-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #fbf2df;\n}\n.products-hero[_ngcontent-%COMP%] {\n  padding: 1.25rem 0 0.35rem !important;\n  text-align: center;\n}\n.hero-inner[_ngcontent-%COMP%] {\n  max-width: 880px;\n}\n.eyebrow[_ngcontent-%COMP%], .category-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  color: #b37d5a;\n  font-size: 0.8rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.products-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #24485a;\n  font-size: clamp(2rem, 4vw, 3rem);\n  font-weight: 500;\n  line-height: 1.1;\n  margin: 0.6rem auto 0.8rem;\n  max-width: 760px;\n}\n.products-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after {\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-sand) 0%,\n      #d9a586 52%,\n      var(--brand-sand-soft) 100%);\n  border-radius: 999px;\n  content: "";\n  display: block;\n  height: 4px;\n  margin: 0.65rem auto 0;\n  width: 120px;\n}\n.products-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5f6670;\n  font-size: 1.08rem;\n  line-height: 1.5;\n  margin: 0 auto;\n  max-width: 720px;\n}\n.catalog-section[_ngcontent-%COMP%] {\n  padding: 0 0 4.5rem !important;\n}\n.category-block[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.category-heading[_ngcontent-%COMP%] {\n  margin-bottom: 1.15rem;\n  text-align: center;\n}\n.category-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #24485a;\n  font-size: clamp(1.65rem, 2.4vw, 2.15rem);\n  line-height: 1.1;\n  margin: 0;\n}\n.category-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #697078;\n  font-size: 0.92rem;\n  line-height: 1.4;\n  margin: 0.35rem auto 0;\n  max-width: 680px;\n}\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));\n  gap: 1rem;\n  align-items: stretch;\n}\n.product-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.96);\n  border: 1px solid rgba(95, 132, 103, 0.18);\n  border-radius: 8px;\n  box-shadow: 0 12px 26px rgba(52, 80, 68, 0.1);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition:\n    transform 0.22s ease,\n    box-shadow 0.22s ease,\n    border-color 0.22s ease;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(179, 125, 90, 0.36);\n  transform: translateY(-3px);\n}\n.product-image[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f3ed,\n      #f9eede);\n  box-sizing: border-box;\n  height: 215px;\n  overflow: hidden;\n}\n.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n.empty-image[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {\n  background: #faf4e8;\n  height: 0;\n}\n.product-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 1.08rem 1rem 1rem;\n  flex: 1;\n}\n.product-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #243946;\n  font-size: 1.08rem;\n  line-height: 1.18;\n  margin: 0;\n  min-height: 2.55rem;\n}\n.price-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.45rem;\n}\n.price-chip[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #f3eadc;\n  border: 1px solid rgba(179, 125, 90, 0.18);\n  border-radius: 999px;\n  color: #2d4b42;\n  display: inline-flex;\n  gap: 0.35rem;\n  line-height: 1;\n  padding: 0.48rem 0.62rem;\n}\n.price-chip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2f6a7d;\n  font-size: 0.96rem;\n}\n.price-chip[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #74665d;\n  font-size: 0.74rem;\n  font-weight: 700;\n}\n.description[_ngcontent-%COMP%], .ingredients[_ngcontent-%COMP%] {\n  color: #5d6368;\n  font-size: 0.86rem;\n  line-height: 1.42;\n  margin: 0;\n  text-align: justify;\n  text-justify: inter-word;\n}\n.ingredients[_ngcontent-%COMP%] {\n  background: #f7f5ee;\n  border-left: 3px solid #8cab77;\n  padding: 0.55rem 0.65rem;\n}\n.ingredients[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #2d4b42;\n  font-weight: 800;\n}\n.features[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.42rem;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  color: #4d5559;\n  display: flex;\n  font-size: 0.85rem;\n  gap: 0.45rem;\n  line-height: 1.3;\n}\n.features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  color: #8cab77;\n  content: "\\2713";\n  flex: 0 0 auto;\n  font-weight: 900;\n}\n.btn[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #356f82;\n  border: 0;\n  border-radius: 999px;\n  color: #ffffff;\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 0.88rem;\n  font-weight: 800;\n  justify-content: center;\n  margin-top: auto;\n  padding: 0.7rem 1rem;\n  transition: background 0.2s ease, transform 0.2s ease;\n  width: 100%;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background: #b37d5a;\n}\n@media (min-width: 1180px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .products-hero[_ngcontent-%COMP%] {\n    padding: 1.25rem 0 0.35rem !important;\n  }\n  .product-image[_ngcontent-%COMP%] {\n    height: 180px;\n  }\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductsComponent, { className: "ProductsComponent", filePath: "app\\pages\\products\\products.component.ts", lineNumber: 32 });
})();
export {
  ProductsComponent
};
