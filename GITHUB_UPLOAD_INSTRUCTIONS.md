# 🚀 Instrucciones para subir "Ohtli" a GitHub

## Paso 1: Crear el repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: **Ohtli**
3. Descripción: "Extra Premium landing page con Tailwind CSS v4, Framer Motion y jest-axe a11y testing"
4. Visibilidad: Public (o Private, como prefieras)
5. **NO** inicialices con README, .gitignore, o licencia (ya los tienes)
6. Haz clic en "Create repository"

## Paso 2: Conectar tu repositorio local

Una vez creado el repo en GitHub, copia tu nombre de usuario y ejecuta estos comandos:

```bash
cd /Users/Hassan/.gemini/antigravity/scratch/teotl-landing

# Reemplaza 'TU_USERNAME' con tu nombre de usuario de GitHub
git remote add origin https://github.com/TU_USERNAME/Ohtli.git

# Sube tu código
git push -u origin main
```

## Paso 3: Verificar

Visita `https://github.com/TU_USERNAME/Ohtli` para ver tu proyecto en línea!

---

## ⚡ Comando rápido (todo en uno)

Si tu username de GitHub es conocido, solo ejecuta (reemplazando TU_USERNAME):

```bash
git remote add origin https://github.com/TU_USERNAME/Ohtli.git && git push -u origin main
```

---

## 📋 Lo que ya está listo:

✅ Git inicializado
✅ Commit inicial creado (50 archivos)
✅ Rama 'main' configurada
✅ .gitignore actualizado

## 🎯 Lo que se subirá:

- Código fuente completo
- 79 tests (100% passing)
- Assets 3D (hero-obj.png, philosophy-obj.png, services-obj.png)
- Configuración de Tailwind CSS v4
- README con documentación
- Todos los componentes y tests

---

**Nota:** Si tienes autenticación de 2 factores (2FA) en GitHub, necesitarás usar un Personal Access Token en lugar de tu contraseña cuando hagas `git push`.
