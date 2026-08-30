# Invitación Luis Lionel ⚽🎉

Invitación web responsive hecha con **React + JavaScript + Tailwind CSS + Framer Motion**.

## Arrancar el proyecto

```bash
npm install
npm run dev
```

Si PowerShell bloquea `npm.ps1`, puedes ejecutar:

```powershell
npm.cmd install
npm.cmd run dev
```

## Cambiar los datos de la fiesta

Todo lo importante está centralizado en:

```text
src/data/invitacion.js
```

Ahí puedes cambiar:
- nombre
- edad
- fecha real del evento
- texto de fecha y hora
- lugar
- dirección
- link de Google Maps
- link de WhatsApp
- rutas de las fotos

## Cambiar las fotos

Los placeholders están en:

```text
public/fotos/
```

Puedes reemplazar los SVG por JPG/PNG/WebP y actualizar las rutas en `src/data/invitacion.js`.

Ejemplo:

```js
fotoPrincipal: '/fotos/luis-principal.jpg'
```

## Diseño incluido

- Hero futbolero premium azul/dorado
- Escudo y badge de “2 añitos”
- Pelotas flotando
- Confeti animado
- Brillos tipo estadio
- Contador regresivo real
- Tarjetas de fecha/hora/lugar
- Galería con carrusel y modal
- Botón de confirmación por WhatsApp
- Botón de ubicación
- Mapa estilizado
- Animaciones con Framer Motion
- Responsive móvil / tablet / escritorio
- Respeta `prefers-reduced-motion`

## Build para producción

```bash
npm run build
```

El resultado queda en `dist/`.
