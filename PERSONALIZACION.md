# 📝 Guía Rápida de Personalización - Alimenta

## ⚡ Cambios Urgentes e Importantes

### 1. Número de WhatsApp (IMPORTANTE ❗)

Cambiar `'59175000000'` por tu número real en estos archivos:

1. `src/app/pages/home/home.component.ts` - Línea 13
2. `src/app/pages/services/services.component.ts` - Línea 128
3. `src/app/pages/plans/plans.component.ts` - Línea 144
4. `src/app/pages/blog/blog.component.ts` - Línea 128
5. `src/app/pages/contact/contact.component.ts` - Línea 58
6. `src/app/pages/faq/faq.component.ts` - Línea 142
7. `src/app/shared/whatsapp-button/whatsapp-button.component.ts` - Línea 10
8. `src/app/shared/header/header.component.html` - Línea 47

**Formato**: Código de país + número (sin espacios, sin +)
**Ejemplo para Bolivia**: `59175123456`

### 2. Información de Contacto

**Archivo**: `src/app/pages/contact/contact.component.ts` (Líneas 15-21)
**Archivo**: `src/app/shared/footer/footer.component.ts` (Líneas 25-29)

```typescript
contactInfo = {
  whatsapp: '+591 75000000',      // ← Cambiar
  phone: '+591 75000000',          // ← Cambiar
  email: 'contacto@alimenta.bo',   // ← Cambiar
  address: 'Tu dirección completa',// ← Cambiar
  city: 'Tu Ciudad, Bolivia',      // ← Cambiar
  // ...
};
```

### 3. Redes Sociales

**Archivo**: `src/app/pages/contact/contact.component.ts` (Líneas 27-37)
**Archivo**: `src/app/shared/footer/footer.component.ts` (Líneas 19-23)

```typescript
socialMedia = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/TU_USUARIO',  // ← Cambiar
    handle: '@TU_USUARIO'                      // ← Cambiar
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/TU_PAGINA',    // ← Cambiar
    handle: '/TU_PAGINA'                       // ← Cambiar
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@TU_USUARIO',    // ← Cambiar
    handle: '@TU_USUARIO'                      // ← Cambiar
  }
];
```

### 4. Logo y Colores

#### Logo:
- Coloca tu logo en: `src/assets/images/logo-alimenta.png`
- Tamaño recomendado: 200x80px (transparente PNG)

#### Colores:
**Archivo**: `src/styles.css` (Líneas 11-19)

```css
--primary-green: #7FB069;      /* Verde principal - ← Cambiar */
--primary-light: #A7D49B;      /* Verde claro - ← Cambiar */
--primary-dark: #5A8C4F;       /* Verde oscuro - ← Cambiar */
```

### 5. Imágenes

Coloca tus imágenes en `src/assets/images/` siguiendo esta estructura:

```
assets/images/
├── logo-alimenta.png           ← Tu logo
├── hero-nutrition.jpg          ← Imagen principal (1920x1080px)
├── centro-alimenta.jpg         ← Foto del centro (1200x800px)
├── team/                       ← Fotos del equipo
│   ├── profesional1.jpg        (500x500px cada una)
│   ├── profesional2.jpg
│   └── profesional3.jpg
├── testimonials/               ← Fotos de testimonios
│   ├── paciente1.jpg          (300x300px cada una)
│   ├── paciente2.jpg
│   └── paciente3.jpg
└── logos/                      ← Logos de empresas colaboradoras
    ├── empresa1.png
    ├── empresa2.png
    └── empresa3.png
```

### 6. Equipo Profesional

**Archivo**: `src/app/pages/home/home.component.ts` (Líneas 70-95)
**Archivo**: `src/app/pages/about/about.component.ts` (Líneas 11-50)

```typescript
team = [
  {
    name: 'Nombre Completo',                        // ← Cambiar
    specialty: 'Especialidad',                      // ← Cambiar
    image: 'assets/images/team/foto.jpg',          // ← Tu foto
    description: 'Descripción profesional',         // ← Cambiar
    education: 'Título - Universidad',              // ← Cambiar (solo en about)
    certifications: ['Cert 1', 'Cert 2']           // ← Cambiar (solo en about)
  },
  // ...agregar más miembros
];
```

### 7. Testimonios

**Archivo**: `src/app/pages/home/home.component.ts` (Líneas 66-84)

```typescript
testimonials = [
  {
    name: 'Nombre del Paciente',                    // ← Cambiar
    image: 'assets/images/testimonials/foto.jpg',  // ← Tu foto
    text: 'El testimonio completo del paciente...',// ← Cambiar
    rating: 5                                       // 1-5 estrellas
  },
  // ...agregar más testimonios
];
```

### 8. Empresas Colaboradoras

**Archivo**: `src/app/pages/services/services.component.ts` (Líneas 123-128)

```typescript
companies = [
  { name: 'Empresa 1', logo: 'assets/logos/empresa1.png' },  // ← Cambiar
  { name: 'Empresa 2', logo: 'assets/logos/empresa2.png' },  // ← Cambiar
  { name: 'Empresa 3', logo: 'assets/logos/empresa3.png' },  // ← Cambiar
];
```

## 🎯 Cambios Opcionales pero Recomendados

### Servicios

**Archivo**: `src/app/pages/services/services.component.ts` (Líneas 11-120)

Puedes modificar:
- `title`: Nombre del servicio
- `description`: Descripción breve
- `targetAudience`: Para quién es
- `benefits`: Array de beneficios
- `duration`: Duración del servicio
- `whatsappMsg`: Mensaje predefinido de WhatsApp

### Planes

**Archivo**: `src/app/pages/plans/plans.component.ts` (Líneas 11-96)

Puedes modificar:
- `name`: Nombre del plan
- `subtitle`: Subtítulo
- `price`: Precio (o "Consultar")
- `duration`: Duración
- `includes`: Array de lo que incluye
- `modality`: Presencial/Online
- `isPopular`: true/false (muestra badge "Más Elegido")

### Artículos del Blog

**Archivo**: `src/app/pages/blog/blog.component.ts` (Líneas 30-90)

Cada artículo tiene:
- `title`: Título del artículo
- `excerpt`: Resumen breve
- `category`: Categoría
- `date`: Fecha de publicación
- `readTime`: Tiempo de lectura
- `image`: Ruta de la imagen

## 🚀 Después de los Cambios

1. **Guardar todos los archivos**
2. **Reiniciar el servidor** (si está corriendo):
   ```bash
   Ctrl+C (detener)
   npm start (iniciar de nuevo)
   ```
3. **Verificar en el navegador**: `http://localhost:4200`

## ✅ Checklist de Personalización

- [ ] Cambié el número de WhatsApp en TODOS los archivos
- [ ] Actualicé la información de contacto
- [ ] Configuré las redes sociales
- [ ] Subí el logo del centro
- [ ] Subí las fotos del equipo
- [ ] Subí las fotos de testimonios
- [ ] Actualicé los datos del equipo profesional
- [ ] Actualicé los testimonios con casos reales
- [ ] Cambié los colores (opcional)
- [ ] Verifiqué que todo funciona en el navegador

## 🆘 ¿Problemas?

### El sitio no carga
```bash
npm install
npm start
```

### Los cambios no se ven
- Hacer hard refresh: `Ctrl + Shift + R`
- Borrar caché del navegador
- Reiniciar el servidor de desarrollo

### Errores de TypeScript
- Revisar que los nombres de archivos coincidan
- Verificar la sintaxis de los cambios

## 📱 Probar WhatsApp

1. Abre el sitio en el navegador
2. Click en cualquier botón "Reservar" o "Agendar"
3. Debe abrir WhatsApp Web con el número correcto
4. Si no funciona, verifica el número (debe incluir código de país)

---

**¡Listo!** Tu sitio está personalizado y listo para usar. 🎉
