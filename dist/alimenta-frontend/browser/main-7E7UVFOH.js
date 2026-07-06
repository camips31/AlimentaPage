import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-PRNMRTN4.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-4XT7MOVT.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtrustConstantResourceUrl
} from "./chunk-MI7MW4BC.js";

// src/app/shared/header/header.component.ts
var _c0 = () => ({ exact: true });
var HeaderComponent = class _HeaderComponent {
  constructor() {
    this.menuOpen = false;
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
  }
  static {
    this.\u0275fac = function HeaderComponent_Factory(t) {
      return new (t || _HeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 6, consts: [[1, "header"], [1, "container"], [1, "navbar"], [1, "logo"], ["routerLink", "/", 3, "click"], ["src", "assets/logoazul.png", "alt", "Alimenta", 1, "logo-img"], [1, "menu-toggle", 3, "click"], [1, "nav-menu"], ["routerLink", "/", "routerLinkActive", "active", 3, "click", "routerLinkActiveOptions"], ["routerLink", "/sobre-nosotros", "routerLinkActive", "active", 3, "click"], ["routerLink", "/servicios", "routerLinkActive", "active", 3, "click"], ["routerLink", "/planes", "routerLinkActive", "active", 3, "click"], ["routerLink", "/productos", "routerLinkActive", "active", 3, "click"], ["routerLink", "/empresas", "routerLinkActive", "active", 3, "click"], ["routerLink", "/blog", "routerLinkActive", "active", 3, "click"], ["routerLink", "/faq", "routerLinkActive", "active", 3, "click"], ["routerLink", "/contacto", "routerLinkActive", "active", 3, "click"], [1, "nav-cta"], ["href", "https://wa.me/59177731818?text=Hola%2C%20quiero%20agendar%20una%20consulta", "target", "_blank", 1, "btn", "btn-primary", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "nav", 2)(3, "div", 3)(4, "a", 4);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_4_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "button", 6);
        \u0275\u0275listener("click", function HeaderComponent_Template_button_click_6_listener() {
          return ctx.toggleMenu();
        });
        \u0275\u0275element(7, "span")(8, "span")(9, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "ul", 7)(11, "li")(12, "a", 8);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_12_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(13, " Inicio ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "li")(15, "a", 9);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_15_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(16, " Sobre Nosotros ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "li")(18, "a", 10);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_18_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(19, " Servicios ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "li")(21, "a", 11);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_21_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(22, " Programas ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "li")(24, "a", 12);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_24_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(25, " Productos ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "li")(27, "a", 13);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_27_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(28, " Empresas ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "li")(30, "a", 14);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_30_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(31, " Blog ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "li")(33, "a", 15);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_33_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(34, " FAQ ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "li")(36, "a", 16);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_36_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(37, " Contacto ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "li", 17)(39, "a", 18);
        \u0275\u0275listener("click", function HeaderComponent_Template_a_click_39_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(40, " Agenda Tu Cita ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.menuOpen);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.menuOpen);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c0));
      }
    }, dependencies: [CommonModule, RouterLink, RouterLinkActive], styles: ['\n\n.header[_ngcontent-%COMP%] {\n  background-color: var(--bg-cream);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  width: 100%;\n  border-bottom: 1px solid rgba(63, 110, 129, 0.06);\n}\n.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1420px;\n}\n.navbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  min-height: 108px;\n  padding: 0.75rem 0;\n  gap: clamp(3rem, 6vw, 7rem);\n}\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  line-height: 1;\n}\n.logo-img[_ngcontent-%COMP%] {\n  height: 86px;\n  width: auto;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--primary);\n  font-family: "Poppins", sans-serif;\n  letter-spacing: 0.02em;\n}\n.logo-tagline[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--text-muted);\n  margin-top: 2px;\n  letter-spacing: 0.05em;\n}\n.nav-menu[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  align-items: center;\n  gap: 1.65rem;\n}\n.nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n  color: #173545;\n  transition: var(--transition);\n  padding: 0.35rem 0;\n  position: relative;\n  white-space: nowrap;\n}\n.nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #c59a7c;\n}\n.nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -5px;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background-color: #c59a7c;\n}\n.nav-cta[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.nav-cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 42px;\n  min-width: 160px;\n  padding: 0.45rem 2.2rem;\n  font-size: 1rem;\n  font-weight: 700;\n  background-color: var(--primary);\n  color: #ffffff;\n  border: none;\n  border-radius: var(--radius-pill);\n  line-height: 1;\n  white-space: nowrap;\n  box-shadow: none;\n}\n.nav-menu[_ngcontent-%COMP%]   .nav-cta[_ngcontent-%COMP%]   a.btn[_ngcontent-%COMP%], .nav-menu[_ngcontent-%COMP%]   .nav-cta[_ngcontent-%COMP%]   a.btn[_ngcontent-%COMP%]:visited, .nav-menu[_ngcontent-%COMP%]   .nav-cta[_ngcontent-%COMP%]   a.btn.active[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.nav-menu[_ngcontent-%COMP%]   .nav-cta[_ngcontent-%COMP%]   a.btn[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.nav-cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-dark);\n  color: #ffffff;\n  transform: none;\n  box-shadow: none;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  gap: 4px;\n}\n.menu-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 3px;\n  background-color: var(--text-dark);\n  transition: var(--transition);\n  border-radius: 2px;\n}\n.menu-toggle.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotate(45deg) translate(5px, 5px);\n}\n.menu-toggle.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n.menu-toggle.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(-45deg) translate(7px, -6px);\n}\n@media (max-width: 1200px) {\n  .navbar[_ngcontent-%COMP%] {\n    gap: 2rem;\n  }\n  .logo-img[_ngcontent-%COMP%] {\n    height: 72px;\n  }\n  .nav-menu[_ngcontent-%COMP%] {\n    gap: 1.1rem;\n  }\n  .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .nav-cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    min-height: 40px;\n    min-width: 178px;\n    padding: 0.45rem 2rem;\n    font-size: 0.92rem;\n  }\n}\n@media (max-width: 968px) {\n  .navbar[_ngcontent-%COMP%] {\n    min-height: 82px;\n  }\n  .logo-img[_ngcontent-%COMP%] {\n    height: 58px;\n  }\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .nav-menu[_ngcontent-%COMP%] {\n    position: fixed;\n    left: -100%;\n    top: 82px;\n    flex-direction: column;\n    background-color: var(--bg-cream);\n    width: 100%;\n    text-align: center;\n    transition: 0.3s;\n    box-shadow: var(--shadow-lg);\n    padding: 2rem 0;\n    gap: 0;\n  }\n  .nav-menu.active[_ngcontent-%COMP%] {\n    left: 0;\n  }\n  .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    padding: 1rem;\n    width: 100%;\n  }\n  .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .nav-cta[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 1rem;\n    padding: 0 2rem;\n  }\n  .nav-cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 42px;\n  }\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "app\\shared\\header\\header.component.ts", lineNumber: 12 });
})();

// src/app/shared/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  constructor() {
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.socialLinks = {
      instagram: "https://www.instagram.com/alimenta.bol?igsh=am82MzF6aW9xcjln",
      facebook: "https://www.facebook.com/share/1LCzxk5mQx/",
      tiktok: "https://www.tiktok.com/@alimenta.bol?_r=1&_t=ZS-97UYWM1TIE0"
    };
  }
  static {
    this.\u0275fac = function FooterComponent_Factory(t) {
      return new (t || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 46, vars: 4, consts: [[1, "footer"], [1, "container"], [1, "footer-grid"], [1, "footer-col"], [1, "footer-links"], ["routerLink", "/terminos-de-uso"], ["routerLink", "/aviso-legal"], [1, "footer-note"], ["routerLink", "/contacto", 1, "footer-cta"], [1, "social-links"], ["target", "_blank", "rel", "noopener", "aria-label", "Facebook", 3, "href"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"], ["target", "_blank", "rel", "noopener", "aria-label", "Instagram", 3, "href"], ["d", "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"], ["target", "_blank", "rel", "noopener", "aria-label", "TikTok", 3, "href"], ["d", "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"], [1, "footer-col", "map-stack"], [1, "footer-map"], ["src", \u0275\u0275trustConstantResourceUrl`https://www.google.com/maps?q=-16.5124489,-68.1254433&z=16&output=embed`, "width", "100%", "height", "74", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0"], ["src", \u0275\u0275trustConstantResourceUrl`https://www.google.com/maps?q=Santa%20Cruz%20Avenida%20Beni%20calle%20Guapomo%20Pediatrics%20Centro%20Medico&z=16&output=embed`, "width", "100%", "height", "74", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0"], [1, "footer-form", 3, "submit"], ["type", "text", "placeholder", "Nombre", 1, "footer-input"], ["type", "email", "placeholder", "Email", 1, "footer-input"], ["placeholder", "Enviar Mensaje", "rows", "2", 1, "footer-input", "footer-textarea"], ["type", "submit", 1, "footer-submit"], [1, "footer-bottom"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4");
        \u0275\u0275text(5, "Ubicaci\xF3n y Contacto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "ul", 4)(7, "li")(8, "a", 5);
        \u0275\u0275text(9, "T\xE9rminos de Uso");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "li")(11, "a", 6);
        \u0275\u0275text(12, "Aviso Legal");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "p", 7);
        \u0275\u0275text(14, " Empieza hoy a construir una mejor relaci\xF3n con tu alimentaci\xF3n y tu salud. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 8);
        \u0275\u0275text(16, "Agenda tu consulta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 9)(18, "a", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(19, "svg", 11);
        \u0275\u0275element(20, "path", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(21, "a", 13);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(22, "svg", 11);
        \u0275\u0275element(23, "path", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(24, "a", 15);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(25, "svg", 11);
        \u0275\u0275element(26, "path", 16);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(27, "div", 17)(28, "div", 18)(29, "span");
        \u0275\u0275text(30, "Sucursal La Paz");
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "iframe", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 18)(33, "span");
        \u0275\u0275text(34, "Sucursal Santa Cruz");
        \u0275\u0275elementEnd();
        \u0275\u0275element(35, "iframe", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 3)(37, "form", 21);
        \u0275\u0275listener("submit", function FooterComponent_Template_form_submit_37_listener($event) {
          return $event.preventDefault();
        });
        \u0275\u0275element(38, "input", 22)(39, "input", 23)(40, "textarea", 24);
        \u0275\u0275elementStart(41, "button", 25);
        \u0275\u0275text(42, "Enviar Mensaje");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(43, "div", 26)(44, "p");
        \u0275\u0275text(45);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275property("href", ctx.socialLinks.facebook, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275property("href", ctx.socialLinks.instagram, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275property("href", ctx.socialLinks.tiktok, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " Alimenta - Centro de Nutrici\xF3n. Todos los derechos reservados.");
      }
    }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.footer[_ngcontent-%COMP%] {\n  background-color: var(--primary);\n  color: #fff;\n  margin-top: 0;\n  padding: 1rem 0 0.8rem;\n}\n.footer-grid[_ngcontent-%COMP%] {\n  align-items: start;\n  display: grid;\n  column-gap: 1.6rem;\n  row-gap: 1rem;\n  grid-template-columns: 0.86fr 0.9fr 0.82fr;\n  margin-bottom: 0.75rem;\n}\n.footer-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 0.92rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem;\n}\n.footer-links[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0 0 0.55rem;\n  padding: 0;\n}\n.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.28rem;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.86);\n  font-size: 0.8rem;\n  text-decoration: none;\n  transition: var(--transition);\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--accent);\n}\n.footer-note[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.74);\n  font-size: 0.76rem;\n  line-height: 1.4;\n  margin: 0.6rem 0 0;\n  max-width: 260px;\n}\n.footer-cta[_ngcontent-%COMP%] {\n  align-items: center;\n  background: rgba(255, 255, 255, 0.14);\n  border-radius: 999px;\n  color: #fff;\n  display: inline-flex;\n  font-size: 0.76rem;\n  font-weight: 800;\n  margin-top: 0.62rem;\n  padding: 0.42rem 0.72rem;\n  text-decoration: none;\n  transition: var(--transition);\n}\n.footer-cta[_ngcontent-%COMP%]:hover {\n  background: var(--accent);\n}\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 0.65rem;\n}\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.15);\n  border-radius: 50%;\n  color: #fff;\n  display: flex;\n  height: 28px;\n  justify-content: center;\n  transition: var(--transition);\n  width: 28px;\n}\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--accent);\n  transform: translateY(-2px);\n}\n.map-stack[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.42rem;\n  max-width: 420px;\n}\n.footer-map[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  width: 100%;\n}\n.footer-map[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.92);\n  display: block;\n  font-size: 0.72rem;\n  font-weight: 800;\n  line-height: 1;\n  padding: 0.34rem 0.5rem 0.26rem;\n}\n.footer-map[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  display: block;\n}\n.footer-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.42rem;\n  margin-left: auto;\n  max-width: 360px;\n  min-height: 248px;\n}\n.footer-input[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.95);\n  border: none;\n  border-radius: var(--radius-sm);\n  color: var(--text-dark);\n  font-family: var(--font-family);\n  font-size: 0.82rem;\n  outline: none;\n  padding: 8px 12px;\n  width: 100%;\n}\n.footer-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-soft);\n}\n.footer-textarea[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 112px;\n  resize: vertical;\n}\n.footer-submit[_ngcontent-%COMP%] {\n  background-color: var(--primary-dark);\n  border: 1px solid rgba(255, 255, 255, 0.24);\n  border-radius: var(--radius-sm);\n  color: #fff;\n  cursor: pointer;\n  font-family: var(--font-family);\n  font-size: 0.84rem;\n  font-weight: 700;\n  margin-top: 0;\n  min-height: 42px;\n  padding: 9px 16px;\n  transition: var(--transition);\n}\n.footer-submit[_ngcontent-%COMP%]:hover {\n  background-color: var(--accent);\n  border-color: var(--accent);\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.14);\n  padding-top: 0.65rem;\n  text-align: center;\n}\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.72);\n  font-size: 0.76rem;\n  margin: 0;\n}\n@media (max-width: 968px) {\n  .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "app\\shared\\footer\\footer.component.ts", lineNumber: 12 });
})();

// src/app/shared/whatsapp-button/whatsapp-button.component.ts
var WhatsappButtonComponent = class _WhatsappButtonComponent {
  static {
    this.\u0275fac = function WhatsappButtonComponent_Factory(t) {
      return new (t || _WhatsappButtonComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WhatsappButtonComponent, selectors: [["app-whatsapp-button"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 0, consts: [["href", "https://wa.me/59177731818?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20Alimenta", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Contactar por WhatsApp", 1, "whatsapp-float"], ["width", "28", "height", "28", "viewBox", "0 0 32 32", "fill", "currentColor"], ["d", "M27.281 4.65C24.563 1.906 20.906 0.406 17 0.406c-7.719 0-14 6.25-14 13.938 0 2.469 0.656 4.875 1.875 7l-2 7.281 7.469-1.969c2.031 1.094 4.313 1.687 6.656 1.687 7.719 0 14-6.25 14-13.969 0-3.719-1.469-7.219-4.125-9.813zM17 25.406c-2.094 0-4.156-0.563-5.938-1.625l-0.438-0.25-4.469 1.188 1.219-4.375-0.281-0.438c-1.156-1.875-1.781-4-1.781-6.156 0-6.406 5.219-11.625 11.656-11.625 3.125 0 6.031 1.219 8.219 3.438 2.188 2.188 3.406 5.094 3.406 8.188 0.031 6.438-5.188 11.656-11.594 11.656zM23.594 19.344c-0.344-0.188-2.094-1.031-2.406-1.156-0.344-0.094-0.594-0.156-0.844 0.156-0.25 0.344-0.969 1.156-1.188 1.406-0.219 0.25-0.438 0.281-0.781 0.094-0.344-0.188-1.469-0.531-2.781-1.719-1.031-0.906-1.719-2.031-1.906-2.375-0.219-0.344-0.031-0.531 0.156-0.719 0.156-0.156 0.344-0.406 0.531-0.625 0.156-0.188 0.219-0.344 0.344-0.563 0.094-0.25 0.031-0.469-0.031-0.656-0.063-0.188-0.844-2.031-1.156-2.781-0.281-0.719-0.594-0.625-0.844-0.625-0.219 0-0.469-0.031-0.719-0.031s-0.656 0.094-1 0.438c-0.344 0.344-1.281 1.25-1.281 3.063s1.313 3.531 1.5 3.781c0.188 0.25 2.469 3.781 6.031 5.281 0.844 0.375 1.5 0.594 2.031 0.781 0.844 0.25 1.625 0.219 2.219 0.125 0.688-0.094 2.094-0.844 2.375-1.688 0.281-0.844 0.281-1.563 0.219-1.688-0.094-0.156-0.344-0.25-0.688-0.438z"]], template: function WhatsappButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(1, "svg", 1);
        \u0275\u0275element(2, "path", 2);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [CommonModule], styles: ["\n\n.whatsapp-float[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 18px;\n  right: 18px;\n  background-color: #2f7a55;\n  color: white;\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 8px 18px rgba(38, 83, 65, 0.28);\n  z-index: 1000;\n  transition: all 0.3s ease;\n  animation: _ngcontent-%COMP%_pulse 2.8s infinite;\n}\n.whatsapp-float[_ngcontent-%COMP%]:hover {\n  background-color: #3f8a63;\n  transform: translateY(-2px) scale(1.04);\n  box-shadow: 0 10px 22px rgba(38, 83, 65, 0.34);\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    box-shadow: 0 8px 18px rgba(38, 83, 65, 0.24);\n  }\n  50% {\n    box-shadow: 0 8px 22px rgba(47, 122, 85, 0.4);\n  }\n  100% {\n    box-shadow: 0 8px 18px rgba(38, 83, 65, 0.24);\n  }\n}\n@media (max-width: 768px) {\n  .whatsapp-float[_ngcontent-%COMP%] {\n    width: 46px;\n    height: 46px;\n    bottom: 14px;\n    right: 14px;\n  }\n  .whatsapp-float[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WhatsappButtonComponent, { className: "WhatsappButtonComponent", filePath: "app\\shared\\whatsapp-button\\whatsapp-button.component.ts", lineNumber: 72 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor() {
    this.title = "Alimenta - Centro de Nutrici\xF3n";
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "main");
        \u0275\u0275element(2, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "app-footer")(4, "app-whatsapp-button");
      }
    }, dependencies: [
      RouterOutlet,
      HeaderComponent,
      FooterComponent,
      WhatsappButtonComponent
    ], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 80px);\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "app\\app.component.ts", lineNumber: 30 });
})();

// src/app/pages/home/home.component.ts
function HomeComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275element(2, "img", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 35)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 36);
    \u0275\u0275text(9, "add_circle");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const prof_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275styleProp("--lineup-index", i_r4);
    \u0275\u0275classProp("hero-professional-cecilia", prof_r3.id === "cecilia-monterrey");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", prof_r3.image, \u0275\u0275sanitizeUrl)("alt", prof_r3.name);
    \u0275\u0275advance();
    \u0275\u0275property("href", "/sobre-nosotros#" + prof_r3.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", "Ver perfil de " + prof_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prof_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prof_r3.specialty);
  }
}
function HomeComponent_div_23_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 40);
  }
  if (rf & 2) {
    const s_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", s_r5.iconPath, \u0275\u0275sanitizeUrl)("alt", s_r5.title);
  }
}
function HomeComponent_div_23_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r5.icon);
  }
}
function HomeComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275template(2, HomeComponent_div_23_img_2_Template, 1, 2, "img", 39)(3, HomeComponent_div_23_ng_template_3_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const materialSpecialtyIcon_r7 = \u0275\u0275reference(4);
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background-color", ctx_r7.panelColors[i_r6 % ctx_r7.panelColors.length]);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r5.iconPath)("ngIfElse", materialSpecialtyIcon_r7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.description);
  }
}
function HomeComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r9.description);
  }
}
function HomeComponent_div_37_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 40);
  }
  if (rf & 2) {
    const benefit_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", benefit_r10.iconPath, \u0275\u0275sanitizeUrl)("alt", benefit_r10.title);
  }
}
function HomeComponent_div_37_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const benefit_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(benefit_r10.icon);
  }
}
function HomeComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44);
    \u0275\u0275template(2, HomeComponent_div_37_img_2_Template, 1, 2, "img", 39)(3, HomeComponent_div_37_ng_template_3_Template, 2, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const benefit_r10 = ctx.$implicit;
    const materialBenefitIcon_r11 = \u0275\u0275reference(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", benefit_r10.iconPath)("ngIfElse", materialBenefitIcon_r11);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(benefit_r10.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r10.description);
  }
}
function HomeComponent_div_50_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51)(1, "span", 41);
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275template(2, HomeComponent_div_50_span_2_Template, 3, 0, "span", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 49)(6, "div", 50);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "h4");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "Rese\xF1a de Google");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const testimonial_r13 = ctx.$implicit;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r7.getStars(testimonial_r13.rating));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('"', testimonial_r13.text, '"');
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(testimonial_r13.name.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(testimonial_r13.name);
  }
}
var HomeComponent = class _HomeComponent {
  constructor() {
    this.whatsappLink = "https://wa.me/59177731818?text=Hola%2C%20quiero%20agendar%20una%20consulta";
    this.panelColors = ["#d8ecf7", "#f0dfcf", "#f7efe7", "#cfe2dc", "#e2d7df"];
    this.processSteps = [
      { title: "Evaluaci\xF3n Inicial", description: "Profunda comprensi\xF3n de tu historial m\xE9dico, h\xE1bitos y objetivos." },
      { title: "Plan Personalizado", description: "Dise\xF1o de un programa \xFAnico que integra nutrici\xF3n, psicolog\xEDa y ejercicio." },
      { title: "Seguimiento Continuo", description: "Consultas regulares para ajustar el plan y celebrar logros." },
      { title: "Autonom\xEDa de Salud", description: "Empoderamiento con conocimientos para mantener tu bienestar a largo plazo." }
    ];
    this.services = [
      {
        icon: "local_hospital",
        iconPath: "assets/icons/vegetable-icon (1).png",
        title: "Nutrici\xF3n Cl\xEDnica",
        description: "Nutrici\xF3n cl\xEDnica del adulto, cirug\xEDa bari\xE1trica y salud hormonal femenina"
      },
      {
        icon: "child_care",
        iconPath: "assets/icons/vegetable-icon (2).png",
        title: "Nutrici\xF3n en Etapas de la Vida",
        description: "Nutrici\xF3n pedi\xE1trica, adolescencia y materno infantil"
      },
      {
        icon: "fitness_center",
        iconPath: "assets/icons/vegetable-icon (3).png",
        title: "Nutrici\xF3n Deportiva y Rendimiento",
        description: "Nutrici\xF3n deportiva y planes para rendimiento f\xEDsico"
      },
      {
        icon: "restaurant",
        iconPath: "assets/icons/vegetable-icon (4).png",
        title: "Evaluaci\xF3n Nutricional Individual",
        description: "Evaluaci\xF3n completa y personalizada de tu estado nutricional"
      },
      {
        icon: "menu_book",
        iconPath: "assets/icons/vegetable-icon (5).png",
        title: "Talleres y Educaci\xF3n",
        description: "Talleres presenciales y virtuales de educaci\xF3n nutricional"
      }
    ];
    this.benefits = [
      {
        icon: "person",
        iconPath: "assets/icons/vegetable-icon (6).png",
        title: "Atenci\xF3n Personalizada",
        description: "Planes dise\xF1ados espec\xEDficamente para tus necesidades y objetivos"
      },
      {
        icon: "bar_chart",
        iconPath: "assets/icons/vegetable-icon (7).png",
        title: "Seguimiento Profesional",
        description: "Evaluaciones peri\xF3dicas para ajustar tu plan y asegurar resultados"
      },
      {
        icon: "local_hospital",
        iconPath: "assets/icons/vegetable-icon (8).png",
        title: "Presencial y Online",
        description: "Flexibilidad para atenderte como prefieras, desde donde est\xE9s"
      },
      {
        icon: "integration_instructions",
        iconPath: "assets/icons/vegetable-icon (9).png",
        title: "Enfoque Integral",
        description: "Abordaje completo que considera todos los aspectos de tu salud"
      }
    ];
    this.testimonials = [
      {
        name: "Mar\xEDa Gonz\xE1lez",
        image: "assets/images/testimonials/maria.jpg",
        text: "Gracias a Alimenta he logrado mejorar mi relaci\xF3n con la comida y alcanzar mi peso saludable. \xA1Excelente atenci\xF3n!",
        rating: 5
      },
      {
        name: "Carlos P\xE9rez",
        image: "assets/images/testimonials/carlos.jpg",
        text: "Como deportista, encontr\xE9 en Alimenta el apoyo nutricional que necesitaba. Mi rendimiento ha mejorado notablemente.",
        rating: 5
      },
      {
        name: "Ana Rodr\xEDguez",
        image: "assets/images/testimonials/ana.jpg",
        text: "El acompa\xF1amiento durante mi embarazo fue fundamental. Profesionales comprometidos y cercanos.",
        rating: 5
      }
    ];
    this.realTestimonials = [
      {
        name: "Axel Mendoza",
        text: "Mi experiencia con el Centro Alimenta fue muy buena. Con los planes de alimentaci\xF3n personalizados y los talleres logr\xE9 resultados incre\xEDbles.",
        rating: 5
      },
      {
        name: "Leticia Rivera",
        text: "Fueron 3 meses buenos en los que la doctora Patricia fue de apoyo, fue amable todo el tiempo y nos explic\xF3 todo lo que implicaba la dieta y los pasos a seguir.",
        rating: 5
      },
      {
        name: "Hanan Callejas",
        text: "Am\xE9 la atenci\xF3n y aprend\xED mucho sobre alimentaci\xF3n. Hoy puedo decir que soy m\xE1s consciente de lo que como y c\xF3mo lo hago.",
        rating: 5
      },
      {
        name: "Katherine Gonzales",
        text: "Me gust\xF3 mucho la atenci\xF3n y la paciencia conmigo, el que me gu\xEDen constantemente en mi evoluci\xF3n. Muchas gracias.",
        rating: 5
      },
      {
        name: "Lourdes Quispe",
        text: "Muy buena experiencia, nos ayud\xF3 al 100% con nuestra salud. Mejoramos en todos los sentidos y aprendimos que no es comer por comer.",
        rating: 5
      },
      {
        name: "Renata Carrillo Sainz",
        text: "Alimenta es un equipo de nutricionistas muy profesionales. Me dise\xF1aron un plan alimentario muy personalizado que me ayud\xF3 a lograr mis objetivos.",
        rating: 5
      },
      {
        name: "Noelia Sossa",
        text: "Un servicio \xEDntegro de primer nivel. Desde el primer momento la atenci\xF3n es de calidad, son muy atentas y emp\xE1ticas en cada paso.",
        rating: 5
      },
      {
        name: "Victor Canaviri",
        text: "Muy contento con el centro. Aprend\xED y sigo aprendiendo sobre una correcta alimentaci\xF3n, adem\xE1s de apoyarte con tus objetivos.",
        rating: 5
      },
      {
        name: "Bruno Torres",
        text: "Agradezco a Alimenta por ayudarme a lograr mis objetivos en mi deporte, con mi rendimiento y mi cuerpo. El ambiente es profesional y acogedor.",
        rating: 5
      },
      {
        name: "Pablo Puglisi",
        text: "Excelente seguimiento de la Lic. Alba Condori. Muy amable y paciente.",
        rating: 5
      },
      {
        name: "Andrea Mendez",
        text: "Fue una gran experiencia, aprend\xED a manejar mis h\xE1bitos alimenticios de una mejor manera. Gracias Alimenta.",
        rating: 5
      },
      {
        name: "Marko Vazquez",
        text: "Excelente atenci\xF3n e inmejorable servicio, muy buena calidad relaci\xF3n precio, alta profesionalidad y equipo muy amable.",
        rating: 5
      }
    ];
    this.professionals = [
      {
        name: "Lic. Luc\xEDa Pinell",
        specialty: "Psicolog\xEDa Cognitivo Conductual"
      },
      {
        name: "Lic. Mariel Llaguno G\xF3mez",
        specialty: "Nutrici\xF3n en Recomposici\xF3n Corporal y Bariatr\xEDa",
        credential: "C - 6148826",
        city: "La Paz"
      },
      {
        name: "Lic. Katherine Paz Villarroel",
        specialty: "Nutrici\xF3n en Recomposici\xF3n Corporal",
        credential: "C - 6094050",
        city: "La Paz"
      },
      {
        name: "Lic. Valeria Isabel Carrillo Sainz",
        specialty: "Nutrici\xF3n Deportiva",
        credential: "C - 6144191",
        city: "La Paz"
      },
      {
        name: "Lic. Mar\xEDa Ren\xE9 Nu\xF1ez Menacho",
        specialty: "Nutrici\xF3n Pedi\xE1trica y Materno Infantil",
        credential: "N \u2013 9664083",
        city: "Santa Cruz"
      },
      {
        name: "Lic. Ariani Santistevan Alpire",
        specialty: "Nutrici\xF3n en Recomposici\xF3n Corporal",
        credential: "S \u2013 7709260",
        city: "Santa Cruz"
      },
      {
        name: "Lic. Alba Yesenia Condori Quispe",
        specialty: "Nutrici\xF3n Pedi\xE1trica y Materno Infantil",
        credential: "C - 8461858",
        city: "La Paz"
      },
      {
        name: "Cecilia Monterrey",
        specialty: "\xC1rea de Entrenamiento"
      }
    ];
    this.heroProfessionals = [
      {
        id: "lucia-pinell",
        name: "Lic. Lucia Pinell",
        specialty: "Psicologia Cognitivo Conductual",
        image: "assets/Profiles/normalized/Lucia.png"
      },
      {
        id: "mariel-llaguno",
        name: "Lic. Mariel Llaguno",
        specialty: "Nutricion en Recomposicion Corporal y Bariatria",
        image: "assets/Profiles/normalized/Mariel.png"
      },
      {
        id: "katherine-paz",
        name: "Lic. Katherine Paz",
        specialty: "Nutricion en Recomposicion Corporal",
        image: "assets/Profiles/normalized/Katherine.png"
      },
      {
        id: "maria-rene-nunez",
        name: "Lic. Maria Rene",
        specialty: "Nutricion Pediatrica y Materno Infantil",
        image: "assets/Profiles/normalized/Rene.png"
      },
      {
        id: "ariani-santistevan",
        name: "Lic. Ariani Santistevan",
        specialty: "Nutricion en Recomposicion Corporal",
        image: "assets/Profiles/normalized/Ariani.png"
      },
      {
        id: "alba-condori",
        name: "Lic. Alba Yesenia",
        specialty: "Nutricion Pediatrica y Materno Infantil",
        image: "assets/Profiles/normalized/Alba.png"
      },
      {
        id: "cecilia-monterrey",
        name: "Cecilia Monterrey",
        specialty: "Area de Entrenamiento",
        image: "assets/Profiles/normalized/Cecilia.png"
      }
    ];
  }
  scrollHeroTeam(carousel, direction) {
    carousel.scrollBy({
      left: direction * Math.min(carousel.clientWidth * 0.85, 680),
      behavior: "smooth"
    });
  }
  scrollTestimonials(carousel, direction) {
    carousel.scrollBy({
      left: direction * Math.min(carousel.clientWidth * 0.85, 520),
      behavior: "smooth"
    });
  }
  getStars(rating) {
    return Array(rating).fill(0);
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 5, consts: [["heroCarousel", ""], ["testimonialsCarousel", ""], ["materialSpecialtyIcon", ""], ["materialBenefitIcon", ""], [1, "hero"], [1, "hero-box"], [1, "hero-team"], [1, "hero-title"], [1, "hero-subtitle"], ["type", "button", "aria-label", "Ver profesionales anteriores", 1, "hero-carousel-button", "hero-carousel-button-prev", 3, "click"], ["aria-hidden", "true", 1, "material-icons"], ["aria-label", "Equipo Alimenta", 1, "hero-lineup"], ["class", "hero-professional", 3, "hero-professional-cecilia", "--lineup-index", 4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "Ver siguientes profesionales", 1, "hero-carousel-button", "hero-carousel-button-next", 3, "click"], [1, "specialties"], [1, "container"], [1, "section-title"], [1, "specialties-grid"], ["class", "specialty-panel", 3, "background-color", 4, "ngFor", "ngForOf"], [1, "process"], [1, "process-grid"], ["class", "process-step", 4, "ngFor", "ngForOf"], [1, "benefits-section", "bg-cream-soft"], [1, "section-subtitle"], [1, "grid", "grid-4"], ["class", "benefit-card", 4, "ngFor", "ngForOf"], [1, "testimonials-section"], [1, "testimonials-carousel-wrap"], ["type", "button", "aria-label", "Ver rese\xF1as anteriores", 1, "testimonial-nav", 3, "click"], [1, "testimonials-carousel"], ["class", "testimonial-card", 4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "Ver m\xE1s rese\xF1as", 1, "testimonial-nav", 3, "click"], [1, "hero-professional"], [1, "hero-photo-frame"], [3, "src", "alt"], [1, "hero-profile-link", 3, "href"], ["aria-hidden", "true", 1, "material-icons", "hero-profile-icon"], [1, "specialty-panel"], [1, "specialty-icon"], ["class", "alimenta-icon", 3, "src", "alt", 4, "ngIf", "ngIfElse"], [1, "alimenta-icon", 3, "src", "alt"], [1, "material-icons"], [1, "process-step"], [1, "benefit-card"], [1, "benefit-icon"], [1, "testimonial-card"], [1, "stars"], ["class", "star", 4, "ngFor", "ngForOf"], [1, "testimonial-text"], [1, "testimonial-author"], [1, "author-avatar"], [1, "star"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "section", 4)(1, "div", 5)(2, "div", 6)(3, "h1", 7);
        \u0275\u0275text(4, "Nutrici\xF3n que transforma h\xE1bitos, ");
        \u0275\u0275element(5, "br");
        \u0275\u0275text(6, "salud y calidad de vida");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 8);
        \u0275\u0275text(8, " En Alimenta trabajamos con una filosof\xEDa de alimentaci\xF3n flexible y no restrictiva para ayudarte a mejorar tu salud f\xEDsica, mental y emocional mediante un acompa\xF1amiento profesional y personalizado. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 9);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          const heroCarousel_r2 = \u0275\u0275reference(13);
          return \u0275\u0275resetView(ctx.scrollHeroTeam(heroCarousel_r2, -1));
        });
        \u0275\u0275elementStart(10, "span", 10);
        \u0275\u0275text(11, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 11, 0);
        \u0275\u0275template(14, HomeComponent_div_14_Template, 10, 10, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 13);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_15_listener() {
          \u0275\u0275restoreView(_r1);
          const heroCarousel_r2 = \u0275\u0275reference(13);
          return \u0275\u0275resetView(ctx.scrollHeroTeam(heroCarousel_r2, 1));
        });
        \u0275\u0275elementStart(16, "span", 10);
        \u0275\u0275text(17, "chevron_right");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(18, "section", 14)(19, "div", 15)(20, "h2", 16);
        \u0275\u0275text(21, "Especialidades & Servicios");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 17);
        \u0275\u0275template(23, HomeComponent_div_23_Template, 9, 6, "div", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "section", 19)(25, "div", 15)(26, "h2", 16);
        \u0275\u0275text(27, "Nuestro Proceso Integrativo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 20);
        \u0275\u0275template(29, HomeComponent_div_29_Template, 5, 2, "div", 21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "section", 22)(31, "div", 15)(32, "h2", 16);
        \u0275\u0275text(33, "\xBFPor Qu\xE9 Elegir Alimenta?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "p", 23);
        \u0275\u0275text(35, " Nos destacamos por nuestro compromiso con tu salud y satisfacci\xF3n ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 24);
        \u0275\u0275template(37, HomeComponent_div_37_Template, 9, 4, "div", 25);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "section", 26)(39, "div", 15)(40, "h2", 16);
        \u0275\u0275text(41, "Lo que dicen nuestros pacientes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "p", 23);
        \u0275\u0275text(43, "Rese\xF1as de pacientes que han confiado en Alimenta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 27)(45, "button", 28);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_45_listener() {
          \u0275\u0275restoreView(_r1);
          const testimonialsCarousel_r12 = \u0275\u0275reference(49);
          return \u0275\u0275resetView(ctx.scrollTestimonials(testimonialsCarousel_r12, -1));
        });
        \u0275\u0275elementStart(46, "span", 10);
        \u0275\u0275text(47, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 29, 1);
        \u0275\u0275template(50, HomeComponent_div_50_Template, 13, 4, "div", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "button", 31);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_51_listener() {
          \u0275\u0275restoreView(_r1);
          const testimonialsCarousel_r12 = \u0275\u0275reference(49);
          return \u0275\u0275resetView(ctx.scrollTestimonials(testimonialsCarousel_r12, 1));
        });
        \u0275\u0275elementStart(52, "span", 10);
        \u0275\u0275text(53, "chevron_right");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("ngForOf", ctx.heroProfessionals);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.services.slice(0, 5));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.processSteps);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.benefits);
        \u0275\u0275advance(13);
        \u0275\u0275property("ngForOf", ctx.realTestimonials);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.hero[_ngcontent-%COMP%] {\n  background-color: var(--bg-cream);\n  padding: 0;\n  text-align: center;\n  width: 100%;\n  margin: 0;\n}\n.hero-box[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-radius: 0;\n  padding: 30px var(--spacing-md) 0;\n  box-shadow: none;\n  width: 100%;\n  margin: 0;\n  overflow: hidden;\n  position: relative;\n}\n.hero-box[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image: url(/assets/Alimenta_Patron01_01.png);\n  background-repeat: repeat;\n  background-size: 420px auto;\n  -webkit-mask-image:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.2),\n      rgba(0, 0, 0, 0.75));\n  mask-image:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.2),\n      rgba(0, 0, 0, 0.75));\n  opacity: 0.09;\n  pointer-events: none;\n}\n.hero-box[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 4vw, 2.35rem);\n  font-weight: 500;\n  color: #24485a;\n  margin-bottom: 0;\n  line-height: 1.25;\n}\n.hero-title[_ngcontent-%COMP%]::after {\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-sand) 0%,\n      #d9a586 52%,\n      var(--brand-sand-soft) 100%);\n  border-radius: 999px;\n  content: "";\n  display: block;\n  height: 3px;\n  margin: 10px auto 0;\n  width: 92px;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  color: rgba(45, 52, 54, 0.68);\n  font-size: 0.9rem;\n  line-height: 1.45;\n  max-width: 900px;\n  margin: 8px auto 0;\n}\n.hero-team[_ngcontent-%COMP%] {\n  align-items: center;\n  display: block;\n  max-width: min(1500px, calc(100vw - 32px));\n  margin: 0 auto;\n  padding: 0;\n}\n.hero-lineup[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: flex-end;\n  grid-template-columns: repeat(7, minmax(0, 1fr));\n  gap: clamp(8px, 1.4vw, 24px);\n  min-height: 0;\n  margin-top: -18px !important;\n  padding: 0 24px;\n}\n.hero-professional[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n  margin-left: 0;\n  min-width: 0;\n  grid-template-rows: clamp(270px, 21vw, 340px) auto;\n  transition: transform 180ms ease;\n}\n.hero-professional[_ngcontent-%COMP%]:hover, .hero-professional[_ngcontent-%COMP%]:focus-within {\n  transform: translateY(-8px);\n  z-index: 2;\n}\n.hero-photo-frame[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  display: flex;\n  height: clamp(270px, 21vw, 340px);\n  justify-content: center;\n  overflow: visible;\n  width: 100%;\n}\n.hero-photo-frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n  object-fit: contain;\n  object-position: bottom center;\n  filter: drop-shadow(0 14px 16px rgba(70, 54, 48, 0.12));\n}\n.hero-professional-cecilia[_ngcontent-%COMP%]   .hero-photo-frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.08) translateY(-4px);\n  transform-origin: bottom center;\n}\n.hero-carousel-button[_ngcontent-%COMP%] {\n  align-items: center;\n  align-self: center;\n  background-color: rgba(255, 255, 255, 0.86);\n  border: 2px solid var(--primary);\n  border-radius: 50%;\n  color: var(--primary);\n  cursor: pointer;\n  display: none;\n  height: 46px;\n  justify-content: center;\n  padding: 0;\n  transition: var(--transition);\n  width: 46px;\n  z-index: 2;\n}\n.hero-carousel-button[_ngcontent-%COMP%]:hover, .hero-carousel-button[_ngcontent-%COMP%]:focus-visible {\n  background-color: var(--primary);\n  color: var(--bg-white);\n}\n.hero-profile-link[_ngcontent-%COMP%] {\n  align-items: center;\n  color: #5f6b6f;\n  display: grid;\n  gap: 3px;\n  font-size: 0.78rem;\n  justify-content: center;\n  line-height: 1.25;\n  margin: 8px 0 18px;\n  max-width: 180px;\n  text-decoration: none;\n  transition: var(--transition);\n  width: 100%;\n}\n.hero-profile-link[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #24485a;\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n.hero-profile-link[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.hero-profile-icon) {\n  color: rgba(45, 52, 54, 0.64);\n  font-size: 0.72rem;\n  min-height: 1.8em;\n}\n.hero-profile-icon[_ngcontent-%COMP%] {\n  color: var(--brand-sand);\n  font-size: 1.05rem;\n  line-height: 1;\n  margin-top: 1px;\n}\n.hero-profile-link[_ngcontent-%COMP%]:hover, .hero-profile-link[_ngcontent-%COMP%]:focus-visible {\n  color: var(--primary);\n  transform: translateY(-2px);\n}\n.hero-profile-link[_ngcontent-%COMP%]:hover   .hero-profile-icon[_ngcontent-%COMP%], .hero-profile-link[_ngcontent-%COMP%]:focus-visible   .hero-profile-icon[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n}\n.specialties[_ngcontent-%COMP%] {\n  background-color: #faf1e6;\n  padding: var(--spacing-lg) 0 0;\n}\n.specialties[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n  font-weight: 500;\n  color: #24485a;\n}\n.specialties-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  width: 100%;\n}\n.specialty-panel[_ngcontent-%COMP%] {\n  padding: var(--spacing-md) var(--spacing-sm);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 220px;\n  color: var(--primary-dark);\n  position: relative;\n}\n.specialty-panel[_ngcontent-%COMP%]::before {\n  background: rgba(198, 161, 127, 0.48);\n  border-radius: 999px;\n  content: "";\n  height: 3px;\n  left: 50%;\n  position: absolute;\n  top: 16px;\n  transform: translateX(-50%);\n  width: 46px;\n}\n.specialty-icon[_ngcontent-%COMP%] {\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n  margin: 0 0 var(--spacing-sm) 0;\n  opacity: 0.95;\n  width: 100%;\n}\n.specialty-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto 12px;\n  line-height: 1;\n  color: var(--primary-dark);\n}\n.specialty-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  color: #24485a;\n}\n.specialty-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgba(45, 52, 54, 0.68);\n  line-height: 1.5;\n  max-width: 200px;\n}\n@media (max-width: 968px) {\n  .hero-box[_ngcontent-%COMP%] {\n    padding-top: 36px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  .hero-title[_ngcontent-%COMP%], .hero-subtitle[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n  }\n  .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.88rem;\n    max-width: 640px;\n    margin-top: 8px;\n  }\n  .hero-team[_ngcontent-%COMP%] {\n    align-items: center;\n    display: grid;\n    grid-template-columns: 44px minmax(0, 1fr) 44px;\n    gap: 8px;\n    max-width: 100%;\n  }\n  .hero-lineup[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 20px;\n    min-height: 0;\n    margin-top: -8px !important;\n    overflow-x: auto;\n    overscroll-behavior-x: contain;\n    padding: 0 8px;\n    scroll-behavior: smooth;\n    scroll-snap-type: x mandatory;\n    scrollbar-width: none;\n  }\n  .hero-lineup[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .hero-professional[_ngcontent-%COMP%] {\n    flex: 0 0 210px;\n    grid-template-rows: 326px auto;\n    scroll-snap-align: center;\n  }\n  .hero-photo-frame[_ngcontent-%COMP%] {\n    height: 326px;\n  }\n  .hero-carousel-button[_ngcontent-%COMP%] {\n    display: flex;\n    height: 42px;\n    width: 42px;\n  }\n  .specialties-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .testimonials-carousel[_ngcontent-%COMP%] {\n    grid-auto-columns: calc((100% - 1rem) / 2);\n  }\n}\n@media (max-width: 540px) {\n  .specialties-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.process[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: var(--spacing-lg) 0;\n}\n.process[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #8f6f52;\n}\n.process-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: var(--spacing-md);\n  margin-top: var(--spacing-md);\n}\n.process-step[_ngcontent-%COMP%] {\n  text-align: left;\n  border-left: 4px solid var(--accent);\n  padding-left: 16px;\n}\n.process-step[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #24485a;\n  font-size: 1.05rem;\n  margin-bottom: 0.5rem;\n}\n.process-step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(45, 52, 54, 0.72);\n  font-size: 0.9rem;\n  line-height: 1.6;\n}\n.benefits-section[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg) 0;\n}\n.benefits-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #24485a;\n}\n.benefits-section[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  color: rgba(47, 88, 104, 0.76);\n}\n.benefit-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-md);\n  background-color: #ffffff;\n  border: 1px solid rgba(63, 110, 129, 0.1);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  transition: var(--transition);\n}\n.benefit-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-4px);\n}\n.benefit-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: var(--spacing-sm);\n  color: var(--brand-sand);\n}\n.benefit-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #24485a;\n  margin-bottom: 0.5rem;\n  font-size: 1.05rem;\n}\n.benefit-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(45, 52, 54, 0.72);\n  font-size: 0.9rem;\n  line-height: 1.6;\n}\n.testimonials-section[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg) 0;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      var(--brand-blue-soft-2) 100%);\n}\n.testimonials-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #24485a;\n}\n.testimonials-section[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  color: rgba(47, 88, 104, 0.76);\n}\n.testimonials-carousel-wrap[_ngcontent-%COMP%] {\n  align-items: center;\n  display: grid;\n  gap: 0.75rem;\n  grid-template-columns: 42px minmax(0, 1fr) 42px;\n}\n.testimonials-carousel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-auto-columns: calc((100% - 2rem) / 3);\n  grid-auto-flow: column;\n  overflow-x: auto;\n  padding: 0.2rem 0.15rem 0.75rem;\n  scroll-behavior: smooth;\n  scroll-snap-type: x mandatory;\n  scrollbar-width: none;\n}\n.testimonials-carousel[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.testimonial-nav[_ngcontent-%COMP%] {\n  align-items: center;\n  background: #ffffff;\n  border: 1px solid rgba(63, 110, 129, 0.16);\n  border-radius: 50%;\n  color: #24485a;\n  cursor: pointer;\n  display: inline-flex;\n  height: 42px;\n  justify-content: center;\n  padding: 0;\n  transition: var(--transition);\n  width: 42px;\n}\n.testimonial-nav[_ngcontent-%COMP%]:hover, .testimonial-nav[_ngcontent-%COMP%]:focus-visible {\n  background: #24485a;\n  color: #ffffff;\n}\n.testimonial-card[_ngcontent-%COMP%] {\n  background-color: var(--bg-white);\n  border: 1px solid rgba(63, 110, 129, 0.1);\n  padding: var(--spacing-md);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  display: flex;\n  flex-direction: column;\n  min-height: 300px;\n  scroll-snap-align: start;\n  transition: var(--transition);\n}\n.testimonial-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-4px);\n}\n.stars[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm);\n}\n.star[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.testimonial-text[_ngcontent-%COMP%] {\n  color: rgba(45, 52, 54, 0.72);\n  flex: 1;\n  font-style: italic;\n  line-height: 1.7;\n  margin-bottom: var(--spacing-md);\n  font-size: 0.95rem;\n}\n.testimonial-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.author-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background-color: var(--pastel-blue);\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n.testimonial-author[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #24485a;\n  font-size: 0.95rem;\n  margin: 0;\n}\n.testimonial-author[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-soft);\n  font-size: 0.8rem;\n  margin: 0;\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl) 0;\n  background-color: var(--bg-cream-soft);\n}\n.cta-content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 700px;\n  margin: 0 auto;\n}\n.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  margin-bottom: var(--spacing-sm);\n}\n.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1.05rem;\n  margin-bottom: var(--spacing-md);\n}\n.cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-sm);\n  justify-content: center;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .hero-box[_ngcontent-%COMP%] {\n    padding-top: 28px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n    margin-bottom: 0;\n  }\n  .hero-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.84rem;\n    line-height: 1.4;\n    margin-top: 6px;\n  }\n  .hero-team[_ngcontent-%COMP%] {\n    align-items: center;\n    display: grid;\n    grid-template-columns: 40px minmax(0, 1fr) 40px;\n    gap: 6px;\n    max-width: 100%;\n  }\n  .hero-lineup[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 16px;\n    min-height: 0;\n    margin-top: -4px !important;\n    overflow-x: auto;\n    padding: 0 6px;\n    overscroll-behavior-x: contain;\n    scroll-behavior: smooth;\n    scroll-snap-type: x mandatory;\n    scrollbar-width: none;\n  }\n  .hero-lineup[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .hero-professional[_ngcontent-%COMP%] {\n    flex-basis: 180px;\n    flex-shrink: 0;\n    grid-template-rows: 300px auto;\n    margin-left: 0;\n    scroll-snap-align: center;\n  }\n  .hero-photo-frame[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n  .hero-carousel-button[_ngcontent-%COMP%] {\n    display: flex;\n    height: 38px;\n    width: 38px;\n  }\n  .grid-3[_ngcontent-%COMP%], .grid-4[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .testimonials-carousel-wrap[_ngcontent-%COMP%] {\n    grid-template-columns: 36px minmax(0, 1fr) 36px;\n  }\n  .testimonials-carousel[_ngcontent-%COMP%] {\n    grid-auto-columns: 100%;\n  }\n  .testimonial-nav[_ngcontent-%COMP%] {\n    height: 36px;\n    width: 36px;\n  }\n  .cta-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .cta-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "app\\pages\\home\\home.component.ts", lineNumber: 12 });
})();

// src/app/pages/about/about.component.ts
function AboutComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const paragraph_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(paragraph_r1);
  }
}
function AboutComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "img", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const image_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275property("src", image_r2, \u0275\u0275sanitizeUrl)("alt", "Espacio Alimenta " + (i_r3 + 2));
  }
}
function AboutComponent_div_41_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 32);
  }
  if (rf & 2) {
    const value_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", value_r4.iconPath, \u0275\u0275sanitizeUrl)("alt", value_r4.title);
  }
}
function AboutComponent_div_41_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(value_r4.icon);
  }
}
function AboutComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275template(2, AboutComponent_div_41_img_2_Template, 1, 2, "img", 31)(3, AboutComponent_div_41_ng_template_3_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r4 = ctx.$implicit;
    const materialValueIcon_r5 = \u0275\u0275reference(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", value_r4.iconPath)("ngIfElse", materialValueIcon_r5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(value_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r4.description);
  }
}
function AboutComponent_div_49_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 28);
  }
  if (rf & 2) {
    const member_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", member_r6.image, \u0275\u0275sanitizeUrl)("alt", member_r6.name);
  }
}
function AboutComponent_div_49_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", member_r6.name.charAt(0), " ");
  }
}
function AboutComponent_div_49_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("MP: ", member_r6.credential, "");
  }
}
function AboutComponent_div_49_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 48)(1, "span", 33);
    \u0275\u0275text(2, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", member_r6.city, "");
  }
}
function AboutComponent_div_49_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(member_r6.description);
  }
}
function AboutComponent_div_49_div_14_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r7);
  }
}
function AboutComponent_div_49_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "h4");
    \u0275\u0275text(2, "Formaci\xF3n Acad\xE9mica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275template(4, AboutComponent_div_49_div_14_li_4_Template, 2, 1, "li", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", member_r6.education);
  }
}
function AboutComponent_div_49_div_15_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r8);
  }
}
function AboutComponent_div_49_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "h4");
    \u0275\u0275text(2, "\xC1reas de Especializaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275template(4, AboutComponent_div_49_div_15_li_4_Template, 2, 1, "li", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", member_r6.specializations);
  }
}
function AboutComponent_div_49_div_16_li_4_Template(rf, ctx) {
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
function AboutComponent_div_49_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "h4");
    \u0275\u0275text(2, "Logros Deportivos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275template(4, AboutComponent_div_49_div_16_li_4_Template, 2, 1, "li", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", member_r6.achievements);
  }
}
function AboutComponent_div_49_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "h4");
    \u0275\u0275text(2, "Filosof\xEDa de Trabajo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(member_r6.philosophy);
  }
}
function AboutComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275template(2, AboutComponent_div_49_img_2_Template, 1, 2, "img", 36)(3, AboutComponent_div_49_div_3_Template, 2, 1, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 38)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 40);
    \u0275\u0275template(10, AboutComponent_div_49_span_10_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AboutComponent_div_49_p_11_Template, 4, 1, "p", 42)(12, AboutComponent_div_49_p_12_Template, 2, 1, "p", 43);
    \u0275\u0275elementStart(13, "div", 44);
    \u0275\u0275template(14, AboutComponent_div_49_div_14_Template, 5, 1, "div", 45)(15, AboutComponent_div_49_div_15_Template, 5, 1, "div", 45)(16, AboutComponent_div_49_div_16_Template, 5, 1, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, AboutComponent_div_49_div_17_Template, 5, 1, "div", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r6 = ctx.$implicit;
    \u0275\u0275property("id", member_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", member_r6.image);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !member_r6.image);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r6.specialty);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", member_r6.credential);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r6.city);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r6.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", member_r6.education == null ? null : member_r6.education.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r6.specializations == null ? null : member_r6.specializations.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r6.achievements == null ? null : member_r6.achievements.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", member_r6.philosophy);
  }
}
function AboutComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 54)(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const milestone_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(milestone_r10.year);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(milestone_r10.event);
  }
}
var AboutComponent = class _AboutComponent {
  constructor() {
    this.mission = "Brindar atenci\xF3n nutricional profesional y personalizada, promoviendo h\xE1bitos de vida saludables a trav\xE9s de una filosof\xEDa no restrictiva y un enfoque integral que combine el bienestar f\xEDsico, mental y emocional de cada paciente.";
    this.vision = "Ser el centro de nutrici\xF3n l\xEDder en Bolivia reconocido por su excelencia, innovaci\xF3n y enfoque humano, contribuyendo a mejorar la calidad de vida de las personas mediante el acompa\xF1amiento nutricional continuo y la educaci\xF3n alimentaria consciente.";
    this.history = [
      "Alimenta es un centro de asesoramiento nutricional personalizado que ofrece atenci\xF3n integral a trav\xE9s de un equipo de profesionales especializados en distintas \xE1reas de la nutrici\xF3n.",
      "Con presencia en las ciudades La Paz y Santa Cruz, brindamos consultas individuales, programas nutricionales personalizados, talleres educativos y servicios corporativos enfocados en la promoci\xF3n de h\xE1bitos saludables.",
      "Nuestra filosof\xEDa se basa en una alimentaci\xF3n flexible y no restrictiva que alimenta el cuerpo, la mente y las emociones, ayudando a las personas a construir una relaci\xF3n saludable y sostenible con la alimentaci\xF3n."
    ];
    this.aboutImages = [
      "assets/espacios/Image 2026-06-24 at 20.54.40 (1).jpeg",
      "assets/espacios/Image 2026-06-24 at 20.53.45.jpeg",
      "assets/espacios/Image 2026-06-24 at 20.54.40.jpeg",
      "assets/espacios/Image 2026-06-24 at 20.58.16.jpeg",
      "assets/espacios/Image 2026-06-24 at 20.58.19.jpeg",
      "assets/espacios/Image 2026-06-24 at 20.58.21.jpeg",
      "assets/espacios/Image 2026-06-24 at 21.05.31.jpeg",
      "assets/espacios/Image 2026-06-24 at 21.05.32.jpeg",
      "assets/espacios/Image 2026-06-24 at 21.05.33.jpeg"
    ];
    this.team = [
      {
        name: "Lic. Alba Yesenia Condori Quispe",
        specialty: "Nutrici\xF3n Pedi\xE1trica y Materno Infantil",
        credential: "C - 8461858",
        city: "La Paz",
        id: "alba-condori",
        image: "assets/Profiles/normalized/Alba.png",
        description: "Soy Licenciada en Nutrici\xF3n y Diet\xE9tica, especializada en nutrici\xF3n cl\xEDnica y pedi\xE1trica. Acompa\xF1o a ni\xF1os, adolescentes, adultos y familias mediante una atenci\xF3n personalizada, dise\xF1ando estrategias que se ajusten a cada etapa de la vida, objetivos de salud y condiciones m\xE9dicas.",
        education: [
          "Licenciatura en Nutrici\xF3n y Diet\xE9tica - Universidad Mayor de San Andr\xE9s (UMSA).",
          "Diplomado en Educaci\xF3n Superior - CEPIES.",
          "Diplomado en Nutrici\xF3n Pedi\xE1trica - INED.",
          "Certificaci\xF3n Internacional ISAK Nivel 2 - Perfil Completo."
        ],
        specializations: [
          "Nutrici\xF3n cl\xEDnica en adultos",
          "Nutrici\xF3n pedi\xE1trica",
          "Recomposici\xF3n corporal",
          "Educaci\xF3n alimentaria y cambio de h\xE1bitos",
          "Evaluaci\xF3n antropom\xE9trica completa (ISAK)"
        ],
        philosophy: "Creo que una alimentaci\xF3n saludable no debe sentirse como una dieta restrictiva ni convertirse en una carga. La comida forma parte de nuestra vida cotidiana y tambi\xE9n debe disfrutarse. Mi objetivo es ayudarte a desarrollar h\xE1bitos que puedas mantener a largo plazo, con un plan de alimentaci\xF3n personalizado que se adapte a tu realidad, tus gustos y tus necesidades. Porque cada persona es \xFAnica, cada tratamiento nutricional tambi\xE9n debe serlo."
      },
      {
        name: "Lic. Mar\xEDa Ren\xE9 Nu\xF1ez Menacho",
        specialty: "Nutrici\xF3n Pedi\xE1trica y Materno Infantil",
        credential: "N - 9664083",
        city: "Santa Cruz",
        id: "maria-rene-nunez",
        image: "assets/Profiles/normalized/Rene.png",
        description: "Licenciada en Nutrici\xF3n y Diet\xE9tica, especializada en nutrici\xF3n cl\xEDnica para patolog\xEDas cr\xF3nicas, educaci\xF3n superior y marketing aplicado a la salud.",
        education: [
          "Licenciatura en Nutrici\xF3n y Diet\xE9tica - Universidad Nacional Ecol\xF3gica.",
          "Diplomado en Educaci\xF3n Superior y Tecnolog\xEDa Educativa - Universidad Tecnol\xF3gica Privada de Santa Cruz - UTEPSA.",
          "Antropometr\xEDa ISAK Nivel 1 - Certificaciones.",
          "Taller te\xF3rico Parto Humanizado y Lactancia Materna - Universidad Nacional Ecol\xF3gica.",
          "Seminario de actualizaci\xF3n en Nutrici\xF3n: tratamiento nutricional en litiasis renal, screening cardiometab\xF3lico en nutrici\xF3n y tratamiento nutricional en obesidad infantil.",
          "1er Congreso Internacional de Trastornos de la Conducta Alimentaria - Federaci\xF3n Nacional de Nutrici\xF3n y Ciencia, Universidad Aut\xF3noma del Estado de Morelos, Facultad de Ciencias del Deporte.",
          "Psiconutrici\xF3n en Trastorno del Espectro Autista y TDAH - Gesyp Gabinete Espacio Salud y Psicoterapia."
        ],
        specializations: [
          "Nutrici\xF3n cl\xEDnica",
          "Nutrici\xF3n materno-infantil",
          "Psiconutrici\xF3n",
          "Dieta cetog\xE9nica",
          "Microbiota",
          "Antropometr\xEDa"
        ],
        philosophy: "Nutricionista dietista enfocada en el dise\xF1o de planes de alimentaci\xF3n personalizados y el acompa\xF1amiento integral de pacientes. Me enfoco en promover la salud a trav\xE9s de la construcci\xF3n de h\xE1bitos sostenibles, con la empat\xEDa para guiar a las personas hacia una mejor calidad de vida."
      },
      {
        name: "Lic. Katherine Paz Villarroel",
        specialty: "Nutrici\xF3n en Recomposici\xF3n Corporal",
        credential: "P - 6094050",
        city: "La Paz",
        id: "katherine-paz",
        image: "assets/Profiles/normalized/Katherine.png"
      },
      {
        name: "Lic. Ariani Santistevan Alpire",
        specialty: "Nutrici\xF3n en Recomposici\xF3n Corporal",
        credential: "S - 7709260",
        city: "Santa Cruz",
        id: "ariani-santistevan",
        image: "assets/Profiles/normalized/Ariani.png",
        description: "Licenciada en Nutrici\xF3n y Diet\xE9tica con experiencia en el acompa\xF1amiento nutricional de pacientes que buscan mejorar su salud y calidad de vida mediante estrategias personalizadas, educaci\xF3n alimentaria y un enfoque basado en evidencia cient\xEDfica, adaptado a las necesidades individuales de cada persona.",
        education: [
          "Licenciatura en Nutrici\xF3n y Diet\xE9tica - Universidad Evang\xE9lica Boliviana.",
          "Seminario de Soporte Nutricional en Pacientes Cr\xEDticamente Enfermos - Hospital San Juan de Dios.",
          "Capacitaci\xF3n en Nutrici\xF3n Hospitalaria.",
          "Formaci\xF3n en Eje Cerebro-Intestino-Microbiota - Cultivarte.",
          "Actualizaci\xF3n en Nutrici\xF3n en Cirrosis Hep\xE1tica.",
          "Actualizaci\xF3n en Intervenci\xF3n Nutricional en Artritis Reumatoidea y Artrosis.",
          "Formaci\xF3n en Nutrici\xF3n Ginecol\xF3gica - CEPIC.",
          "Formaci\xF3n en Nutrici\xF3n Antiinflamatoria.",
          "Ingl\xE9s nivel C1 - Universidad UTEPSA."
        ],
        specializations: [
          "Nutrici\xF3n cl\xEDnica del adulto",
          "Nutrici\xF3n endocrinol\xF3gica",
          "Nutrici\xF3n femenina",
          "Nutrici\xF3n antiinflamatoria",
          "Educaci\xF3n alimentaria y cambio de h\xE1bitos",
          "Prevenci\xF3n y manejo nutricional de enfermedades cr\xF3nicas"
        ],
        philosophy: "Creo que una alimentaci\xF3n saludable debe adaptarse a la vida de las personas y no al rev\xE9s. Mi objetivo es acompa\xF1ar a cada paciente en la construcci\xF3n de h\xE1bitos sostenibles que le permitan mejorar su salud, bienestar y calidad de vida mediante estrategias pr\xE1cticas, personalizadas y respaldadas por evidencia cient\xEDfica."
      },
      {
        name: "Lic. Carrillo Sainz Valeria Isabel",
        specialty: "Nutrici\xF3n Cl\xEDnica y Deportiva",
        credential: "C - 6144191",
        city: "La Paz",
        id: "valeria-carrillo",
        image: "",
        description: "Licenciada en Nutrici\xF3n y Diet\xE9tica con amplia experiencia en el acompa\xF1amiento nutricional de pacientes que buscan mejorar su salud, composici\xF3n corporal y rendimiento f\xEDsico mediante estrategias basadas en evidencia cient\xEDfica y adaptadas a sus necesidades individuales.",
        education: [
          "Licenciatura en Nutrici\xF3n y Diet\xE9tica - Universidad Mayor de San Andr\xE9s.",
          "Diplomado en Nutrici\xF3n Cl\xEDnica y Metabolismo - Universidad Mayor de San Andr\xE9s.",
          "Diplomado en Nutrici\xF3n Deportiva - Universidad Mayor de San Andr\xE9s.",
          "Certificaci\xF3n Internacional ISAK Nivel 1 en Cineantropometr\xEDa - Universidad Mayor de San Andr\xE9s.",
          "Formaci\xF3n en Medicina del Estilo de Vida - Universidad Mayor de San Andr\xE9s.",
          "Curso de Actualizaci\xF3n en Obesidad y Salud Metab\xF3lica - Universidad Mayor de San Andr\xE9s."
        ],
        specializations: [
          "P\xE9rdida de grasa y recomposici\xF3n corporal",
          "Nutrici\xF3n cl\xEDnica del adulto",
          "Salud metab\xF3lica",
          "Nutrici\xF3n deportiva",
          "Educaci\xF3n alimentaria",
          "Cambio de h\xE1bitos y adherencia nutricional"
        ],
        philosophy: "Creo que una alimentaci\xF3n saludable debe adaptarse a la vida de las personas y no al rev\xE9s. Mi objetivo es acompa\xF1ar a cada paciente para que logre resultados sostenibles, mejorando no solo su alimentaci\xF3n, sino tambi\xE9n su bienestar f\xEDsico y emocional."
      },
      {
        name: "Lic. Llaguno G\xF3mez Mariel",
        specialty: "Nutrici\xF3n en Recomposici\xF3n Corporal y Bariatr\xEDa",
        credential: "LL - 6148826",
        city: "La Paz",
        id: "mariel-llaguno",
        image: "assets/Profiles/normalized/Mariel.png",
        description: "Licenciada en Nutrici\xF3n y Diet\xE9tica con m\xE1s de 7 a\xF1os de experiencia en el \xE1rea cl\xEDnica y educativa. Especializada en evaluaci\xF3n nutricional integral, dise\xF1o de planes alimentarios personalizados, atenci\xF3n presencial y online, docencia universitaria, gesti\xF3n de servicios de alimentaci\xF3n y divulgaci\xF3n cient\xEDfica.",
        education: [
          "Licenciatura en Nutrici\xF3n y Diet\xE9tica, 2015-2019, La Paz, Bolivia - Universidad Mayor de San Andr\xE9s (UMSA).",
          "Diplomado en Endocrinolog\xEDa Ginecol\xF3gica, en curso - Nutriinfo Argentina.",
          "Nutrici\xF3n y Obesidad: Control de Sobrepeso, 2020, La Paz, Bolivia - Universidad Nacional Aut\xF3noma de M\xE9xico (UNAM), curso online.",
          "Nutrici\xF3n deportiva, 2020, La Paz, Bolivia - G-SE Online Education Center, Buenos Aires, Argentina.",
          "Antropometrista ISAK Nivel I, 2017, La Paz, Bolivia - International Society for the Advancement of Kinanthropometry."
        ],
        specializations: [
          "Salud hormonal femenina",
          "Cirug\xEDa bari\xE1trica",
          "Recomposici\xF3n corporal",
          "Nutrici\xF3n cl\xEDnica del adulto"
        ],
        philosophy: "Actualmente trabajo con un enfoque anti-dietas centrado en la medicina del estilo de vida (MEV) y en la salud hormonal femenina, brindando acompa\xF1amiento en las diferentes etapas de la vida de la mujer."
      },
      {
        name: "Lic. Luc\xEDa Pinell",
        specialty: "Psicolog\xEDa Cognitivo Conductual",
        city: "La Paz",
        id: "lucia-pinell",
        image: "assets/Profiles/normalized/Lucia.png",
        description: "Soy Licenciada en Psicolog\xEDa con enfoque cognitivo-conductual, especializada en terapias breves basadas en evidencia. Acompa\xF1o a adolescentes y adultos en el abordaje de trastornos de la conducta alimentaria, ansiedad y depresi\xF3n, mediante procesos terap\xE9uticos individuales y familiares orientados a promover el bienestar emocional y mejorar la calidad de vida.",
        education: [
          'Licenciatura en Psicolog\xEDa - Universidad Cat\xF3lica Boliviana "San Pablo".',
          'Certificaci\xF3n en Neuropsicolog\xEDa Cl\xEDnica: Evaluaci\xF3n con herramientas de screening - Universidad Cat\xF3lica Boliviana "San Pablo".',
          "Maestrante en Psicolog\xEDa Cl\xEDnica - Universidad Andina Sim\xF3n Bol\xEDvar, sede Sucre."
        ],
        specializations: [
          "Terapia individual para trastornos de la conducta alimentaria, ansiedad y depresi\xF3n",
          "Terapia familiar orientada al acompa\xF1amiento y manejo de trastornos de la conducta alimentaria"
        ],
        philosophy: "Creo que la salud mental es la base para construir una vida plena. La forma en que pensamos, sentimos y actuamos influye directamente en nuestro bienestar, nuestras relaciones y nuestra capacidad para alcanzar nuestras metas. Mi compromiso es brindarte un espacio seguro, de escucha y acompa\xF1amiento, donde juntos podamos desarrollar las herramientas necesarias para afrontar los desaf\xEDos de la vida y generar cambios duraderos."
      },
      {
        name: "Cecilia Monterrey",
        specialty: "\xC1rea de Entrenamiento",
        city: "La Paz",
        id: "cecilia-monterrey",
        image: "assets/Profiles/normalized/Cecilia.png",
        description: "Entrenadora personal certificada con experiencia en entrenamiento de fuerza, recomposici\xF3n corporal y promoci\xF3n de h\xE1bitos saludables. Mi enfoque se basa en la prescripci\xF3n individualizada del ejercicio, adaptando cada programa a las necesidades, objetivos y condici\xF3n f\xEDsica de cada persona para lograr resultados seguros y sostenibles. Cuento con formaci\xF3n especializada en salud femenina, lo que me permite abordar las particularidades del entrenamiento y la nutrici\xF3n de la mujer en las diferentes etapas de la vida, sin perder de vista un enfoque integral orientado a la salud y el bienestar de todas las personas.",
        education: [
          "Certificaci\xF3n como Personal Trainer - FEBOFI (2017).",
          "Certificaci\xF3n como Bodybuilding and Fitness Trainer - Academia Olympia (2021).",
          "Certificaci\xF3n especializada en Nutrici\xF3n, Entrenamiento y Farmacolog\xEDa de la Mujer - CIC\xC9."
        ],
        specializations: [
          "Entrenamiento de fuerza",
          "Recomposici\xF3n corporal",
          "P\xE9rdida de grasa y desarrollo de masa muscular",
          "Entrenamiento para la salud y el bienestar",
          "Salud femenina y entrenamiento en las diferentes etapas de la vida",
          "Educaci\xF3n en h\xE1bitos saludables y adherencia al ejercicio",
          "Prescripci\xF3n individualizada del ejercicio"
        ],
        achievements: [
          "Campeona Absoluta FEBOFI a nivel Municipal y Departamental, categor\xEDa Bikini (2021).",
          "Campeona Novice Wellness NPC (2024)."
        ],
        philosophy: "Creo que el ejercicio es una herramienta fundamental para mejorar la salud, prevenir enfermedades y aumentar la calidad de vida. Mi objetivo es acompa\xF1ar a cada persona mediante programas de entrenamiento personalizados, seguros y adaptados a sus necesidades, fomentando h\xE1bitos sostenibles que contribuyan a su bienestar f\xEDsico y mental."
      }
    ];
    this.values = [
      {
        icon: "verified_user",
        iconPath: "assets/icons/vegetable-icon (20).png",
        title: "Confianza",
        description: "Construimos relaciones basadas en la confianza y la transparencia con cada paciente"
      },
      {
        icon: "favorite",
        iconPath: "assets/icons/vegetable-icon (21).png",
        title: "Compromiso",
        description: "Dedicados a tu bienestar y a acompa\xF1arte en cada paso de tu proceso"
      },
      {
        icon: "people",
        iconPath: "assets/icons/vegetable-icon (22).png",
        title: "Empat\xEDa",
        description: "Comprendemos tus necesidades y te acompa\xF1amos con cercan\xEDa y calidez"
      },
      {
        icon: "workspace_premium",
        iconPath: "assets/icons/vegetable-icon (23).png",
        title: "Profesionalismo",
        description: "Respaldo cient\xEDfico y experiencia en cada consulta y recomendaci\xF3n"
      },
      {
        icon: "balance",
        iconPath: "assets/icons/vegetable-icon (24).png",
        title: "\xC9tica",
        description: "Actuamos con integridad y responsabilidad en cada aspecto de nuestro trabajo"
      },
      {
        icon: "school",
        iconPath: "assets/icons/vegetable-icon (25).png",
        title: "Educaci\xF3n",
        description: "Empoderamos a nuestros pacientes con conocimiento para decisiones saludables"
      },
      {
        icon: "spa",
        iconPath: "assets/icons/vegetable-icon (26).png",
        title: "Bienestar Integral",
        description: "Enfoque hol\xEDstico que considera cuerpo, mente y estilo de vida"
      }
    ];
    this.milestones = [
      { year: "2018", event: "Fundaci\xF3n de Alimenta" },
      { year: "2019", event: "Expansi\xF3n del equipo multidisciplinario" },
      { year: "2021", event: "Implementaci\xF3n de atenci\xF3n online" },
      { year: "2023", event: "M\xE1s de 1000 pacientes atendidos" },
      { year: "2025", event: "Programa de nutrici\xF3n corporativa" }
    ];
  }
  static {
    this.\u0275fac = function AboutComponent_Factory(t) {
      return new (t || _AboutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 56, vars: 8, consts: [["materialValueIcon", ""], [1, "page-hero"], [1, "container"], [1, "history-section"], [1, "content-grid"], [1, "text-content"], [1, "section-kicker"], [4, "ngFor", "ngForOf"], [1, "image-content"], ["alt", "Espacio de atenci\xF3n de Alimenta", 3, "src"], [1, "spaces-section", "bg-cream-soft"], [1, "section-title"], [1, "spaces-grid"], ["class", "space-photo", 4, "ngFor", "ngForOf"], [1, "mission-vision", "bg-cream"], [1, "mv-grid"], [1, "mv-card"], [1, "values-section"], [1, "grid", "grid-4"], ["class", "value-card", 4, "ngFor", "ngForOf"], [1, "team-section", "bg-beige"], [1, "section-subtitle"], [1, "team-grid"], ["class", "team-member", 3, "id", 4, "ngFor", "ngForOf"], [1, "timeline-section"], [1, "timeline"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "space-photo"], [3, "src", "alt"], [1, "value-card"], [1, "value-icon"], ["class", "alimenta-icon", 3, "src", "alt", 4, "ngIf", "ngIfElse"], [1, "alimenta-icon", 3, "src", "alt"], [1, "material-icons"], [1, "team-member", 3, "id"], [1, "member-image"], [3, "src", "alt", 4, "ngIf"], ["class", "member-image-placeholder", 4, "ngIf"], [1, "member-info"], [1, "specialty"], [1, "member-meta"], [4, "ngIf"], ["class", "city", 4, "ngIf"], ["class", "description", 4, "ngIf"], [1, "member-detail-grid"], ["class", "member-detail", 4, "ngIf"], ["class", "member-philosophy", 4, "ngIf"], [1, "member-image-placeholder"], [1, "city"], [1, "description"], [1, "member-detail"], [1, "member-philosophy"], [1, "timeline-item"], [1, "timeline-year"], [1, "timeline-content"]], template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 1)(1, "div", 2)(2, "h1");
        \u0275\u0275text(3, "Sobre Nosotros");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Conoce nuestra historia, misi\xF3n y el enfoque integral de Alimenta");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "section", 3)(7, "div", 2)(8, "div", 4)(9, "div", 5)(10, "span", 6);
        \u0275\u0275text(11, "\xBFQu\xE9 es Alimenta?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "h2");
        \u0275\u0275text(13, "Nuestra Historia");
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, AboutComponent_p_14_Template, 2, 1, "p", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 8);
        \u0275\u0275element(16, "img", 9);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(17, "section", 10)(18, "div", 2)(19, "h2", 11);
        \u0275\u0275text(20, "Nuestros Espacios");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 12);
        \u0275\u0275template(22, AboutComponent_div_22_Template, 2, 2, "div", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "section", 14)(24, "div", 2)(25, "div", 15)(26, "div", 16)(27, "h2");
        \u0275\u0275text(28, "Misi\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "p");
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 16)(32, "h2");
        \u0275\u0275text(33, "Visi\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "p");
        \u0275\u0275text(35);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(36, "section", 17)(37, "div", 2)(38, "h2", 11);
        \u0275\u0275text(39, "Nuestros Valores");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 18);
        \u0275\u0275template(41, AboutComponent_div_41_Template, 9, 4, "div", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "section", 20)(43, "div", 2)(44, "h2", 11);
        \u0275\u0275text(45, "Nuestro Equipo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "p", 21);
        \u0275\u0275text(47, " Alimenta est\xE1 conformado por profesionales especializados en nutrici\xF3n cl\xEDnica, deportiva, pedi\xE1trica, psicolog\xEDa y entrenamiento f\xEDsico. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 22);
        \u0275\u0275template(49, AboutComponent_div_49_Template, 18, 12, "div", 23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "section", 24)(51, "div", 2)(52, "h2", 11);
        \u0275\u0275text(53, "Nuestro Recorrido");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div", 25);
        \u0275\u0275template(55, AboutComponent_div_55_Template, 6, 2, "div", 26);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("ngForOf", ctx.history);
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.aboutImages[0], \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.aboutImages.slice(1));
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.mission);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.vision);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.values);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.team);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.milestones);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.page-hero[_ngcontent-%COMP%] {\n  background: #fbf2df;\n  padding: 1.25rem 0 1rem;\n  text-align: center;\n}\n.hero-eyebrow[_ngcontent-%COMP%] {\n  color: #b37d5a;\n  display: inline-block;\n  font-size: 0.8rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  margin-bottom: 0.6rem;\n  text-transform: uppercase;\n}\n.page-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #24485a;\n  font-size: clamp(2rem, 4vw, 3rem);\n  font-weight: 500;\n  line-height: 1.1;\n  margin: 0 0 0.8rem;\n}\n.page-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after {\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-sand) 0%,\n      #d9a586 52%,\n      var(--brand-sand-soft) 100%);\n  border-radius: 999px;\n  content: "";\n  display: block;\n  height: 4px;\n  margin: 0.65rem auto 0;\n  width: 120px;\n}\n.page-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5f6670;\n  font-size: 1.08rem;\n  line-height: 1.5;\n  max-width: 720px;\n  margin: 0 auto;\n}\n.history-section[_ngcontent-%COMP%] {\n  padding: 0 0 var(--spacing-xl) !important;\n}\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-lg);\n  align-items: center;\n}\n.text-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  margin-bottom: var(--spacing-sm);\n}\n.text-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm);\n  line-height: 1.65;\n  text-align: justify;\n  text-justify: inter-word;\n}\n.section-kicker[_ngcontent-%COMP%] {\n  color: var(--accent-dark);\n  display: block;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  margin-bottom: 0.45rem;\n  text-transform: uppercase;\n}\n.image-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 4 / 3;\n  border-radius: var(--radius-lg);\n  object-fit: cover;\n  box-shadow: var(--shadow-md);\n}\n.spaces-section[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl) 0;\n}\n.spaces-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.space-photo[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n}\n.space-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  aspect-ratio: 4 / 3;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n  width: 100%;\n}\n.space-photo[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.mission-vision[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl) 0;\n}\n.mv-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: var(--spacing-lg);\n}\n.mv-card[_ngcontent-%COMP%] {\n  background-color: var(--neutral-white);\n  padding: var(--spacing-lg);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n}\n.mv-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: var(--spacing-sm);\n}\n.mv-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--primary-green);\n  margin-bottom: var(--spacing-sm);\n}\n.mv-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  text-align: justify;\n  text-justify: inter-word;\n}\n.values-section[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl) 0;\n}\n.value-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-md);\n}\n.value-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: var(--spacing-sm);\n}\n.value-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--neutral-dark);\n  margin-bottom: var(--spacing-sm);\n}\n.team-section[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl) 0;\n}\n.team-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--spacing-lg);\n}\n.team-member[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: var(--spacing-md);\n  background-color: var(--neutral-white);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-md);\n  box-shadow: var(--shadow-sm);\n  scroll-margin-top: 96px;\n}\n.member-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 270px;\n  overflow: hidden;\n  border-radius: var(--radius-md);\n}\n.member-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.member-image-placeholder[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: var(--neutral-cream);\n  color: var(--primary-green);\n  display: flex;\n  font-size: 4rem;\n  font-weight: 700;\n  height: 100%;\n  justify-content: center;\n  width: 100%;\n}\n.member-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--neutral-dark);\n  margin-bottom: 0.5rem;\n}\n.specialty[_ngcontent-%COMP%] {\n  color: var(--primary-green);\n  font-weight: 600;\n  font-size: 1rem;\n  margin-bottom: var(--spacing-sm) !important;\n}\n.member-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 0.65rem;\n}\n.member-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--brand-blue-soft-2);\n  border: 1px solid rgba(63, 110, 129, 0.14);\n  border-radius: 999px;\n  color: var(--primary-dark);\n  font-size: 0.78rem;\n  font-weight: 600;\n  padding: 4px 10px;\n}\n.city[_ngcontent-%COMP%] {\n  align-items: center;\n  display: inline-flex;\n  gap: 4px;\n  margin-bottom: 0.8rem;\n}\n.city[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.description[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm);\n  line-height: 1.6;\n  text-align: justify;\n  text-justify: inter-word;\n}\n.member-detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  margin-top: var(--spacing-sm);\n}\n.member-detail[_ngcontent-%COMP%] {\n  background: var(--bg-cream-soft);\n  border-radius: 12px;\n  padding: 14px;\n}\n.member-detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .member-philosophy[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  font-size: 0.95rem;\n  margin-bottom: 0.55rem;\n}\n.member-detail[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.member-detail[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.88rem;\n  line-height: 1.45;\n  padding-left: 1rem;\n  position: relative;\n}\n.member-detail[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  color: var(--primary);\n  content: "\\2022";\n  font-weight: 700;\n  left: 0;\n  position: absolute;\n}\n.member-philosophy[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-left: 4px solid var(--accent);\n  margin-top: 14px;\n  padding: 12px 14px;\n}\n.member-philosophy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1.55;\n  margin: 0;\n  text-align: justify;\n  text-justify: inter-word;\n}\n.education[_ngcontent-%COMP%], .certifications[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-sm);\n}\n.education[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .certifications[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--neutral-dark);\n  font-size: var(--font-size-base);\n  margin-bottom: 0.5rem;\n}\n.certifications[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n}\n.certifications[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n  position: relative;\n  margin-bottom: 0.5rem;\n  color: var(--neutral-gray);\n}\n.certifications[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2713";\n  position: absolute;\n  left: 0;\n  color: var(--primary-green);\n  font-weight: bold;\n}\n.timeline-section[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl) 0;\n}\n.timeline[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  position: relative;\n  padding-left: 50px;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 20px;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background-color: var(--primary-light);\n}\n.timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: var(--spacing-lg);\n}\n.timeline-year[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -50px;\n  top: 0;\n  font-size: var(--font-size-xl);\n  font-weight: 700;\n  color: var(--primary-green);\n}\n.timeline-year[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  right: -32px;\n  top: 8px;\n  width: 15px;\n  height: 15px;\n  background-color: var(--primary-green);\n  border-radius: 50%;\n  border: 3px solid var(--neutral-white);\n  box-shadow: 0 0 0 3px var(--primary-light);\n}\n.timeline-content[_ngcontent-%COMP%] {\n  background-color: var(--neutral-cream);\n  padding: var(--spacing-sm) var(--spacing-md);\n  border-radius: var(--radius-md);\n  margin-left: var(--spacing-md);\n}\n.timeline-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--neutral-dark);\n  font-weight: 500;\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl) 0;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-green) 0%,\n      var(--primary-dark) 100%);\n}\n.cta-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--neutral-white);\n  margin-bottom: var(--spacing-sm);\n}\n.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.95);\n  font-size: var(--font-size-lg);\n  margin-bottom: var(--spacing-md);\n}\n@media (max-width: 968px) {\n  .content-grid[_ngcontent-%COMP%], .mv-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .spaces-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .team-member[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .member-detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .member-image[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n  .timeline[_ngcontent-%COMP%] {\n    padding-left: 40px;\n  }\n  .timeline-year[_ngcontent-%COMP%] {\n    left: -40px;\n    font-size: var(--font-size-base);\n  }\n}\n@media (max-width: 768px) {\n  .page-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .page-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .timeline[_ngcontent-%COMP%] {\n    padding-left: 30px;\n  }\n  .timeline[_ngcontent-%COMP%]::before {\n    left: 10px;\n  }\n  .timeline-year[_ngcontent-%COMP%] {\n    position: static;\n    margin-bottom: 0.5rem;\n  }\n  .timeline-year[_ngcontent-%COMP%]::before {\n    left: -20px;\n  }\n  .timeline-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .spaces-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "app\\pages\\about\\about.component.ts", lineNumber: 11 });
})();

// src/app/pages/services/services.component.ts
var _forTrack0 = ($index, $item) => $item.title;
function ServicesComponent_For_13_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1);
  }
}
function ServicesComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 6)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul");
    \u0275\u0275repeaterCreate(8, ServicesComponent_For_13_For_9_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r2.listTitle);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r2.items);
  }
}
function ServicesComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(service_r3);
  }
}
var ServicesComponent = class _ServicesComponent {
  constructor() {
    this.serviceHighlights = [
      "Evaluaci\xF3n nutricional individual",
      "Planes alimentarios personalizados",
      "Talleres presenciales y virtuales",
      "Seguimiento nutricional continuo",
      "Colaboraci\xF3n con m\xE9dicos especialistas",
      "Colaboraci\xF3n con gimnasios y centros deportivos",
      "Colaboraci\xF3n con diferentes empresas en el pa\xEDs",
      "Participaci\xF3n como proveedores de redes de seguros de salud"
    ];
    this.audienceGroups = [
      {
        title: "Nutrici\xF3n Cl\xEDnica",
        description: "Para personas que presentan condiciones cl\xEDnicas o metab\xF3licas y requieren atenci\xF3n nutricional especializada.",
        listTitle: "Especialidades",
        items: [
          "Diabetes",
          "Obesidad",
          "Hipertensi\xF3n arterial",
          "Nutrici\xF3n cl\xEDnica del adulto",
          "Cirug\xEDa bari\xE1trica",
          "Salud hormonal femenina"
        ]
      },
      {
        title: "Nutrici\xF3n en las Etapas de la Vida",
        description: "Para familias que buscan acompa\xF1amiento nutricional en cada etapa del desarrollo.",
        listTitle: "Especialidades",
        items: [
          "Nutrici\xF3n pedi\xE1trica",
          "Nutrici\xF3n en la adolescencia",
          "Nutrici\xF3n materno infantil"
        ]
      },
      {
        title: "Nutrici\xF3n Deportiva y Rendimiento",
        description: "Para personas activas, deportistas amateurs y deportistas de alto rendimiento.",
        listTitle: "Especialidades",
        items: [
          "Nutrici\xF3n deportiva",
          "Rendimiento f\xEDsico",
          "Recomposici\xF3n corporal",
          "Optimizaci\xF3n de la composici\xF3n corporal"
        ]
      },
      {
        title: "Nutrici\xF3n en Recomposici\xF3n Corporal",
        description: "Para personas que buscan acompa\xF1amiento nutricional para mejorar la composici\xF3n corporal.",
        listTitle: "Objetivos",
        items: [
          "P\xE9rdida de peso",
          "P\xE9rdida de grasa corporal",
          "Incremento de masa muscular",
          "Acompa\xF1amiento pre y post cirug\xEDa bari\xE1trica"
        ]
      }
    ];
    this.services = [
      {
        id: 1,
        title: "Nutrici\xF3n Cl\xEDnica del Adulto",
        icon: "local_hospital",
        iconPath: "assets/icons/vegetable-icon (10).png",
        description: "Manejo nutricional especializado para pacientes con condiciones cl\xEDnicas y/o metab\xF3licas.",
        targetAudience: "Pacientes con diabetes, obesidad, hipertensi\xF3n y otras condiciones de salud",
        benefits: [
          "Evaluaci\xF3n nutricional completa",
          "Plan alimentario terap\xE9utico personalizado",
          "Seguimiento y ajustes continuos",
          "Coordinaci\xF3n con m\xE9dicos tratantes"
        ],
        duration: "Seg\xFAn necesidades individuales",
        whatsappMsg: "Hola! Me interesa el servicio de Nutrici\xF3n Cl\xEDnica del Adulto"
      },
      {
        id: 2,
        title: "Cirug\xEDa Bari\xE1trica",
        icon: "medical_services",
        iconPath: "assets/icons/vegetable-icon (11).png",
        description: "Acompa\xF1amiento nutricional pre y post cirug\xEDa bari\xE1trica para resultados \xF3ptimos.",
        targetAudience: "Pacientes candidatos o que ya pasaron por cirug\xEDa bari\xE1trica",
        benefits: [
          "Preparaci\xF3n preoperatoria",
          "Acompa\xF1amiento post-quir\xFArgico",
          "Planes de alimentaci\xF3n progresivos",
          "Prevenci\xF3n de complicaciones"
        ],
        duration: "Seguimiento continuo",
        whatsappMsg: "Hola! Me interesa el servicio de Nutrici\xF3n para Cirug\xEDa Bari\xE1trica"
      },
      {
        id: 3,
        title: "Salud Hormonal Femenina",
        icon: "favorite",
        iconPath: "assets/icons/vegetable-icon (12).png",
        description: "Enfoque en medicina del estilo de vida (MEV) para salud hormonal en diferentes etapas de la mujer.",
        targetAudience: "Mujeres que buscan equilibrio hormonal y bienestar integral",
        benefits: [
          "Evaluaci\xF3n hormonal nutricional",
          "Plan alimentario para equilibrio hormonal",
          "Acompa\xF1amiento en diferentes etapas",
          "Enfoque anti-dietas"
        ],
        duration: "M\xEDnimo 3 meses",
        whatsappMsg: "Hola! Me interesa el servicio de Salud Hormonal Femenina"
      },
      {
        id: 4,
        title: "Nutrici\xF3n Pedi\xE1trica",
        icon: "child_care",
        iconPath: "assets/icons/vegetable-icon (13).png",
        description: "Asesor\xEDa nutricional para el crecimiento y desarrollo saludable de los ni\xF1os.",
        targetAudience: "Padres de familia que buscan una mejor alimentaci\xF3n para sus hijos",
        benefits: [
          "Evaluaci\xF3n del crecimiento y desarrollo",
          "Planes alimentarios adaptados a la edad",
          "Educaci\xF3n nutricional para padres",
          "Manejo de selectividad alimentaria"
        ],
        duration: "Seg\xFAn necesidades del ni\xF1o",
        whatsappMsg: "Hola! Me interesa el servicio de Nutrici\xF3n Pedi\xE1trica"
      },
      {
        id: 5,
        title: "Nutrici\xF3n en la Adolescencia",
        icon: "school",
        iconPath: "assets/icons/vegetable-icon (14).png",
        description: "Orientaci\xF3n nutricional especializada para adolescentes en etapa de crecimiento.",
        targetAudience: "Adolescentes y sus familias",
        benefits: [
          "Atenci\xF3n personalizada para adolescentes",
          "Construcci\xF3n de h\xE1bitos saludables",
          "Educaci\xF3n nutricional",
          "Prevenci\xF3n de trastornos alimentarios"
        ],
        duration: "M\xEDnimo 2 meses",
        whatsappMsg: "Hola! Me interesa el servicio de Nutrici\xF3n en la Adolescencia"
      },
      {
        id: 6,
        title: "Nutrici\xF3n Materno Infantil",
        icon: "pregnant_woman",
        iconPath: "assets/icons/vegetable-icon (15).png",
        description: "Acompa\xF1amiento nutricional durante el embarazo, lactancia y primeros a\xF1os del beb\xE9.",
        targetAudience: "Mujeres embarazadas, en lactancia y madres de beb\xE9s",
        benefits: [
          "Nutrici\xF3n durante el embarazo",
          "Apoyo en la lactancia materna",
          "Introducci\xF3n de alimentaci\xF3n complementaria",
          "Baby Led Weaning (BLW)"
        ],
        duration: "Seg\xFAn etapa",
        whatsappMsg: "Hola! Me interesa el servicio de Nutrici\xF3n Materno Infantil"
      },
      {
        id: 7,
        title: "Nutrici\xF3n Deportiva",
        icon: "sports_soccer",
        iconPath: "assets/icons/vegetable-icon (16).png",
        description: "Optimiza tu rendimiento deportivo con planes nutricionales especializados.",
        targetAudience: "Deportistas amateurs y de alto rendimiento",
        benefits: [
          "Evaluaci\xF3n de composici\xF3n corporal",
          "Plan de alimentaci\xF3n deportiva",
          "Periodizaci\xF3n nutricional",
          "Estrategias de suplementaci\xF3n"
        ],
        duration: "M\xEDnimo 3 meses",
        whatsappMsg: "Hola! Me interesa el servicio de Nutrici\xF3n Deportiva"
      },
      {
        id: 8,
        title: "Nutrici\xF3n para Rendimiento F\xEDsico",
        icon: "fitness_center",
        iconPath: "assets/icons/vegetable-icon (17).png",
        description: "Planes alimentarios para personas activas que buscan mejorar su rendimiento.",
        targetAudience: "Personas activas que entrenan regularmente",
        benefits: [
          "Plan personalizado seg\xFAn actividad f\xEDsica",
          "Optimizaci\xF3n de la composici\xF3n corporal",
          "Mejora del rendimiento f\xEDsico",
          "Recuperaci\xF3n post-entrenamiento"
        ],
        duration: "M\xEDnimo 2 meses",
        whatsappMsg: "Hola! Me interesa el servicio de Nutrici\xF3n para Rendimiento F\xEDsico"
      },
      {
        id: 9,
        title: "Recomposici\xF3n Corporal",
        icon: "monitor_weight",
        iconPath: "assets/icons/vegetable-icon (18).png",
        description: "Alcanza tu composici\xF3n corporal ideal de forma sostenible y saludable.",
        targetAudience: "Personas que buscan mejorar su composici\xF3n corporal",
        benefits: [
          "Plan personalizado sin restricciones",
          "Evaluaci\xF3n de composici\xF3n corporal",
          "Modificaci\xF3n de h\xE1bitos sostenibles",
          "Seguimiento continuo"
        ],
        duration: "Seg\xFAn objetivos (m\xEDnimo 3 meses)",
        whatsappMsg: "Hola! Me interesa el servicio de Recomposici\xF3n Corporal"
      },
      {
        id: 10,
        title: "Talleres y Educaci\xF3n Nutricional",
        icon: "menu_book",
        iconPath: "assets/icons/vegetable-icon (19).png",
        description: "Talleres presenciales y virtuales de educaci\xF3n alimentaria para grupos y empresas.",
        targetAudience: "Empresas, grupos y comunidades",
        benefits: [
          "Talleres personalizados seg\xFAn grupo",
          "Modalidad presencial y virtual",
          "Temas variados de nutrici\xF3n",
          "Material educativo incluido"
        ],
        duration: "Seg\xFAn programaci\xF3n",
        whatsappMsg: "Hola! Me interesa informaci\xF3n sobre los Talleres y Educaci\xF3n Nutricional"
      }
    ];
  }
  contactWhatsApp(message) {
    const phone = "59177731818";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }
  static {
    this.\u0275fac = function ServicesComponent_Factory(t) {
      return new (t || _ServicesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesComponent, selectors: [["app-services"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 0, consts: [[1, "services-page"], [1, "hero-section"], [1, "container"], [1, "subtitle"], [1, "audiences-section"], [1, "audience-grid"], [1, "audience-card"], [1, "service-highlights-section"], [1, "service-highlights"]], template: function ServicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4, "Nuestros Servicios");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Soluciones integrales de nutrici\xF3n adaptadas a tus necesidades");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "section", 4)(8, "div", 2)(9, "h2");
        \u0275\u0275text(10, "\xBFA qui\xE9nes ayudamos?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275repeaterCreate(12, ServicesComponent_For_13_Template, 10, 3, "article", 6, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "section", 7)(15, "div", 2)(16, "h2");
        \u0275\u0275text(17, "Nuestros Servicios");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "ul", 8);
        \u0275\u0275repeaterCreate(19, ServicesComponent_For_20_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.audienceGroups);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.serviceHighlights);
      }
    }, dependencies: [CommonModule], styles: ['\n\n.hero-section[_ngcontent-%COMP%] {\n  background: #fbf2df;\n  padding: 1.25rem 0 1rem;\n  text-align: center;\n}\n.hero-eyebrow[_ngcontent-%COMP%] {\n  color: #b37d5a;\n  display: inline-block;\n  font-size: 0.8rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  margin-bottom: 0.6rem;\n  text-transform: uppercase;\n}\n.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #24485a;\n  font-size: clamp(2rem, 4vw, 3rem);\n  font-weight: 500;\n  line-height: 1.1;\n  margin: 0 0 0.8rem;\n}\n.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after {\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-sand) 0%,\n      #d9a586 52%,\n      var(--brand-sand-soft) 100%);\n  border-radius: 999px;\n  content: "";\n  display: block;\n  height: 4px;\n  margin: 0.65rem auto 0;\n  width: 120px;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #5f6670;\n  font-size: 1.08rem;\n  line-height: 1.5;\n  max-width: 720px;\n  margin: 0 auto;\n}\n.audiences-section[_ngcontent-%COMP%] {\n  background: #fbf2df;\n  padding: 0 0 44px !important;\n}\n.audiences-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 1.9rem;\n  font-weight: 700;\n  margin-bottom: 22px;\n  text-align: center;\n}\n.audience-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 20px;\n  max-width: 1040px;\n  margin: 0 auto;\n}\n.audience-card[_ngcontent-%COMP%] {\n  background: var(--bg-cream-soft);\n  border: 1px solid rgba(63, 110, 129, 0.1);\n  border-left: 5px solid var(--primary);\n  border-radius: 12px;\n  box-shadow: var(--shadow-sm);\n  padding: 22px;\n}\n.audience-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  font-size: 1.2rem;\n  margin-bottom: 0.65rem;\n}\n.audience-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.94rem;\n  line-height: 1.55;\n  margin-bottom: 1rem;\n  text-align: justify;\n  text-justify: inter-word;\n}\n.audience-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  font-size: 0.95rem;\n  margin-bottom: 0.55rem;\n}\n.audience-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 7px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.audience-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  font-size: 0.92rem;\n  line-height: 1.35;\n  padding-left: 1.3rem;\n  position: relative;\n}\n.audience-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  color: var(--primary);\n  content: "\\2713";\n  font-weight: 700;\n  left: 0;\n  position: absolute;\n  top: 0;\n}\n.service-highlights-section[_ngcontent-%COMP%] {\n  background: #fbf2df;\n  padding: 54px 0;\n}\n.service-highlights-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 1.9rem;\n  font-weight: 700;\n  margin-bottom: 28px;\n  text-align: center;\n}\n.service-highlights[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  list-style: none;\n  margin: 0 auto;\n  max-width: 980px;\n  padding: 0;\n}\n.service-highlights[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  box-shadow: var(--shadow-sm);\n  color: var(--text-dark);\n  font-size: 0.95rem;\n  line-height: 1.4;\n  padding: 14px 16px 14px 42px;\n  position: relative;\n}\n.service-highlights[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  color: var(--primary);\n  content: "\\2713";\n  font-size: 1.15rem;\n  font-weight: 700;\n  left: 18px;\n  position: absolute;\n  top: 13px;\n}\n.our-services-section[_ngcontent-%COMP%] {\n  padding: 54px 0;\n  background: #fbf2df;\n}\n.our-services-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.9rem;\n  color: var(--primary);\n  margin-bottom: 28px;\n  text-align: center;\n  font-weight: 700;\n}\n.services-overview[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  max-width: 800px;\n  margin: 0 auto;\n  display: grid;\n  gap: 10px;\n}\n.services-overview[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  padding-left: 40px;\n  background: #f9f9f9;\n  border-radius: 8px;\n  font-size: 0.98rem;\n  color: #333;\n  line-height: 1.6;\n  position: relative;\n  transition: all 0.3s ease;\n  border-left: 4px solid var(--primary);\n}\n.services-overview[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2713";\n  position: absolute;\n  left: 15px;\n  color: var(--primary);\n  font-weight: bold;\n  font-size: 1.3rem;\n}\n.services-overview[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: rgba(var(--primary-rgb), 0.05);\n  transform: translateX(5px);\n}\n.services-grid[_ngcontent-%COMP%] {\n  padding: 54px 0;\n  background: #fbf2df;\n}\n.services-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 22px;\n}\n.service-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 24px;\n  border-radius: 15px;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n}\n.service-icon[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  margin-bottom: 12px;\n  display: block;\n}\n.service-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 1.35rem;\n  margin-bottom: 10px;\n}\n.service-description[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 0.96rem;\n  line-height: 1.6;\n  margin-bottom: 18px;\n  text-align: justify;\n  text-justify: inter-word;\n}\n.service-details[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-bottom: 25px;\n}\n.detail-item[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.detail-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 1.1rem;\n  margin-bottom: 8px;\n  font-weight: 600;\n}\n.detail-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.95rem;\n  line-height: 1.5;\n  text-align: justify;\n  text-justify: inter-word;\n}\n.detail-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n.detail-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.95rem;\n  padding: 5px 0;\n  padding-left: 20px;\n  position: relative;\n}\n.detail-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2713";\n  color: var(--primary);\n  font-weight: bold;\n  position: absolute;\n  left: 0;\n}\n.cta-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--primary) 100%);\n  color: white;\n  padding: 54px 0;\n  text-align: center;\n}\n.cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 15px;\n}\n.cta-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  margin-bottom: 30px;\n  opacity: 0.95;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  padding: 12px 28px;\n  border: none;\n  border-radius: 30px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  transform: scale(1.05);\n}\n.cta-section[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--primary);\n  width: auto;\n}\n.cta-section[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .subtitle[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .services-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .audience-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .service-highlights[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cta-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesComponent, { className: "ServicesComponent", filePath: "app\\pages\\services\\services.component.ts", lineNumber: 11 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "", component: HomeComponent },
  { path: "sobre-nosotros", component: AboutComponent },
  { path: "servicios", component: ServicesComponent },
  {
    path: "planes",
    loadComponent: () => import("./chunk-EGZ3ZYHK.js").then((m) => m.PlansComponent)
  },
  {
    path: "productos",
    loadComponent: () => import("./chunk-US5EY7BR.js").then((m) => m.ProductsComponent)
  },
  {
    path: "empresas",
    loadComponent: () => import("./chunk-S2HB2M67.js").then((m) => m.CompaniesComponent)
  },
  {
    path: "blog",
    loadComponent: () => import("./chunk-5PH2IHEQ.js").then((m) => m.BlogComponent)
  },
  {
    path: "contacto",
    loadComponent: () => import("./chunk-LVYRCLZ2.js").then((m) => m.ContactComponent)
  },
  {
    path: "faq",
    loadComponent: () => import("./chunk-IPOQSVGB.js").then((m) => m.FaqComponent)
  },
  {
    path: "terminos-de-uso",
    loadComponent: () => import("./chunk-UXHPKF32.js").then((m) => m.TermsComponent)
  },
  {
    path: "aviso-legal",
    loadComponent: () => import("./chunk-LOR74P7E.js").then((m) => m.LegalNoticeComponent)
  },
  { path: "**", redirectTo: "" }
];

// src/main.ts
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch((err) => console.error(err));
