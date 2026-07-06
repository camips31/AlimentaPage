import {
  RouterLink
} from "./chunk-PRNMRTN4.js";
import {
  CommonModule
} from "./chunk-4XT7MOVT.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵtextInterpolate
} from "./chunk-MI7MW4BC.js";

// src/app/pages/companies/companies.component.ts
var _forTrack0 = ($index, $item) => $item.title;
function CompaniesComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const benefit_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(benefit_r1);
  }
}
function CompaniesComponent_For_32_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(service_r3.icon);
  }
}
function CompaniesComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 10)(1, "span", 30)(2, "img", 31);
    \u0275\u0275listener("error", function CompaniesComponent_For_32_Template_img_error_2_listener() {
      const service_r3 = \u0275\u0275restoreView(_r2).$implicit;
      return \u0275\u0275resetView(service_r3.iconPath = "");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CompaniesComponent_For_32_Conditional_3_Template, 2, 1, "span", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 14);
    \u0275\u0275listener("click", function CompaniesComponent_For_32_Template_button_click_8_listener() {
      const service_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.contactWhatsApp(service_r3.title));
    });
    \u0275\u0275text(9, " Pide un presupuesto ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", service_r3.iconPath, \u0275\u0275sanitizeUrl)("alt", service_r3.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, !service_r3.iconPath ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r3.description);
  }
}
function CompaniesComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5);
  }
}
function CompaniesComponent_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const benefit_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(benefit_r6);
  }
}
function CompaniesComponent_For_71_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const paragraph_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(paragraph_r8);
  }
}
function CompaniesComponent_For_71_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r9);
  }
}
function CompaniesComponent_For_71_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275repeaterCreate(1, CompaniesComponent_For_71_Conditional_5_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(section_r10.items);
  }
}
function CompaniesComponent_For_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 19)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, CompaniesComponent_For_71_For_4_Template, 2, 1, "p", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275template(5, CompaniesComponent_For_71_Conditional_5_Template, 3, 0, "ul");
    \u0275\u0275elementStart(6, "button", 14);
    \u0275\u0275listener("click", function CompaniesComponent_For_71_Template_button_click_6_listener() {
      const section_r10 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.contactWhatsApp(section_r10.title));
    });
    \u0275\u0275text(7, " Mas informacion ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r10.title);
    \u0275\u0275advance();
    \u0275\u0275repeater(section_r10.paragraphs);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(5, (section_r10.items == null ? null : section_r10.items.length) ? 5 : -1);
  }
}
function CompaniesComponent_For_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 24);
  }
  if (rf & 2) {
    const photo_r11 = ctx.$implicit;
    \u0275\u0275property("src", photo_r11, \u0275\u0275sanitizeUrl);
  }
}
function CompaniesComponent_For_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const benefit_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(benefit_r12);
  }
}
function CompaniesComponent_For_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "img", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const collaborator_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", collaborator_r13.logo, \u0275\u0275sanitizeUrl)("alt", collaborator_r13.name);
  }
}
var CompaniesComponent = class _CompaniesComponent {
  constructor() {
    this.benefits = [
      "Mayor productividad y rendimiento laboral",
      "Reduccion del ausentismo",
      "Disminucion de enfermedades cronicas y costos asociados",
      "Mejora del clima laboral",
      "Mayor compromiso del personal"
    ];
    this.mainServices = [
      {
        icon: "business_center",
        iconPath: "assets/icons/vegetable-icon (27).png",
        title: "Nutricionista presencial para la empresa",
        description: "Consultas presenciales de 30 minutos, planes de alimentacion personalizados y seguimientos continuos para colaboradores."
      },
      {
        icon: "videocam",
        iconPath: "assets/icons/vegetable-icon (28).png",
        title: "Nutricionista online para la empresa",
        description: "Atencion virtual para empleados remotos mediante videollamada, con el mismo enfoque de consulta, plan y seguimiento."
      },
      {
        icon: "monitor_heart",
        iconPath: "assets/icons/vegetable-icon (29).png",
        title: "Evaluacion nutricional de colaboradores",
        description: "Valoracion integral con mediciones antropometricas, analisis de habitos alimentarios y evaluacion de factores de riesgo."
      },
      {
        icon: "person",
        iconPath: "assets/icons/vegetable-icon (30).png",
        title: "Consultas individuales",
        description: "Atencion personalizada segun objetivos, estado de salud, estilo de vida y requerimientos especificos de cada colaborador."
      },
      {
        icon: "groups",
        iconPath: "assets/icons/vegetable-icon (31).png",
        title: "Talleres de alimentacion saludable",
        description: "Talleres dinamicos y participativos para promover habitos saludables, energia diaria y prevencion nutricional."
      },
      {
        icon: "trending_down",
        iconPath: "assets/icons/vegetable-icon (32).png",
        title: "Programas de perdida de peso",
        description: "Programas estructurados con educacion nutricional, acompanamiento profesional y seguimiento continuo."
      },
      {
        icon: "health_and_safety",
        iconPath: "assets/icons/vegetable-icon (33).png",
        title: "Prevencion de enfermedades",
        description: "Estrategias nutricionales para prevenir y controlar diabetes, hipertension, obesidad, dislipidemias y riesgo cardiovascular."
      },
      {
        icon: "event_available",
        iconPath: "assets/icons/vegetable-icon (34).png",
        title: "Ferias de salud",
        description: "Evaluaciones nutricionales, asesoramiento profesional, actividades educativas y promocion de estilos de vida saludables."
      },
      {
        icon: "fact_check",
        iconPath: "assets/icons/vegetable-icon (35).png",
        title: "Seguimiento nutricional",
        description: "Acompanamiento periodico para evaluar avances, reforzar habitos y ajustar recomendaciones nutricionales."
      }
    ];
    this.audienceItems = [
      "Empresas e instituciones",
      "Embajadas y consulados",
      "Centros educativos y universidades",
      "Organizaciones publicas y privadas",
      "Asociaciones y grupos comunitarios"
    ];
    this.workshopBenefits = [
      "Mejorar los habitos alimentarios de los colaboradores",
      "Reducir el estres asociado a la alimentacion y el estilo de vida",
      "Incrementar energia, concentracion y productividad",
      "Promover una cultura de bienestar dentro de la organizacion",
      "Disminuir factores de riesgo asociados a enfermedades cronicas"
    ];
    this.menuServices = [
      {
        title: "Menus para colegios, guarderias y centros educativos",
        paragraphs: [
          "Disenamos menus balanceados y adecuados para cada etapa de crecimiento, garantizando el aporte nutricional necesario para el desarrollo fisico e intelectual de ninos y adolescentes.",
          "Cumplimos criterios de calidad, variedad y seguridad alimentaria, promoviendo habitos saludables desde edades tempranas."
        ],
        items: [
          "Creacion, revision y supervision de menus",
          "Menus equilibrados, variados y adaptados a productos locales",
          "Adaptacion a alergias, intolerancias u otras condiciones medicas",
          "Calculo nutricional y fichas tecnicas de preparacion",
          "Validacion profesional por nutricionista colegiado/a"
        ]
      },
      {
        title: "Menus para guarderias",
        paragraphs: [
          "La primera infancia es una etapa clave para el desarrollo fisico, cognitivo y la formacion de habitos alimentarios saludables.",
          "Brindamos asesoria nutricional para guarderias y servicios de alimentacion infantil, con menus equilibrados y adaptados a cada grupo etario."
        ],
        items: [
          "Alimentacion basal",
          "Texturas adaptadas y progresion alimentaria",
          "Introduccion de alimentos tradicional o Baby Led Weaning",
          "Alergias, intolerancias y condiciones especificas",
          "Control y seguimiento del servicio de cocina"
        ]
      },
      {
        title: "Menus y asesoramiento para residencias",
        paragraphs: [
          "Creamos, revisamos y supervisamos planificaciones alimentarias para residencias de personas mayores, centros de dia y servicios institucionales.",
          "La alimentacion adecuada en esta etapa contribuye a prevenir y manejar enfermedades cronicas, mantener autonomia y mejorar la calidad de vida."
        ],
        items: [
          "Alimentacion basal y texturas modificadas",
          "Disfagia, diabetes, hipertension e hipercolesterolemia",
          "Dietas vegetarianas o adaptaciones especificas",
          "Informe tecnico, calculo nutricional y fichas tecnicas",
          "Asesoramiento continuo para la mejora de calidad alimentaria"
        ]
      },
      {
        title: "Menus empresariales",
        paragraphs: [
          "Elaboramos menus equilibrados y adaptados a las necesidades de cada empresa, garantizando variedad, calidad nutricional y aceptacion por parte de los colaboradores.",
          "Buscamos mejorar la alimentacion dentro del entorno laboral sin descuidar sabor, practicidad y viabilidad operativa."
        ],
        items: [
          "Talleres nutricionales para colaboradores",
          "Talleres para personal de cocina",
          "Evaluaciones nutricionales individuales",
          "Elaboracion de menus institucionales",
          "Programas de bienestar corporativo"
        ]
      }
    ];
    this.outsourcingBenefits = [
      "Reduccion de costes",
      "Optimizacion del tiempo",
      "Acreditacion con menus equilibrados nutricionales",
      "Asesoramiento dietetico",
      "Incremento de la satisfaccion de los comensales"
    ];
    this.internshipPhotos = [
      "assets/pasantias/Image 2026-06-24 at 20.50.26.jpeg",
      "assets/pasantias/Image 2026-06-26 at 11.10.27.jpeg",
      "assets/pasantias/IMG_20260624_125057.jpg.jpeg",
      "assets/pasantias/IMG_20260624_125159.jpg.jpeg",
      "assets/pasantias/IMG_20260624_125638.jpg.jpeg",
      "assets/pasantias/IMG_20260624_125902.jpg.jpeg",
      "assets/pasantias/IMG_20260624_125920.jpg.jpeg",
      "assets/pasantias/IMG_20260624_125958.jpg.jpeg",
      "assets/pasantias/IMG_20260624_130125.jpg.jpeg"
    ];
    this.collaborators = [
      {
        name: "Bisa Seguros",
        logo: "assets/empresas/bisa.jpg"
      },
      {
        name: "COBEE",
        logo: "assets/empresas/coobee.jpg"
      },
      {
        name: "Bolsa Boliviana de Valores",
        logo: "assets/empresas/Bolsa_Boliviana_de_Valores_logo.svg.webp"
      },
      {
        name: "Univalle",
        logo: "assets/empresas/univalle-bolivia-2022-logo-png_seeklogo-443102.png"
      },
      {
        name: "UMSA",
        logo: "assets/empresas/Logo_Umsa.png"
      },
      {
        name: "Sweet Fit",
        logo: "assets/empresas/sweet-fit.jpg"
      },
      {
        name: "Bolivia TV",
        logo: "assets/empresas/bolivia.TV.jpg"
      },
      {
        name: "Pulso de la Tarde",
        logo: "assets/empresas/pulso.jpg"
      },
      {
        name: "Canal PTV",
        logo: "assets/empresas/ptv.jpg"
      },
      {
        name: "Embajada Britanica",
        logo: "assets/empresas/embaja.britanica.jpg"
      }
    ];
  }
  contactWhatsApp(subject = "planes y servicios para empresas") {
    const phone = "59177731818";
    const message = `Hola! Quiero mas informacion sobre ${subject}.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  }
  static {
    this.\u0275fac = function CompaniesComponent_Factory(t) {
      return new (t || _CompaniesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompaniesComponent, selectors: [["app-companies"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 104, vars: 0, consts: [[1, "companies-page"], [1, "companies-hero"], [1, "container"], [1, "intro-section"], [1, "intro-grid"], [1, "intro-card"], [1, "intro-card", "accent"], [1, "alimenta-section"], [1, "section-heading"], [1, "services-grid"], [1, "service-card"], [1, "workshops-section"], [1, "workshop-grid"], [1, "benefit-panel"], ["type", "button", 3, "click"], [1, "team-note"], ["routerLink", "/sobre-nosotros"], [1, "menus-section"], [1, "menu-grid"], [1, "menu-card"], [1, "internships-section"], [1, "internships-layout"], [1, "internships-copy"], [1, "internships-gallery"], ["alt", "Pasant\xEDas Alimenta", "loading", "lazy", 3, "src"], [1, "outsourcing-section"], [1, "outsourcing-list"], [1, "collaborators-section"], [1, "collaborators-grid"], [1, "collaborator-item"], [1, "service-icon"], [3, "error", "src", "alt"], [1, "material-icons"], [3, "src", "alt"]], template: function CompaniesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4, "Planes y Servicios para Empresas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Empresas saludables en Bolivia con programas de nutricion, bienestar corporativo y menus institucionales.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "section", 3)(8, "div", 2)(9, "div", 4)(10, "article", 5)(11, "h2");
        \u0275\u0275text(12, "Que es una empresa saludable");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p");
        \u0275\u0275text(14, " Una empresa saludable promueve el bienestar integral de sus colaboradores mediante acciones orientadas a la prevencion, el cuidado de la salud y la mejora de los habitos de vida. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p");
        \u0275\u0275text(16, " Las empresas que invierten en salud laboral contribuyen a reducir el ausentismo, mejorar la productividad y fortalecer el compromiso de sus equipos. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "article", 6)(18, "h2");
        \u0275\u0275text(19, "Por que invertir en bienestar corporativo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "ul");
        \u0275\u0275repeaterCreate(21, CompaniesComponent_For_22_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(23, "section", 7)(24, "div", 2)(25, "div", 8)(26, "h2");
        \u0275\u0275text(27, "Alimenta Empresas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p");
        \u0275\u0275text(29, " Desarrollamos programas de nutricion y bienestar corporativo adaptados a empresas e instituciones en Bolivia. Trabajamos junto a Recursos Humanos, Seguridad y Salud Ocupacional y Responsabilidad Social Empresarial. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 9);
        \u0275\u0275repeaterCreate(31, CompaniesComponent_For_32_Template, 10, 5, "article", 10, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "section", 11)(34, "div", 2)(35, "div", 12)(36, "article")(37, "h2");
        \u0275\u0275text(38, "Charlas de bienestar y alimentacion saludable");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "p");
        \u0275\u0275text(40, " Ofrecemos conferencias educativas sobre nutricion, salud integral, manejo del estres, habitos saludables y calidad de vida. Tambien disenamos charlas personalizadas segun las necesidades de cada institucion. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "h3");
        \u0275\u0275text(42, "A quienes estan dirigidas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "ul");
        \u0275\u0275repeaterCreate(44, CompaniesComponent_For_45_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "article", 13)(47, "h3");
        \u0275\u0275text(48, "Beneficios");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "ul");
        \u0275\u0275repeaterCreate(50, CompaniesComponent_For_51_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "button", 14);
        \u0275\u0275listener("click", function CompaniesComponent_Template_button_click_52_listener() {
          return ctx.contactWhatsApp("charlas y talleres corporativos");
        });
        \u0275\u0275text(53, " Quiero contactar con alguien ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(54, "section", 15)(55, "div", 2)(56, "h2");
        \u0275\u0275text(57, "Equipo especializado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "p");
        \u0275\u0275text(59, " Contamos con un equipo multidisciplinario de nutricionistas y profesionales de la salud con experiencia en nutricion clinica, deportiva, salud metabolica y psicologia aplicada a la conducta alimentaria. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "a", 16);
        \u0275\u0275text(61, "Conoce a los profesionales");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(62, "section", 17)(63, "div", 2)(64, "div", 8)(65, "h2");
        \u0275\u0275text(66, "Menus institucionales y servicios especializados");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "p");
        \u0275\u0275text(68, " Asesoria en menus para colegios, guarderias, centros educativos, residencias y empresas. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 18);
        \u0275\u0275repeaterCreate(70, CompaniesComponent_For_71_Template, 8, 2, "article", 19, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "section", 20)(73, "div", 2)(74, "div", 21)(75, "div", 22)(76, "h2");
        \u0275\u0275text(77, "Pasant\xEDas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "p");
        \u0275\u0275text(79, " En Alimenta tambi\xE9n abrimos espacios de aprendizaje para estudiantes que desean acercarse a la pr\xE1ctica profesional en nutrici\xF3n, educaci\xF3n alimentaria y bienestar integral. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "p");
        \u0275\u0275text(81, " Actualmente, alumnos de Univalle realizan pasant\xEDas acompa\xF1ando actividades formativas y procesos supervisados por nuestro equipo profesional. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "div", 23);
        \u0275\u0275repeaterCreate(83, CompaniesComponent_For_84_Template, 1, 1, "img", 24, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(85, "section", 25)(86, "div", 2)(87, "h2");
        \u0275\u0275text(88, "Beneficios de externalizar el servicio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div", 26);
        \u0275\u0275repeaterCreate(90, CompaniesComponent_For_91_Template, 2, 1, "span", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "button", 14);
        \u0275\u0275listener("click", function CompaniesComponent_Template_button_click_92_listener() {
          return ctx.contactWhatsApp("servicios empresariales e institucionales");
        });
        \u0275\u0275text(93, " Pidenos un presupuesto ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(94, "section", 27)(95, "div", 2)(96, "div", 8)(97, "h2");
        \u0275\u0275text(98, "Empresas que confian en nosotros");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "p");
        \u0275\u0275text(100, "Instituciones, marcas y medios que han trabajado con Alimenta.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(101, "div", 28);
        \u0275\u0275repeaterCreate(102, CompaniesComponent_For_103_Template, 2, 2, "div", 29, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(21);
        \u0275\u0275repeater(ctx.benefits);
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.mainServices);
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.audienceItems);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.workshopBenefits);
        \u0275\u0275advance(20);
        \u0275\u0275repeater(ctx.menuServices);
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.internshipPhotos);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.outsourcingBenefits);
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.collaborators);
      }
    }, dependencies: [CommonModule, RouterLink], styles: ['\n\n.companies-page[_ngcontent-%COMP%] {\n  background: #fbf2df;\n  min-height: 100vh;\n}\n.companies-hero[_ngcontent-%COMP%] {\n  background: #fbf2df;\n  padding: 1rem 0 0.5rem !important;\n  text-align: center;\n}\n.companies-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #24485a;\n  font-size: clamp(1.85rem, 3.4vw, 2.6rem);\n  font-weight: 500;\n  line-height: 1.1;\n  margin: 0 0 0.55rem;\n}\n.companies-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after {\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-sand) 0%,\n      #d9a586 52%,\n      var(--brand-sand-soft) 100%);\n  border-radius: 999px;\n  content: "";\n  display: block;\n  height: 3px;\n  margin: 0.5rem auto 0;\n  width: 105px;\n}\n.companies-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5f6670;\n  font-size: 0.92rem;\n  line-height: 1.42;\n  margin: 0 auto;\n  max-width: 760px;\n}\n.intro-section[_ngcontent-%COMP%], .alimenta-section[_ngcontent-%COMP%], .workshops-section[_ngcontent-%COMP%], .menus-section[_ngcontent-%COMP%], .internships-section[_ngcontent-%COMP%], .outsourcing-section[_ngcontent-%COMP%], .collaborators-section[_ngcontent-%COMP%], .team-note[_ngcontent-%COMP%] {\n  background: #fbf2df;\n  padding: 1.55rem 0;\n}\n.intro-section[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n.intro-grid[_ngcontent-%COMP%], .workshop-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.intro-card[_ngcontent-%COMP%], .benefit-panel[_ngcontent-%COMP%], .team-note[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%], .menu-card[_ngcontent-%COMP%], .service-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.94);\n  border: 1px solid rgba(63, 110, 129, 0.14);\n  border-radius: 8px;\n  box-shadow: 0 8px 18px rgba(52, 80, 68, 0.07);\n}\n.intro-card[_ngcontent-%COMP%], .benefit-panel[_ngcontent-%COMP%] {\n  padding: 0.95rem;\n}\n.intro-card.accent[_ngcontent-%COMP%] {\n  background: #fff8ea;\n}\nh2[_ngcontent-%COMP%] {\n  color: #24485a;\n  font-size: clamp(1.35rem, 2vw, 1.8rem);\n  font-weight: 600;\n  line-height: 1.15;\n  margin: 0 0 0.6rem;\n}\nh3[_ngcontent-%COMP%] {\n  color: #243946;\n  font-size: 0.98rem;\n  line-height: 1.25;\n  margin: 0 0 0.42rem;\n}\np[_ngcontent-%COMP%] {\n  color: #5f666b;\n  font-size: 0.84rem;\n  line-height: 1.42;\n  margin: 0 0 0.55rem;\n}\n.intro-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .service-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .workshop-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .team-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .menu-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .internships-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n  text-justify: inter-word;\n}\n.companies-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\nul[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.32rem;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\nli[_ngcontent-%COMP%] {\n  color: #4d5559;\n  font-size: 0.82rem;\n  line-height: 1.3;\n  padding-left: 1.05rem;\n  position: relative;\n}\nli[_ngcontent-%COMP%]::before {\n  color: #8cab77;\n  content: "\\2713";\n  font-weight: 900;\n  left: 0;\n  position: absolute;\n}\n.section-heading[_ngcontent-%COMP%] {\n  margin: 0 auto 1rem;\n  max-width: 880px;\n  text-align: center;\n}\n.services-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.service-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0.85rem;\n  text-align: left;\n}\n.service-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #fff8ea;\n  border-radius: 999px;\n  display: inline-flex;\n  height: 42px;\n  justify-content: center;\n  margin-bottom: 0.45rem;\n  width: 42px;\n}\n.service-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 26px;\n  object-fit: contain;\n  width: 26px;\n}\n.service-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #b37d5a;\n  font-size: 1.45rem;\n}\nbutton[_ngcontent-%COMP%], .team-note[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #356f82;\n  border: 0;\n  border-radius: 999px;\n  color: #ffffff;\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 0.78rem;\n  font-weight: 800;\n  justify-content: center;\n  margin-top: auto;\n  padding: 0.58rem 0.85rem;\n  text-decoration: none;\n}\nbutton[_ngcontent-%COMP%]:hover, .team-note[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #b37d5a;\n}\n.workshop-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:first-child {\n  padding-right: 1rem;\n}\n.benefit-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  width: 100%;\n}\n.team-note[_ngcontent-%COMP%] {\n  padding: 0 0 1.55rem;\n}\n.team-note[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: center;\n}\n.team-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 850px;\n}\n.menu-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.menu-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0.9rem;\n}\n.menu-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n}\n.outsourcing-section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.internships-layout[_ngcontent-%COMP%] {\n  align-items: center;\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 0.85fr 1.15fr;\n}\n.internships-copy[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.94);\n  border: 1px solid rgba(63, 110, 129, 0.14);\n  border-radius: 8px;\n  box-shadow: 0 8px 18px rgba(52, 80, 68, 0.07);\n  padding: 1rem;\n}\n.internships-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.internships-gallery[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.45rem;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.internships-gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  aspect-ratio: 4 / 3;\n  border-radius: 8px;\n  box-shadow: 0 8px 18px rgba(52, 80, 68, 0.08);\n  display: block;\n  height: 100%;\n  object-fit: cover;\n  width: 100%;\n}\n.outsourcing-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.45rem;\n  justify-content: center;\n  margin: 0.8rem auto 1rem;\n  max-width: 920px;\n}\n.outsourcing-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid rgba(179, 125, 90, 0.18);\n  border-radius: 999px;\n  color: #2d4b42;\n  font-size: 0.78rem;\n  font-weight: 700;\n  padding: 0.45rem 0.65rem;\n}\n.collaborators-section[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n.collaborators-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n}\n.collaborator-item[_ngcontent-%COMP%] {\n  align-items: center;\n  background: rgba(255, 255, 255, 0.94);\n  border: 1px solid rgba(63, 110, 129, 0.12);\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  min-height: 78px;\n  padding: 0.65rem;\n}\n.collaborator-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 7px;\n  display: block;\n  max-height: 46px;\n  max-width: 100%;\n  object-fit: contain;\n}\n@media (max-width: 980px) {\n  .services-grid[_ngcontent-%COMP%], .menu-grid[_ngcontent-%COMP%], .intro-grid[_ngcontent-%COMP%], .workshop-grid[_ngcontent-%COMP%], .internships-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .workshop-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:first-child {\n    padding-right: 0;\n  }\n  .collaborators-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 560px) {\n  .collaborators-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompaniesComponent, { className: "CompaniesComponent", filePath: "app\\pages\\companies\\companies.component.ts", lineNumber: 33 });
})();
export {
  CompaniesComponent
};
