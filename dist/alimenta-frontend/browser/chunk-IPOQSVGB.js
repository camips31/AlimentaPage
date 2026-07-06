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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MI7MW4BC.js";

// src/app/pages/faq/faq.component.ts
var _forTrack0 = ($index, $item) => $item.question;
function FaqComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function FaqComponent_For_11_Template_button_click_0_listener() {
      const category_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterByCategory(category_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedCategory === category_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r2, " ");
  }
}
function FaqComponent_For_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const faq_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r5.answer);
  }
}
function FaqComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 12);
    \u0275\u0275listener("click", function FaqComponent_For_14_Template_button_click_1_listener() {
      const faq_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFaq(faq_r5));
    });
    \u0275\u0275elementStart(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, FaqComponent_For_14_Conditional_6_Template, 3, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faq_r5 = ctx.$implicit;
    \u0275\u0275classProp("open", faq_r5.isOpen);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r5.question);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r5.isOpen ? "-" : "+");
    \u0275\u0275advance();
    \u0275\u0275conditional(6, faq_r5.isOpen ? 6 : -1);
  }
}
function FaqComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p");
    \u0275\u0275text(2, "No hay preguntas en esta categor\xEDa todav\xEDa.");
    \u0275\u0275elementEnd()();
  }
}
var FaqComponent = class _FaqComponent {
  constructor() {
    this.selectedCategory = "Todas";
    this.categories = [
      "Todas",
      "Consultas",
      "Atenci\xF3n",
      "Pagos y Seguros",
      "General"
    ];
    this.faqs = [
      {
        question: "\xBFC\xF3mo agendo una consulta?",
        answer: "Para agendar una consulta puedes comunicarte a nuestro n\xFAmero de WhatsApp dependiendo de la sucursal que prefieras, en la ciudad de La Paz o en Santa Cruz.",
        isOpen: false,
        category: "Consultas"
      },
      {
        question: "\xBFLa atenci\xF3n es online o presencial?",
        answer: "Tenemos ambas modalidades de atenci\xF3n. Los horarios var\xEDan de acuerdo a la disponibilidad de nuestras nutricionistas.",
        isOpen: false,
        category: "Atenci\xF3n"
      },
      {
        question: "\xBFCu\xE1nto dura una consulta?",
        answer: "Una consulta tiene una duraci\xF3n promedio de 45 a 60 minutos para brindarte una atenci\xF3n de calidad y dise\xF1ar un plan de tratamiento 100% personalizado.",
        isOpen: false,
        category: "Consultas"
      },
      {
        question: "\xBFSe realizan planes personalizados?",
        answer: "S\xED, todos nuestros planes son 100% personalizados, de acuerdo a las necesidades y gustos de cada uno de nuestros pacientes.",
        isOpen: false,
        category: "Atenci\xF3n"
      },
      {
        question: "\xBFAtienden ni\xF1os?",
        answer: "S\xED, tenemos nutricionistas capacitadas para la atenci\xF3n de tu ni\xF1o.",
        isOpen: false,
        category: "Atenci\xF3n"
      },
      {
        question: "\xBFQu\xE9 m\xE9todos de pago aceptan?",
        answer: "Actualmente aceptamos pagos por QR y efectivo.",
        isOpen: false,
        category: "Pagos y Seguros"
      },
      {
        question: "\xBFQu\xE9 pasa si no puedo asistir a una consulta?",
        answer: "Te reagendamos. Tienes la posibilidad de reagendar tu consulta siempre que notifiques tu falta con anticipaci\xF3n.",
        isOpen: false,
        category: "Consultas"
      },
      {
        question: "\xBFOfrecen planes para empresas?",
        answer: "S\xED, seg\xFAn las necesidades o disposici\xF3n de la empresa se elabora un plan especial acorde a la cantidad de personas, a las actividades o con un enfoque de acuerdo a su trabajo.",
        isOpen: false,
        category: "General"
      },
      {
        question: "\xBFNecesito hacer an\xE1lisis de laboratorio?",
        answer: "Es posible que nuestras nutricionistas te soliciten alg\xFAn an\xE1lisis de laboratorio si es necesario para descartar o confirmar alguna patolog\xEDa o deficiencia nutricional.",
        isOpen: false,
        category: "Consultas"
      },
      {
        question: "\xBFTrabajan con seguros m\xE9dicos?",
        answer: "S\xED, actualmente trabajamos con Bisa Seguros y seguros COBEE.",
        isOpen: false,
        category: "Pagos y Seguros"
      },
      {
        question: "\xBFPuedo llevar acompa\xF1ante a la consulta?",
        answer: "Por supuesto. Puedes llevar un acompa\xF1ante a la consulta.",
        isOpen: false,
        category: "Consultas"
      }
    ];
  }
  get filteredFaqs() {
    if (this.selectedCategory === "Todas") {
      return this.faqs;
    }
    return this.faqs.filter((faq) => faq.category === this.selectedCategory);
  }
  toggleFaq(faq) {
    faq.isOpen = !faq.isOpen;
  }
  filterByCategory(category) {
    this.selectedCategory = category;
    this.faqs.forEach((faq) => faq.isOpen = false);
  }
  contactWhatsApp() {
    const phone = "59175000000";
    const message = "Hola! Tengo una pregunta que no encontr\xE9 en las FAQ";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }
  static {
    this.\u0275fac = function FaqComponent_Factory(t) {
      return new (t || _FaqComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqComponent, selectors: [["app-faq"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 1, consts: [[1, "faq-page"], [1, "hero-section"], [1, "container"], [1, "subtitle"], [1, "faq-content"], [1, "categories-filter"], [1, "category-btn", 3, "active"], [1, "faqs-list"], [1, "faq-item", 3, "open"], [1, "no-faqs"], [1, "category-btn", 3, "click"], [1, "faq-item"], [1, "faq-question", 3, "click"], [1, "question-text"], [1, "toggle-icon"], [1, "faq-answer"]], template: function FaqComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4, "Preguntas Frecuentes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Encuentra respuestas a las dudas m\xE1s comunes sobre nuestros servicios");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "section", 4)(8, "div", 2)(9, "div", 5);
        \u0275\u0275repeaterCreate(10, FaqComponent_For_11_Template, 2, 3, "button", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 7);
        \u0275\u0275repeaterCreate(13, FaqComponent_For_14_Template, 7, 5, "div", 8, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, FaqComponent_Conditional_15_Template, 3, 0, "div", 9);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.categories);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.filteredFaqs);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(15, ctx.filteredFaqs.length === 0 ? 15 : -1);
      }
    }, dependencies: [CommonModule], styles: ['\n\n.hero-section[_ngcontent-%COMP%] {\n  background: #fbf2df;\n  padding: 1.25rem 0 1rem;\n  text-align: center;\n}\n.hero-eyebrow[_ngcontent-%COMP%] {\n  color: #b37d5a;\n  display: inline-block;\n  font-size: 0.8rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  margin-bottom: 0.6rem;\n  text-transform: uppercase;\n}\n.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #24485a;\n  font-size: clamp(2rem, 4vw, 3rem);\n  font-weight: 500;\n  line-height: 1.1;\n  margin: 0 0 0.8rem;\n}\n.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after {\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-sand) 0%,\n      #d9a586 52%,\n      var(--brand-sand-soft) 100%);\n  border-radius: 999px;\n  content: "";\n  display: block;\n  height: 4px;\n  margin: 0.65rem auto 0;\n  width: 120px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #5f6670;\n  font-size: 1.08rem;\n  line-height: 1.5;\n  max-width: 720px;\n  margin: 0 auto;\n}\n.faq-content[_ngcontent-%COMP%] {\n  padding: 0 0 80px !important;\n  background: #fbf2df;\n}\n.categories-filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n  margin-bottom: 50px;\n}\n.category-btn[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #e0e0e0;\n  padding: 10px 20px;\n  border-radius: 25px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 0.95rem;\n  color: #666;\n  font-weight: 500;\n}\n.category-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.category-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: white;\n}\n.faqs-list[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n}\n.faq-item[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  margin-bottom: 15px;\n  overflow: hidden;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n  transition: box-shadow 0.3s ease;\n}\n.faq-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\n}\n.faq-item.open[_ngcontent-%COMP%] {\n  box-shadow: 0 5px 20px rgba(107, 142, 35, 0.15);\n}\n.faq-question[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 25px 30px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  transition: background-color 0.3s ease;\n}\n.faq-question[_ngcontent-%COMP%]:hover {\n  background: #fff8ea;\n}\n.faq-item.open[_ngcontent-%COMP%]   .faq-question[_ngcontent-%COMP%] {\n  background: #fff8ea;\n}\n.question-text[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  font-size: 1.15rem;\n  font-weight: 600;\n  flex-grow: 1;\n  padding-right: 20px;\n  line-height: 1.5;\n}\n.toggle-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  color: var(--primary);\n  font-weight: 300;\n  flex-shrink: 0;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: #f3eadc;\n  transition: transform 0.3s ease;\n}\n.faq-item.open[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  background: var(--primary);\n  color: white;\n}\n.faq-answer[_ngcontent-%COMP%] {\n  padding: 0 30px 25px 30px;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n.faq-answer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 1.05rem;\n  line-height: 1.7;\n  margin: 0;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.no-faqs[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.no-faqs[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 1.2rem;\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .subtitle[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .categories-filter[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n  .faq-question[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .question-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .faq-answer[_ngcontent-%COMP%] {\n    padding: 0 20px 20px 20px;\n  }\n  .faq-answer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqComponent, { className: "FaqComponent", filePath: "app\\pages\\faq\\faq.component.ts", lineNumber: 18 });
})();
export {
  FaqComponent
};
