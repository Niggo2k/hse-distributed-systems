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
Installation der Abhängigkeiten:

bash
Code kopieren
npm install
Starten der Anwendung:

bash
Code kopieren
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

A## API-Integration
Die Anwendung kommuniziert mit einer RESTful API, die folgende Endpunkte hat:

- **GET /api/todos/**: Abrufen aller To-Dos.
- **POST /api/todos/{todo}**: Hinzufügen eines neuen To-Dos.
- **DELETE /api/todos/{todo}**: Löschen eines To-Dos.

## Sicherheitshinweise
- Achten Sie darauf, Umgebungsvariablen für API-Endpunkte zu verwenden und diese nicht im Code zu hartcodieren.
- Validierung der Eingaben, um XSS- und SQL-Injection-Angriffe zu vermeiden.

## Weiterführende Schritte
- **Erweiterung der Funktionalität**: Hinzufügen von Authentifizierung für Benutzer und die Möglichkeit, To-Dos zu bearbeiten.
- **Optimierung der Benutzeroberfläche**: Verbesserung des Layouts und der Responsivität für verschiedene Geräte.
