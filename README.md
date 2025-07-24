# Student Management App

A simple, customizable **Student Management Application** built using **Angular** for the frontend and **.NET Core Web API** for the backend.  
This project demonstrates full-stack development skills with RESTful APIs, CRUD operations, and client-server communication.

---

## Features

- Add, update, delete, and view student records
- Responsive Angular frontend with user-friendly forms and tables
- RESTful API backend using .NET Core
- In-memory data storage for simplicity (can be replaced with a database)
- Simple routing and component-based architecture
- Basic input validation on frontend and backend

---

## Technologies Used

- Frontend: Angular 15+  
- Backend: .NET Core 7 Web API  
- HTTP Client for Angular to interact with API  
- JSON for data transfer  
- Git for version control

---

## Getting Started

### Prerequisites

- Node.js and npm (https://nodejs.org)  
- Angular CLI (`npm install -g @angular/cli`)  
- .NET Core SDK 7+ (https://dotnet.microsoft.com/download)  
- Git (optional, for version control)

### Setup Instructions

#### Backend (.NET API)

1. Navigate to the backend project folder (e.g., `StudentManagementApp.API`):
   ```bash
   cd StudentManagementApp.API
2. Run the API:
   ```bash
   dotnet run


The API should start on https://localhost:5001 or http://localhost:5000.

### Frontend (Angular)
1. Navigate to the Angular frontend folder (e.g., StudentManagementApp.Client):
   ```bash
   cd StudentManagementApp.Client
2. Install dependencies:
   ```bash
   npm install
3. Run the Angular development server:
   ```bash
   ng serve

4. Open your browser and navigate to http://localhost:4200


### Usage

. Use the Angular UI to add new students, edit or delete existing students.
. All changes are sent to the backend API and reflected in the UI immediately.


### Folder Structure

StudentManagementApp

├── StudentManagementApp.API/               
├── StudentManagementApp.Client/            
├── README.md                                
└── .gitignore                               
