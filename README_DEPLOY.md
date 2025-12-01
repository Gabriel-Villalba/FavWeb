Deploy en Vercel — Instrucciones rápidas

Este archivo explica cómo desplegar la aplicación en Vercel correctamente y cómo resolver el error `404: NOT_FOUND` relacionado con la carpeta de salida o rutas.

1. Resumen

- Este repo genera una SPA con Vite. El build de producción se genera en `dist/public` (ver `vite.config.ts`). Vercel debe servir esa carpeta como output.

2. Requisitos previos

- Tener `vercel.json` en la raíz (incluido en el repo).
- Build command: `npm run build`.
- Output directory: `dist/public`.

3. Verificar localmente antes de desplegar

- Generar y comprobar el build:

  npm ci
  npm run build

  # comprobar que existe index.html

  Test-Path .\dist\public\index.html

- Servir localmente para confirmar la SPA:

  npx http-server ./dist/public -p 5000

  # o

  npx serve ./dist/public -p 5000

4. Ajustes en Vercel (UI)

- En el panel del proyecto en Vercel -> Settings → Build & Output:
  - Build Command: `npm run build`
  - Output Directory: `dist/public`
- Asegúrate de desplegar la rama correcta y que `vercel.json` esté incluida.

5. Qué hace `vercel.json` (ya añadido)

- Fuerza `@vercel/static-build` y redirige todas las rutas a `index.html` (necesario para SPA con rutas cliente).

6. Causas típicas del `404: NOT_FOUND`

- Vercel apunta a la carpeta equivocada (no encuentra `index.html`).
- Intentar ejecutar el servidor Express (con `listen`) directamente en Vercel — Vercel requiere funciones serverless para backend.

7. Solución rápida al `404`

- Comprueba que `dist/public/index.html` exista (sección 3).
- Configura Build Command y Output Directory en la UI de Vercel (sección 4).
- Forzar redeploy.

8. Si necesitas backend (Express) en Vercel

- Convierte tu servidor en funciones serverless (ej: exportar `app` y usar `serverless-http` o crear `api/` endpoints en Vercel). Alternativa: desplegar el servidor en otra plataforma (Railway, Fly, Heroku).

9. Logs y diagnóstico en Vercel

- Revisa Deployments → selecciona deploy → mira build logs y output files. Confirma que `index.html` aparece.

10. Opciones que puedo aplicar por ti

- A) Añadir script para copiar `dist/public` → `server/public` en `package.json` (si prefieres servir desde `server/public`).
- B) Adaptar `server/static.ts` para servir directamente desde `dist/public` en producción.
- C) Convertir Express a serverless y crear `api/` para Vercel.

Indica A, B o C si quieres que aplique alguno de estos cambios.
