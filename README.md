# Portafolio - Lic. Isaac Arias García

Este es un portafolio personal hecho con HTML, CSS y JavaScript. Está pensado para ser simple y fácil de entender, especialmente para estudiantes de preparatoria.

## ¿Qué hay en este proyecto?
- `index.html` — La página principal. Contiene todo el contenido: título, texto, secciones (perfil, experiencia, habilidades, publicaciones y contacto) y las referencias a las imágenes.
- `style.css` — Define los colores, tamaños, diseño y estilos (incluye soporte para modo oscuro).
- `script.js` — Agrega pequeñas animaciones al hacer scroll y permite alternar el modo oscuro (se guarda la preferencia en el navegador).
- `IMG/` — Carpeta donde están las imágenes y el PDF del currículum. Si quieres cambiar una imagen, reemplaza el archivo dentro de esta carpeta.

## ¿Cómo funciona el sitio? (explicado fácil)
1. Cuando alguien abre `index.html` en el navegador, el archivo `style.css` le da la apariencia (colores, posiciones, bordes, etc.).
2. `script.js` añade movimiento: las secciones se desvanecen y suben cuando haces scroll. También guarda si prefieres modo claro u oscuro.
3. Todas las imágenes se cargan desde la carpeta `IMG/`. El HTML usa rutas relativas como `IMG/Zoom Profile.jpg` para mostrar las fotos.

## Cómo ver el sitio en tu computadora
Abre una terminal (o PowerShell) y ve a la carpeta del proyecto. Por ejemplo:

```powershell
cd "C:\Users\ameek\OneDrive\Desktop\Documents\GitHub\Mi-Primer-Portafolio-Repo"
```

Luego puedes abrir `index.html` directamente en el navegador haciendo doble clic sobre el archivo, o usar un servidor local (recomendado) con Python:

```powershell
# Si tienes Python instalado
python -m http.server 8000
# Abre en tu navegador:
# http://localhost:8000
```

Usar un servidor local evita problemas con rutas y permite que enlaces a archivos (como el PDF) funcionen correctamente.

## Cómo cambiar las imágenes
1. Guarda la nueva imagen dentro de la carpeta `IMG/`.
2. Abre `index.html` y busca la etiqueta `<img>` que quieras cambiar. Por ejemplo:
   ```html
   <img src="IMG/Zoom Profile.jpg" alt="Isaac Arias - portrait" />
   ```
3. Cambia el `src` por el nombre de tu nuevo archivo, por ejemplo `IMG/mi-foto.jpg`.
4. Guarda el archivo y recarga la página en el navegador.

Consejo: usa nombres de archivo simples (sin tildes ni espacios) para evitar problemas. Ejemplo: `mi-foto.jpg` en vez de `Foto Perfil.jpg`.

## Cómo cambiar el texto
Edita `index.html` con cualquier editor de texto (VS Code, Notepad, etc.). Busca el párrafo o título que quieras cambiar, edita el texto y guarda.

## ¿Qué hago si algo no se ve bien?
- Asegúrate de que las imágenes estén en `IMG/` y que el nombre en el `src` coincida exactamente.
- Si el modo oscuro no cambia, recarga la página o borra la memoria local del navegador (Local Storage) desde las herramientas de desarrollador.
- Si el PDF no descarga, verifica que el archivo `Currículum Vitae - Isaac Arias.pdf` esté en `IMG/`.

## Propuestas para mejorar (si quieres seguir practicando)
- Comprimir las imágenes para que la página cargue más rápido.
- Cambiar nombres de archivos para quitar espacios y tildes.
- Separar partes repetidas en componentes (avanzado) o usar Bootstrap para diseño rápido.

---
Si quieres, puedo:
- Cambiar el nombre de la carpeta `IMG` a `imagenes` y actualizar `index.html` automáticamente.
- Optimizar las imágenes (comprimir sin perder mucha calidad).
- Agregar instrucciones en inglés.

Dime qué prefieres y lo hago.