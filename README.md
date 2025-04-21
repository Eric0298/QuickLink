# 🔗 Acortador de Links – Proyecto Portfolio

Aplicación web fullstack que permite acortar URLs largas en enlaces cortos personalizados, usando Laravel como backend, React como frontend (a desarrollar) y Docker para la infraestructura. Este proyecto refleja competencias en desarrollo moderno, despliegue, contenedores, testing y buenas prácticas profesionales.

---

## 📁 Estructura de Carpetas

acortadorDeLinks/ 
├── backend/  Proyecto Laravel 
├── frontend/ Proyecto React 
├── docker/ Configuración de Docker y MySQL 
│ └── mysql/data  Volumen persistente de la base de datos 
├── .github/workflows/ # (Futuro) CI/CD con GitHub Actions 
├── docker-compose.yml # Orquestación de servicios 
└── README.md # Documentación del proyecto


---

## ⚙️ Tecnologías utilizadas

- **PHP 8.3 + Laravel 12**
- **MySQL 8.0** (en contenedor Docker)
- **React** (frontend en desarrollo)
- **Bootstrap 5**
- **Docker + Docker Compose**
- **Git + GitHub**
- Git Bash (como terminal de entorno en Windows)

---

## 🔧 Configuración del entorno

### 🐘 MySQL (Docker)

- Contenedor: `mysql-acortador`
- Puerto expuesto: `3307 → 3306`
- Credenciales:
  - Usuario: `root`
  - Contraseña: `root`
  - Base de datos: `acortador`

Archivo: `docker-compose.yml`

```yaml
services:
  mysql:
    image: mysql:8.0
    container_name: mysql-acortador
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: acortador
    ports:
      - "3307:3306"
    volumes:
      - ./docker/mysql/data:/var/lib/mysql

🧪 Intento de implementación de POST /shorten
🔍 Estado actual
Se intentó configurar correctamente el middleware VerifyCsrfToken y el TrustProxies.

Se creó correctamente la ruta POST /shorten.

Postman devuelve error 419 (Page Expired) al intentar enviar datos desde el cliente.

🛠️ Acciones realizadas:
Se configuró VerifyCsrfToken.php para ignorar /shorten.

Se restauraron middlewares del Kernel.php.

Se intentó acceder a store() con debug (dd()) sin éxito.

Se revisaron headers de Postman y la cookie laravel_session.

🚧 Problema pendiente:
Error 419 aún sin resolver. Se sospecha de conflicto en la lógica CSRF o configuración de sesión en Laravel.

📌 Decisión:
Se deja esta funcionalidad en standby temporal para avanzar en el desarrollo general. Se retomará cuando el resto del sistema esté funcionando.

🖥️ Avance Frontend (React + Bootstrap) ✅
Interfaz de usuario completamente desarrollada

Estilo profesional corporativo + divertido

Modo claro/oscuro con botón personalizado tipo "Uiverse"

Componentes visuales funcionales (versión dummy):

UrlForm.jsx: formulario para introducir URL, alias, contraseña y expiración

ShortendUrl.jsx: muestra la URL acortada con botón de copiar

VisitStats.jsx: muestra dos tablas con las 5 URLs más visitadas y recientes

UrlHistory.jsx: historial de URLs generadas con botón de vaciado

StatsTable.jsx: resumen estadístico (dummy)

AppNavbar.jsx: barra superior con navegación y cambio de tema

Estructura modular (components/, pages/, etc.)

Implementado con React y Bootstrap puro

Preparado para conectar con la API de Laravel

✅ Próximo paso
Conectar componentes React al backend de Laravel (API REST)

Gestionar estados reales, validaciones, errores y respuestas

Eliminar dummy data y consumir los endpoints reales