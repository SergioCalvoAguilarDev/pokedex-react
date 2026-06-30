# 🔴 Pokédex API - React + Vite

Una aplicación **Pokédex** moderna construida con React y Vite que consume la API pública de Pokémon. Busca cualquier Pokémon por nombre o ID y obtén información detallada de forma instantánea.

## ✨ Características

- 🔍 **Búsqueda por nombre o ID** - Encuentra Pokémon fácilmente
- 🎨 **Interfaz moderna** - Diseño temático de Pokémon
- ⚡ **Rendimiento optimizado** - Construido con Vite para carga ultrarrápida
- 📊 **Información detallada** - Altura, peso, tipos y sprite oficial
- ♿ **Accesible** - Semántica HTML correcta y atributos alt en imágenes
- 🎯 **Manejo de errores** - Feedback claro al usuario en cada situación

## 📹 Demo

<video src="videos/demo.mp4" width="500" controls></video>

## 🛠️ Tecnologías

- **React 18** - Librería UI
- **Vite** - Build tool y dev server
- **Fetch API** - Consumo de la API REST
- **CSS3** - Estilos personalizados

## 🚀 Instalación y Uso

### Requisitos previos
- Node.js 16+ instalado

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/SergioCalvoAguilarDev/pokedex-react.git
cd pokedex-react
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

4. **Compilar para producción**
```bash
npm run build
```

## 📁 Estructura del Proyecto

```
src/
├── App.jsx              # Componente principal (búsqueda y lógica)
├── PokemonCard.jsx      # Componente para mostrar la tarjeta
├── App.css              # Estilos globales
├── img/                 # Imágenes (ej: camera.png)
└── main.jsx             # Entry point
```

## 💡 Uso

1. Escribe el nombre o ID del Pokémon (ej: "pikachu" o "25")
2. Haz clic en "Buscar"
3. Ver información completa del Pokémon

### Ejemplos válidos:
- `pikachu`
- `charizard`
- `25` (ID de Pikachu)
- `bulbasaur`

## 🔗 API

Este proyecto utiliza la **PokeAPI** (gratuita y sin autenticación):
```
https://pokeapi.co/api/v2/pokemon/{nombre_o_id}
```

## 🎨 Personalización

### Cambiar estilos
Edita `src/App.css` para ajustar colores, fuentes y temas.

### Agregar funcionalidades
- Historial de búsquedas
- Guardar Pokémon favoritos
- Mostrar estadísticas (ataque, defensa, etc.)
- Evoluciones del Pokémon

## 🚨 Manejo de Errores

La aplicación maneja:
- ✅ Pokémon no encontrado (404)
- ✅ Errores de conexión a la API
- ✅ Campos de búsqueda vacíos
- ✅ Errores HTTP generales

## 📱 Responsive

El diseño se adapta a diferentes tamaños de pantalla (desktop, tablet, móvil).

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama con tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añade nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver archivo `LICENSE` para más detalles.

## 👤 Autor

**Sergio Calvo Aguilar**
- GitHub: [@SergioCalvoAguilarDev](https://github.com/SergioCalvoAguilarDev)
- LinkedIn: [sergio-calvo-aguilar](https://www.linkedin.com/in/sergio-calvo-aguilar/)

## 🙏 Agradecimientos

- [PokeAPI](https://pokeapi.co/) - API pública de Pokémon
- [React](https://react.dev/) - Librería UI
- [Vite](https://vitejs.dev/) - Build tool
- The Pokémon Company - Por el contenido y sprites oficiales

---

⭐ Si este proyecto te fue útil, ¡no olvides dejar una estrella!
