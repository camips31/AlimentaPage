# 🥗 Alimenta - Centro de Nutrición en Bolivia

Sitio web informativo moderno y profesional para el centro de nutrición "Alimenta" en Bolivia.

## 📋 Descripción

Alimenta es una aplicación web desarrollada con **Angular 17** (standalone components) que presenta los servicios del centro de nutrición, facilita el contacto con pacientes y muestra el enfoque nutricional profesional del equipo.

## ✨ Características Principales

- ✅ **Diseño Moderno y Limpio**: Interfaz profesional con colores que transmiten salud y naturaleza
- ✅ **Totalmente Responsivo**: Optimizado para móviles, tablets y escritorio
- ✅ **Standalone Components**: Arquitectura moderna de Angular sin módulos
- ✅ **Integración WhatsApp**: Botón flotante y enlaces directos para consultas
- ✅ **SEO Optimizado**: Estructura preparada para posicionamiento en buscadores
- ✅ **Rápida y Eficiente**: Carga optimizada de recursos

## 🏗️ Estructura del Proyecto

```
src/app/
├── pages/
│   ├── home/              # Página de inicio
│   ├── about/             # Sobre nosotros
│   ├── services/          # Servicios detallados
│   ├── plans/             # Planes y programas
│   ├── blog/              # Blog de nutrición
│   ├── contact/           # Contacto
│   └── faq/               # Preguntas frecuentes
├── shared/
│   ├── header/            # Cabecera con navegación
│   ├── footer/            # Pie de página
│   └── whatsapp-button/   # Botón flotante de WhatsApp
├── app.component.ts       # Componente raíz
└── app.routes.ts          # Configuración de rutas
```

## 📄 Páginas Implementadas

### 1. **Inicio (Home)**
- Hero principal con llamadas a la acción
- Presentación breve de Alimenta
- Servicios destacados
- Equipo profesional
- Beneficios
- Testimonios
- CTA final

### 2. **Sobre Nosotros**
- Historia del centro
- Misión y visión
- Valores
- Equipo completo con biografías
- Línea de tiempo

### 3. **Servicios**
10 servicios completos:
- Nutrición Corporativa
- Nutrición Clínica
- Nutrición Deportiva
- Descenso de Peso
- Aumento de Masa Muscular
- Nutrición para Diabetes
- Nutrición Infantil
- Nutrición para Embarazo
- Educación Nutricional
- Planes Personalizados

### 4. **Planes y Programas**
- Plan Inicial
- Plan Transformación
- Plan Integral
- Plan Deportivo
- Plan Familiar
- Plan Corporativo

### 5. **Blog**
- Artículos de nutrición
- Filtrado por categorías
- Suscripción por WhatsApp

### 6. **Contacto**
- Formulario de contacto (envía por WhatsApp)
- Información de contacto
- Horarios de atención
- Redes sociales
- Mapa de ubicación

### 7. **FAQ**
- 15+ preguntas frecuentes
- Filtrado por categorías
- Acordeón interactivo

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ instalado
- npm o yarn

### Instalación

```bash
# Navegar a la carpeta del proyecto
cd alimentaapp

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

La aplicación estará disponible en `http://localhost:4200`

### Compilar para Producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

## ⚙️ Configuración Importante

### Número de WhatsApp

El número de WhatsApp está configurado en múltiples componentes. Para cambiarlo, busca y reemplaza:

```typescript
const phone = '59175000000';
```

Archivos donde aparece:
- `src/app/pages/home/home.component.ts`
- `src/app/pages/services/services.component.ts`
- `src/app/pages/plans/plans.component.ts`
- `src/app/pages/blog/blog.component.ts`
- `src/app/pages/contact/contact.component.ts`
- `src/app/pages/faq/faq.component.ts`
- `src/app/shared/whatsapp-button/whatsapp-button.component.ts`
- `src/app/shared/header/header.component.html`

### Información de Contacto

Editar en `src/app/shared/footer/footer.component.ts` y `src/app/pages/contact/contact.component.ts`:

```typescript
contactInfo = {
  phone: '+591 75000000',
  email: 'contacto@alimenta.bo',
  address: 'Av. Principal #123, Edificio Salud, Piso 3',
  city: 'La Paz, Bolivia'
};
```

### Redes Sociales

Editar en `src/app/shared/footer/footer.component.ts` y `src/app/pages/contact/contact.component.ts`:

```typescript
socialLinks = {
  instagram: 'https://instagram.com/alimenta_bolivia',
  facebook: 'https://facebook.com/alimentabolivia',
  tiktok: 'https://tiktok.com/@alimenta_bo'
};
```

## 🎨 Paleta de Colores

El proyecto utiliza una paleta de colores que transmite salud, naturaleza y confianza:

```css
--primary-green: #7FB069;      /* Verde principal */
--primary-light: #A7D49B;      /* Verde claro */
--primary-dark: #5A8C4F;       /* Verde oscuro */
--secondary-peach: #F4A261;    /* Durazno */
--secondary-coral: #E76F51;    /* Coral */
--neutral-cream: #FAF3E0;      /* Crema */
--neutral-beige: #EAE2D6;      /* Beige */
```

Puedes modificar estos colores en `src/styles.css`

## 📝 Personalización de Contenido

### Imágenes

Las imágenes deben colocarse en `src/assets/images/` con las siguientes subcarpetas:

```
assets/
├── images/
│   ├── logo-alimenta.png           # Logo del centro
│   ├── hero-nutrition.jpg          # Imagen hero principal
│   ├── centro-alimenta.jpg         # Foto del centro
│   ├── team/                       # Fotos del equipo
│   │   ├── elena.jpg
│   │   ├── pedro.jpg
│   │   └── martina.jpg
│   ├── testimonials/               # Fotos testimonios
│   ├── blog/                       # Imágenes de artículos
│   └── logos/                      # Logos de empresas colaboradoras
```

### Textos

Los textos están directamente en los componentes TypeScript (`.ts`). Para editarlos:

1. Abre el archivo `.ts` de la página que quieres editar
2. Busca los arrays de datos (services, testimonials, etc.)
3. Modifica el contenido
4. Guarda el archivo

**Ejemplo** - Editar servicios en Home:

```typescript
// src/app/pages/home/home.component.ts
services = [
  {
    icon: '🥗',
    title: 'Tu Título Aquí',
    description: 'Tu descripción aquí'
  },
  // ...más servicios
];
```

### Profesionales del Equipo

Editar en:
- `src/app/pages/home/home.component.ts` (equipo resumido)
- `src/app/pages/about/about.component.ts` (equipo completo)

```typescript
team = [
  {
    name: 'Nombre del profesional',
    specialty: 'Especialidad',
    image: 'assets/images/team/foto.jpg',
    description: 'Descripción breve',
    education: 'Formación académica',
    certifications: ['Certificación 1', 'Certificación 2']
  }
];
```

## 📱 Funcionalidades de WhatsApp

Todos los botones de "Reservar", "Agendar Consulta" y "Comprar" redirigen a WhatsApp con mensajes predefinidos.

### Formato del enlace:

```typescript
const phone = '59175000000'; // Incluye código de país sin +
const message = 'Hola! Me gustaría agendar una consulta';
const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
```

## 🔍 SEO

El proyecto incluye palabras clave optimizadas para Bolivia:

- nutricionista en Bolivia
- centro de nutrición
- alimentación saludable
- nutrición deportiva
- planes nutricionales
- consulta nutricional
- nutricionista online Bolivia
- nutrición corporativa Bolivia

Para mejorar el SEO, asegúrate de:
1. Agregar meta tags en `src/index.html`
2. Configurar Google Analytics
3. Crear un sitemap.xml
4. Agregar schema.org markup

## 🛠️ Tecnologías Utilizadas

- **Angular 17** - Framework principal
- **TypeScript** - Lenguaje de programación
- **CSS3** - Estilos
- **Standalone Components** - Sin NgModules
- **Router** - Navegación
- **Reactive Forms** - Formularios

## 📦 Scripts Disponibles

```bash
npm start          # Inicia el servidor de desarrollo
npm run build      # Compila para producción
npm run watch      # Compila en modo desarrollo con watch
npm test           # Ejecuta tests
```

## 🌐 Despliegue

El proyecto puede desplegarse en:

- **Netlify**: Arrastra la carpeta `dist/` o conecta tu repositorio Git
- **Vercel**: Conecta tu repositorio de GitHub
- **Firebase Hosting**: `firebase deploy`
- **GitHub Pages**: Configura GitHub Actions

### Ejemplo de despliegue en Netlify:

```bash
# Compilar
npm run build

# La carpeta dist/ está lista para subir
```

## 📞 Soporte

Para dudas o modificaciones:
- Revisa este README
- Consulta la documentación de Angular: https://angular.io
- Verifica la consola del navegador para errores

## 📄 Licencia

Este proyecto fue desarrollado específicamente para Alimenta - Centro de Nutrición en Bolivia.

---

**Desarrollado con ❤️ para Alimenta** 🥗

**Última actualización**: Mayo 2026
# AlimentaPage
