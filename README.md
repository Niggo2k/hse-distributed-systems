# Dokumentation für die To-Do-App

## Überblick
Die To-Do-App ist eine einfache, benutzerfreundliche Webanwendung, entwickelt mit Next.js und Tailwind CSS. Sie ermöglicht es Benutzern, ihre Aufgaben effizient zu verwalten, indem sie neue To-Dos hinzufügen, bestehende anzeigen und löschen können.

## Technologien
- **Next.js**: Als React-Framework verwendet für serverseitiges Rendering und statische Website-Generierung.
- **Tailwind CSS**: Für das Styling der Komponenten.
- **Axios**: Für HTTP-Anfragen, um mit der Backend-API zu interagieren.
- **Lucide Icons**: Zur visuellen Darstellung der Icons in der Anwendung.

## Setup und Installation
1. **Klonen des Repositories:**
   ```bash
   git clone [URL-des-Repositories]
   cd [Projektordner]
2. **Installation der Abhängigkeiten:**
    ```bash
        npm install
2. **Starten der Anwendung:**
    ```bash
        npm run dev

Die Anwendung wird standardmäßig unter http://localhost:3000 gehostet.

## Hauptkomponenten

### Home Page (`pages/index.tsx`):
- **Zustandsmanagement**: Verwendung von `useState` für die Verwaltung des Zustands der To-Dos und des Ladezustandes.
- **Effekte**: `useEffect` zum Abrufen der To-Dos beim Initialladen der Komponente.
- **HTTP-Anfragen**: Einsatz von `axios` für GET und POST Anfragen, um To-Dos zu laden, hinzuzufügen und zu löschen.

### TaskItem (`components/TaskItem.tsx`):
- **Props**: Nimmt `task` (die Aufgabe als String) und `onDelete` (Funktion zum Löschen der Aufgabe) entgegen.
- **Darstellung**: Zeigt die Aufgabe an und ermöglicht das Löschen durch einen Button mit einem Mülleimer-Icon.

### Root Layout (`layouts/RootLayout.tsx`):
- **Global Styles**: Importiert die Google-Schriftart `Inter` und definiert globale Hintergrundstile.

## API-Integration
Die Anwendung kommuniziert mit einer RESTful API, die folgende Endpunkte hat:

- **GET /api/todos/**: Abrufen aller To-Dos.
- **POST /api/todos/{todo}**: Hinzufügen eines neuen To-Dos.
- **DELETE /api/todos/{todo}**: Löschen eines To-Dos.

# Getting Started

## Requirements

- Docker installed on your machine (if using Docker)
- Node.js installed (if not using Docker)

## Quick Start with Docker

### Clone the repository:
    ```bash
    git clone [URL-des-Repositories]

### Start the application:
Navigate to the root directory of the project and run:
    ```bash
    docker-compose up
    This command builds and starts the frontend and backend services in containers.

###Access the application:
Open http://localhost:3000 in your browser.

###Shutdown the application:
```bash
docker-compose down

##Manual Setup
#Backend Setup
###Clone the repository:
```bash
git clone [repository-url]

###Install dependencies:
```bash
npm install
# or pnpm install, yarn install, bun install
### Database Migration:
```bash
npx prisma migrate deploy
### Start the server:
```bash
npm run dev
# or pnpm run dev, yarn run dev, bun run dev
## Frontend Setup
### Environment Setup:
Create a .env file in the root of the frontend directory:

API_URL=http://localhost:3001

Adjust the API_URL value if your backend is running on a different port or host.

### Install dependencies:
```bash
npm install
# or pnpm install, yarn install, bun install
Start the frontend:
```bash
npm start
# or pnpm start, yarn start, bun start

#Running with Docker Individually
#Backend
###Build the Docker image:
```bash
docker build -t todo-ss24-backend .
###Run the container:
```bash
docker run -d -p 3001:3000 -e PORT=3000 todo-ss24-backend
##Frontend
###Build the Docker image:
```bash
docker build -t todo-ss24-frontend .
###Run the container:
Make sure to replace API_URL with the address where your backend service is available.
```bash
docker run -d -p 3000:3000 -e API_URL='http://localhost:3001' todo-ss24-frontend

## Sicherheitshinweise
- Achten Sie darauf, Umgebungsvariablen für API-Endpunkte zu verwenden und diese nicht im Code zu hartcodieren.
- Validierung der Eingaben, um XSS- und SQL-Injection-Angriffe zu vermeiden.

## Weiterführende Schritte
- **Erweiterung der Funktionalität**: Hinzufügen von Authentifizierung für Benutzer und die Möglichkeit, To-Dos zu bearbeiten.
- **Optimierung der Benutzeroberfläche**: Verbesserung des Layouts und der Responsivität für verschiedene Geräte.

