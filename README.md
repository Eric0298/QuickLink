# 🔗 Acortador de Links – Proyecto Portfolio

Aplicación web fullstack que permite acortar URLs largas en enlaces cortos personalizados, usando Laravel como backend, React como frontend (a desarrollar) y Docker para la infraestructura. Este proyecto refleja competencias en desarrollo moderno, despliegue, contenedores, testing y buenas prácticas profesionales.

---

## 📁 Estructura de Carpetas

acortadorDeLinks/ 
├── backend/  Proyecto Laravel 
├── frontend/ Proyecto React (pendiente de iniciar) 
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
