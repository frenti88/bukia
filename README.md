# BOOKIA — Editorial Digital de Lectura Concentrada

> **"Ideas que respetan el tiempo del lector. Historias que no necesitan cientos de páginas para conmover."**

BOOKIA es una editorial y tienda digital premium concebida para publicar obras breves originales de alta calidad (máximo aproximado de 50 páginas, 20 a 30 minutos de lectura profunda), distribuidas en formatos universales **PDF** y **EPUB** con un precio uniforme de **US$1.00**.

---

## 🏛 Principios de Diseño y Arquitectura

1. **Lectura Concentrada, No Libros Resumidos**: Cada título es una obra íntegra, editada con rigor y concebida desde su concepción para una extensión breve.
2. **El Precio de US$1 como Reductor de Fricción**: El precio no es una oferta ni un saldo; es una invitación a descubrir y leer sin deliberaciones cognitivas.
3. **Dirección Visual de Revista Cultural**: Inspirado en publicaciones de culto como *Kinfolk, The Paris Review, Stripe Press, Faber y Gallimard*. Abundante espacio negativo, tipografía humanista (`Newsreader`), fuentes funcionales (`Plus Jakarta Sans`) y detalles monospaciados editoriales (`JetBrains Mono`).
4. **"Lee antes de comprar" sin registro**: Cada libro cuenta con una experiencia de lectura de muestra inmediata con control de tipografía, tamaño y temas (Papel, Sepia, Noche).
5. **Checkout Demo en 1 Clic**: Flujo ultra optimizado para producto digital: cero preguntas de dirección física o código postal. Entrega inmediata con descargas simuladas de PDF y EPUB y botón directo de lectura web.

---

## 📚 Las 5 Firmas Editoriales y Obras Iniciales

| Arquetipo | Firma Editorial | Obra Publicada | Categoría | Extensión |
| :--- | :--- | :--- | :--- | :--- |
| **A. El Observador Práctico** | **Julián Vane** | *La Trampa de la Certeza* | Psicología & Comportamiento | 48 págs · 26 min |
| **B. El Estratega** | **Marco S. Levin** | *Sistemas Silenciosos* | Negocios & Estrategia | 44 págs · 24 min |
| **C. La Voz Íntima** | **Elena Rivas** | *Las Habitaciones del Domingo* | Ficción Contemporánea | 52 págs · 30 min |
| **D. El Cronista Contemporáneo** | **Tomás Beretta** | *La Atención Secuestrada* | Cultura & Sociedad | 46 págs · 25 min |
| **E. El Explorador** | **Nora K. Dahl** | *La Geometría del Asombro* | Ciencia & Futuro | 42 págs · 22 min |

---

## 🛠 Stack Técnico

- **Framework**: React 19 + TypeScript
- **Bundler & Build Tool**: Vite 8
- **Estilos**: Tailwind CSS + Custom Editorial Design System Tokens
- **Iconografía**: Lucide React
- **Tipografía**: Google Fonts (`Newsreader`, `Plus Jakarta Sans`, `JetBrains Mono`)
- **Accesibilidad**: WCAG AA, soporte para `prefers-reduced-motion`, foco visible, teclado completo (`⌘K` para búsqueda, `Esc` para modales).

---

## 🚀 Puesta en Marcha Local

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview
```
