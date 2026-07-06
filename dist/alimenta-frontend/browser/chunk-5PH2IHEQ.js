import {
  CommonModule
} from "./chunk-4XT7MOVT.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MI7MW4BC.js";

// src/app/pages/blog/blog.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function BlogComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 5)(1, "div", 6);
    \u0275\u0275element(2, "img", 7);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 8)(6, "span", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 10);
    \u0275\u0275listener("click", function BlogComponent_For_9_Template_button_click_12_listener() {
      const post_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.contactWhatsApp(post_r2.title));
    });
    \u0275\u0275text(13, " Consultar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const post_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", post_r2.image, \u0275\u0275sanitizeUrl)("alt", post_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r2.label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Por ", post_r2.author, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r2.excerpt);
  }
}
var BlogComponent = class _BlogComponent {
  constructor() {
    this.blogPosts = [
      {
        id: 1,
        label: "Articulo 1",
        author: "Valeria",
        image: "assets/articulos/hambre emocional.jpg",
        title: "Como diferenciar el hambre emocional del hambre fisiologica",
        excerpt: "Una guia para reconocer senales del cuerpo, emociones y patrones que pueden influir en la alimentacion diaria."
      },
      {
        id: 2,
        label: "Articulo 2",
        author: "Valeria",
        image: "assets/articulos/Dieta restritiva.jpg",
        title: "Por que las dietas restrictivas fracasan y que hacer en su lugar",
        excerpt: "Una mirada practica sobre habitos sostenibles, flexibilidad alimentaria y acompanamiento profesional."
      },
      {
        id: 3,
        label: "Articulo 3",
        author: "Valeria",
        image: "assets/articulos/salud-matabolica.jpg",
        title: "Como mejorar tu salud metabolica con pequenos cambios diarios",
        excerpt: "Cambios simples en tu rutina que pueden apoyar tu energia, composicion corporal y bienestar general."
      }
    ];
  }
  contactWhatsApp(postTitle) {
    const phone = "59177731818";
    const message = `Hola! Quiero mas informacion sobre el blog: ${postTitle}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }
  static {
    this.\u0275fac = function BlogComponent_Factory(t) {
      return new (t || _BlogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogComponent, selectors: [["app-blog"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 0, consts: [[1, "blog-page"], [1, "blog-hero"], [1, "container"], [1, "blog-content"], [1, "posts-grid"], [1, "post-card"], [1, "post-image"], ["loading", "lazy", 3, "src", "alt"], [1, "post-content"], [1, "author"], ["type", "button", 3, "click"]], template: function BlogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4, "Articulos de Alimenta");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(5, "section", 3)(6, "div", 2)(7, "div", 4);
        \u0275\u0275repeaterCreate(8, BlogComponent_For_9_Template, 14, 6, "article", 5, _forTrack0);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.blogPosts);
      }
    }, dependencies: [CommonModule], styles: ['\n\n.blog-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #fbf2df;\n}\n.blog-hero[_ngcontent-%COMP%] {\n  background: #fbf2df;\n  padding: 1.25rem 0 1rem;\n  text-align: center;\n}\n.hero-eyebrow[_ngcontent-%COMP%] {\n  color: #b37d5a;\n  display: inline-block;\n  font-size: 0.8rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  margin-bottom: 0.6rem;\n  text-transform: uppercase;\n}\n.blog-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #24485a;\n  font-size: clamp(2rem, 4vw, 3rem);\n  font-weight: 500;\n  line-height: 1.1;\n  margin: 0;\n}\n.blog-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after {\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-sand) 0%,\n      #d9a586 52%,\n      var(--brand-sand-soft) 100%);\n  border-radius: 999px;\n  content: "";\n  display: block;\n  height: 4px;\n  margin: 0.65rem auto 0;\n  width: 120px;\n}\n.blog-content[_ngcontent-%COMP%] {\n  padding: 0 0 4rem !important;\n}\n.posts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.post-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid rgba(95, 132, 103, 0.18);\n  border-radius: 8px;\n  box-shadow: 0 12px 26px rgba(52, 80, 68, 0.1);\n  display: flex;\n  flex-direction: column;\n  min-height: 280px;\n  overflow: hidden;\n}\n.post-image[_ngcontent-%COMP%] {\n  height: 190px;\n  position: relative;\n  overflow: hidden;\n}\n.post-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  width: 100%;\n}\n.post-image[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: rgba(47, 106, 125, 0.92);\n  border-radius: 999px;\n  color: #ffffff;\n  font-size: 0.78rem;\n  font-weight: 800;\n  left: 0.85rem;\n  padding: 0.38rem 0.7rem;\n  position: absolute;\n  top: 0.85rem;\n}\n.post-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 1.1rem;\n}\n.author[_ngcontent-%COMP%] {\n  color: #b37d5a;\n  font-size: 0.82rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n.post-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #243946;\n  font-size: 1.25rem;\n  line-height: 1.22;\n  margin: 0;\n}\n.post-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5f666b;\n  font-size: 0.93rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.post-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #356f82;\n  border: 0;\n  color: #ffffff;\n  cursor: pointer;\n  font-weight: 800;\n  margin: 0 1.1rem 1.1rem;\n  padding: 0.72rem 1rem;\n  border-radius: 999px;\n}\n.post-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #b37d5a;\n}\n@media (max-width: 900px) {\n  .posts-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .blog-hero[_ngcontent-%COMP%] {\n    padding: 1.25rem 0 1rem;\n  }\n  .blog-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogComponent, { className: "BlogComponent", filePath: "app\\pages\\blog\\blog.component.ts", lineNumber: 20 });
})();
export {
  BlogComponent
};
