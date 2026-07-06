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

// src/app/pages/plans/plans.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.title;
function PlansComponent_For_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "M\xE1s Elegido");
    \u0275\u0275elementEnd();
  }
}
function PlansComponent_For_11_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2);
  }
}
function PlansComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, PlansComponent_For_11_Conditional_1_Template, 2, 0, "div", 11);
    \u0275\u0275elementStart(2, "div", 12)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 14)(8, "span", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 17)(13, "h4");
    \u0275\u0275text(14, "Incluye:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ul", 18);
    \u0275\u0275repeaterCreate(16, PlansComponent_For_11_For_17_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 19);
    \u0275\u0275listener("click", function PlansComponent_For_11_Template_button_click_18_listener() {
      const plan_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.contactWhatsApp(plan_r3.whatsappMsg));
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r3 = ctx.$implicit;
    \u0275\u0275classProp("popular", plan_r3.isPopular);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, plan_r3.isPopular ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plan_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r3.subtitle);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plan_r3.price);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r3.duration);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(plan_r3.includes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", plan_r3.buttonText, " ");
  }
}
function PlansComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 20)(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const benefit_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(benefit_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r5.description);
  }
}
var PlansComponent = class _PlansComponent {
  constructor() {
    this.plans = [
      {
        id: 1,
        name: "Primera Consulta Nutricional",
        subtitle: "Evaluaci\xF3n inicial integral",
        price: "150 Bs",
        duration: "45 a 60 minutos",
        isPopular: false,
        includes: [
          "Entrevista nutricional completa",
          "Evaluaci\xF3n nutricional mediante metodolog\xEDa ISAK",
          "An\xE1lisis de composici\xF3n corporal",
          "Detecci\xF3n de deficiencias e intolerancias nutricionales",
          "Informe nutricional integral",
          "Revisi\xF3n o solicitud de an\xE1lisis laboratoriales"
        ],
        buttonText: "Reservar Consulta",
        whatsappMsg: "Hola! Quiero reservar una Primera Consulta Nutricional"
      },
      {
        id: 2,
        name: "Plan 1 mes",
        subtitle: "Acompa\xF1amiento personalizado mensual",
        price: "445 Bs",
        duration: "1 mes",
        isPopular: true,
        includes: [
          "Plan de alimentaci\xF3n personalizado",
          "Men\xFA semanal o sistema de intercambios",
          "Recetas saludables",
          "Comunicaci\xF3n v\xEDa WhatsApp",
          "Seguimiento online",
          "1 taller de nutrici\xF3n o medicina del estilo de vida"
        ],
        buttonText: "Quiero este plan",
        whatsappMsg: "Hola! Quiero el Plan 1 mes"
      },
      {
        id: 3,
        name: "Plan 12 semanas",
        subtitle: "Programa de 3 meses para avanzar con seguimiento",
        price: "990 Bs",
        duration: "3 meses",
        isPopular: false,
        includes: [
          "3 planes nutricionales personalizados",
          "Recetas e intercambios saludables",
          "Comunicaci\xF3n v\xEDa WhatsApp",
          "Seguimiento online",
          "4 reconsultas presenciales cada 20 d\xEDas",
          "Evaluaci\xF3n de avances y objetivos",
          "4 talleres de nutrici\xF3n o medicina del estilo de vida",
          "20% de descuento en paquete de 6 barritas"
        ],
        buttonText: "Quiero este plan",
        whatsappMsg: "Hola! Quiero el Plan 12 semanas"
      },
      {
        id: 4,
        name: "M\xE9todo Fit - 12 semanas",
        subtitle: "Nutrici\xF3n, entrenamiento o terapia conductual",
        price: "1.500 Bs",
        duration: "3 meses",
        isPopular: false,
        includes: [
          "3 planes de alimentaci\xF3n personalizados",
          "4 reconsultas cada 20 d\xEDas",
          "Plan de entrenamiento personalizado o sesi\xF3n de terapia conductual psicol\xF3gica",
          "Suplementaci\xF3n incluida: prote\xEDna o Metabolism Booster",
          "Recetas saludables",
          "Comunicaci\xF3n v\xEDa WhatsApp"
        ],
        buttonText: "Quiero este plan",
        whatsappMsg: "Hola! Quiero el M\xE9todo Fit - 12 semanas"
      }
    ];
    this.benefits = [
      {
        icon: "person",
        title: "Atenci\xF3n Personalizada",
        description: "Cada plan se adapta a tus objetivos, h\xE1bitos y necesidades."
      },
      {
        icon: "chat",
        title: "Soporte Continuo",
        description: "Acompa\xF1amiento por WhatsApp durante tu proceso."
      },
      {
        icon: "sync_alt",
        title: "Flexibilidad",
        description: "Opciones presenciales, online y con seguimiento progresivo."
      },
      {
        icon: "monitoring",
        title: "Seguimiento",
        description: "Evaluaci\xF3n de avances y ajustes seg\xFAn tus resultados."
      }
    ];
  }
  contactWhatsApp(message) {
    const phone = "59175000000";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }
  static {
    this.\u0275fac = function PlansComponent_Factory(t) {
      return new (t || _PlansComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlansComponent, selectors: [["app-plans"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 0, consts: [[1, "plans-page"], [1, "hero-section"], [1, "container"], [1, "subtitle"], [1, "plans-section"], [1, "plans-grid"], [1, "plan-card", 3, "popular"], [1, "benefits-section"], [1, "benefits-grid"], [1, "benefit-card"], [1, "plan-card"], [1, "popular-badge"], [1, "plan-header"], [1, "plan-subtitle"], [1, "plan-price"], [1, "price"], [1, "duration"], [1, "plan-body"], [1, "includes-list"], [1, "btn-primary", 3, "click"], [1, "benefit-icon"], [1, "material-icons"]], template: function PlansComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4, "Planes y Servicios para Pacientes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Elige el acompa\xF1amiento que mejor se adapte a tus objetivos");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "section", 4)(8, "div", 2)(9, "div", 5);
        \u0275\u0275repeaterCreate(10, PlansComponent_For_11_Template, 20, 8, "div", 6, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "section", 7)(13, "div", 2)(14, "h2");
        \u0275\u0275text(15, "\xBFPor qu\xE9 elegir nuestros planes?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 8);
        \u0275\u0275repeaterCreate(17, PlansComponent_For_18_Template, 8, 3, "div", 9, _forTrack1);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.plans);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.benefits);
      }
    }, dependencies: [CommonModule], styles: ['\n\n.hero-section[_ngcontent-%COMP%] {\n  background: #fbf2df;\n  padding: 1.25rem 0 1rem;\n  text-align: center;\n}\n.hero-eyebrow[_ngcontent-%COMP%] {\n  color: #b37d5a;\n  display: inline-block;\n  font-size: 0.8rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  margin-bottom: 0.6rem;\n  text-transform: uppercase;\n}\n.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #24485a;\n  font-size: clamp(2rem, 4vw, 3rem);\n  font-weight: 500;\n  line-height: 1.1;\n  margin: 0 0 0.8rem;\n}\n.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after {\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-sand) 0%,\n      #d9a586 52%,\n      var(--brand-sand-soft) 100%);\n  border-radius: 999px;\n  content: "";\n  display: block;\n  height: 4px;\n  margin: 0.65rem auto 0;\n  width: 120px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #5f6670;\n  font-size: 1.08rem;\n  line-height: 1.5;\n  max-width: 720px;\n  margin: 0 auto;\n}\n.plans-section[_ngcontent-%COMP%] {\n  padding: 0 0 42px !important;\n  background: #fbf2df;\n}\n.plans-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 18px;\n  align-items: stretch;\n  max-width: 980px;\n  margin: 0 auto;\n}\n.plan-card[_ngcontent-%COMP%] {\n  --plan-color: var(--primary);\n  --plan-color-dark: var(--primary-dark);\n  --plan-header-bg: #ffffff;\n  --plan-body-bg: #ffffff;\n  --plan-accent: var(--primary);\n  background: var(--plan-body-bg);\n  border: 1px solid rgba(63, 110, 129, 0.14);\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 8px 22px rgba(47, 88, 104, 0.08);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  min-height: 100%;\n}\n.plan-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 12px 26px rgba(47, 88, 104, 0.12);\n}\n.plan-card.popular[_ngcontent-%COMP%] {\n  border: 0;\n}\n.plan-card[_ngcontent-%COMP%]:nth-child(3n+1) {\n  --plan-color: #7aa9c0;\n  --plan-color-dark: var(--primary-dark);\n  --plan-header-bg: #f8fcfd;\n  --plan-body-bg: #ffffff;\n  --plan-accent: var(--primary);\n}\n.plan-card[_ngcontent-%COMP%]:nth-child(3n+2) {\n  --plan-color: var(--primary);\n  --plan-color-dark: var(--primary-dark);\n  --plan-header-bg: #f8fcfd;\n  --plan-body-bg: #ffffff;\n  --plan-accent: var(--primary);\n}\n.plan-card[_ngcontent-%COMP%]:nth-child(3n+3) {\n  --plan-color: var(--brand-sand);\n  --plan-color-dark: #9c7655;\n  --plan-header-bg: #fffaf5;\n  --plan-body-bg: #ffffff;\n  --plan-accent: var(--brand-sand);\n}\n.plan-card[_ngcontent-%COMP%]:nth-child(4) {\n  --plan-header-bg: #f8fcfd;\n  --plan-body-bg: #ffffff;\n  --plan-accent: var(--primary);\n}\n.popular-badge[_ngcontent-%COMP%] {\n  background: var(--brand-sand);\n  color: #ffffff;\n  padding: 5px 18px;\n  position: absolute;\n  top: 10px;\n  right: -32px;\n  transform: rotate(45deg);\n  font-size: 0.72rem;\n  font-weight: 700;\n  box-shadow: none;\n  z-index: 2;\n}\n.plan-header[_ngcontent-%COMP%] {\n  background: var(--plan-header-bg);\n  border-bottom: 1px solid rgba(63, 110, 129, 0.1);\n  border-top: 4px solid var(--plan-accent);\n  padding: 18px 18px 16px !important;\n  text-align: center;\n}\n.plan-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  font-size: 1.16rem !important;\n  line-height: 1.2;\n  margin-bottom: 6px;\n  font-weight: 700;\n}\n.plan-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  font-size: 0.88rem;\n  line-height: 1.35;\n  margin-bottom: 12px;\n}\n.plan-price[_ngcontent-%COMP%] {\n  align-items: center;\n  display: inline-flex;\n  gap: 10px;\n  justify-content: center;\n  margin-top: 4px;\n}\n.price[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 1.55rem;\n  color: var(--plan-accent);\n  font-weight: 700;\n  line-height: 1;\n}\n.duration[_ngcontent-%COMP%] {\n  background: rgba(63, 110, 129, 0.08);\n  border-radius: 999px;\n  display: inline-block;\n  color: var(--text-dark);\n  font-size: 0.78rem;\n  font-weight: 600;\n  margin-top: 0;\n  padding: 4px 10px;\n}\n.plan-body[_ngcontent-%COMP%] {\n  padding: 16px 18px 12px !important;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n.plan-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  font-size: 0.96rem;\n  margin-bottom: 10px;\n  font-weight: 600;\n}\n.includes-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin-bottom: 16px;\n}\n.includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 5px 0 5px 24px;\n  position: relative;\n  color: var(--text-dark);\n  font-size: 0.85rem !important;\n  line-height: 1.35 !important;\n  border-bottom: 1px solid rgba(47, 88, 104, 0.1);\n}\n.includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2713";\n  color: var(--plan-accent);\n  font-weight: bold;\n  font-size: 1rem;\n  position: absolute;\n  left: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--plan-accent);\n  color: white;\n  padding: 10px 18px !important;\n  border: none;\n  border-radius: 30px;\n  font-size: 0.9rem !important;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  width: calc(100% - 48px);\n  margin: 0 24px 24px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  transform: translateY(-2px);\n}\n.benefits-section[_ngcontent-%COMP%] {\n  padding: 54px 0;\n  background: #fbf2df;\n  text-align: center;\n}\n.benefits-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--primary-dark);\n  margin-bottom: 32px;\n}\n.benefits-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 22px;\n}\n.benefit-card[_ngcontent-%COMP%] {\n  padding: 22px;\n}\n.benefit-icon[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  margin-bottom: 15px;\n}\n.benefit-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  font-size: 1.2rem;\n  margin-bottom: 10px;\n}\n.benefit-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1rem;\n  line-height: 1.6;\n}\n.consultation-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary) 100%);\n  color: white;\n  padding: 54px 0;\n  text-align: center;\n}\n.consultation-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 15px;\n  color: #ffffff;\n}\n.consultation-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  margin-bottom: 30px;\n  opacity: 0.95;\n  color: #ffffff;\n}\n.consultation-section[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--primary-dark);\n  width: auto;\n}\n.consultation-section[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n@media (min-width: 1100px) {\n  .plans-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .subtitle[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .plans-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .consultation-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlansComponent, { className: "PlansComponent", filePath: "app\\pages\\plans\\plans.component.ts", lineNumber: 11 });
})();
export {
  PlansComponent
};
