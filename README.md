🌐 athesto.github.io

Este repositorio contiene la estructura del sitio web athesto.github.io, desarrollado con Docusaurus. La idea principal es separar claramente el motor del sitio (la webapp) del contenido escrito, permitiendo una gestión más ordenada y escalable.

⸻

📁 Estructura del Proyecto

🔹 webapp/         # Configuración y lógica de la webapp Docusaurus
🔹 content/        # Contenido creado por el autor (docs, blogs, etc.)
🔹 README.md       # Este archivo :)



⸻

⚙️ webapp/

Aquí se encuentra la implementación de Docusaurus, incluyendo:
	•	Configuración del sitio (docusaurus.config.js)
	•	Temas personalizados
	•	Plugins
	•	Archivos estáticos (static/)
	•	Scripts de construcción y despliegue

Este es el “motor” de la página.

⸻

📝 content/

Contiene el contenido en sí, como:
	•	Documentación técnica
	•	Entradas de blog
	•	Guías, tutoriales, artículos personales o de comunidad

Ideal para mantener separado el texto del código.

⸻

🚀 Despliegue

El sitio se despliega automáticamente en GitHub Pages mediante GitHub Actions.

URL pública: https://athesto.github.io

⸻

🛠️ Requisitos para desarrollo local

# Requiere Node.js (>= 16)
cd webapp/
npm install
npm run start



⸻

🧐 Filosofía del proyecto

Este proyecto busca ser un espacio para compartir ideas, documentación, reflexiones personales y aprendizaje continuo.
Separar el sistema (webapp/) del contenido (content/) permite escalar fácilmente y mantener el enfoque en la escritura sin enredar el código.

⸻

🧑‍💻 Autor

Gustavo Mejía
athesto.github.io

⸻

📄 Licencia

Este proyecto está bajo la licencia MIT.
