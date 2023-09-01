# Challenge 02 - Udemy School

![ppconrado github img](https://raw.githubusercontent.com/ppconrado/bds-assets/master/img/Young-Student-Taking-an-online-college-course-900x450.jpg)

# Project Authors

Compass Scholarship:

```
Squad Back-end Brotherhood member contacts

Ana Carolina Duarte Cavalcante
ana.cavalcante.pb@compasso.com.br

Beatriz Botan
beatriz.botan.pb@compasso.com.br

Eduardo Pereira Santos
eduardo.pereira.pb@compasso.com.br

Jose Paulo Archetti Conrado
jose.conrado.pb@compasso.com.br

Thayssa Miguel Mortari Lima
thayssa.lima.pb@compasso.com.br
```

---

## Description

```
A client hired Compass to build a new microservice for its Udemy School. This microservice
will be used by all the School Branches they own for internal Instructor, courses and instructors management.
So, you have this new mission, to build the POC foundations of this brand new microservice,
so the sales and management team can have the primary technical view of the needs
that the client has.
```

### Technologies

[![TypeScript](https://img.shields.io/badge/-TypeScript-blue?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Node.js](https://img.shields.io/badge/-Node.js-green?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/) [![Express.js](https://img.shields.io/badge/-Express.js-grey?style=flat&logo=express&logoColor=white)](https://expressjs.com/) [![MongoDB](https://img.shields.io/badge/-MongoDB-forestgreen?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/pt-br) [![Swagger UI](https://img.shields.io/badge/-Swagger%20UI-orange?style=flat&logo=swagger&logoColor=white)](https://swagger.io/tools/swagger-ui/) [![Postman](https://img.shields.io/badge/-Postman-orangered?style=flat&logo=postman&logoColor=white)](https://www.postman.com/)

---

# ⚙ Instructions to Run the Application Locally

## 1 - Getting started

Follow the steps below to set it up and run it locally:

### 1 . 1 - Clone the repositor

```
git clone https://github.com/eduardop10/similiar-udemy-plataform.git
```

```
cd similiar-udemy-plataform
```

## 2 - Setup Environment Variables:

You need to set up your environment variables. First, you need to create an `.env` file in the project's root repository and copy the entire contents of the `.env.example` file. Then open the `.env` file in your text editor and enter the required values for each environment variable.

### For exemple

```
SERVER_PORT=yourlocalhostportnumber
MONGO_URI=yoururlmongo
JWT_SECRET=yourjwtsecretkey
JWT_LIFETIME=1h
```

Please see the following resources inside this repo:

- [Environment Variables](/.env.example)

## 3 - Setup Typescript Compiler Options:

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  }
}
```

Please see the following resources inside this repo:

- [TypeScript Compiler Options](/tsconfig.json)

## 4 - Install projects dependencies (npm packages)

```
npm install
```

## 5 - Compile TypeScript Project to JavaScript & Run the Project in JavaScript

```
npm start
```

---

# ⚙ Using Postman to test API

### 1. Download [Postman](https://www.postman.com/downloads/) on your computer.

### 2. Open the Postman app on your computer.

### 3. Download the [postman](https://github.com/eduardop10/similiar-udemy-plataform/blob/main/Challenge%2002%20-%20Udemy%20School%20-%20V2.postman.json) collection JSON file from this repository.

### 4. Import the downloaded file into Postman:

- Open Postman
- In the top left-hand corner of the main Postman window, click on the "Import" button.
- Click on the "Choose Files" button and select the JSON file you want to import from your computer.
- Postman will process the JSON file and display it in a new collection, with its associated requests and details.
- You can now explore and execute requests from the imported collection directly in Postman.

### 5. In order to test our API, the server must be running. See "Instructions to Run the Application Locally".

### 6. You should now be able to test the API endpoints.

---

## Features

### Create a REST API following the requested patterns:

### Student:

```
• POST /student/register -> Registers a new student.
• POST /student/login -> Access the student account.
• PUT /student/update -> Updates student data.
• DELETE /student/delete -> Deletes student account.
• GET /student/about -> Shows the student's details.
```

### Instructor:

```
• POST /instructor/register -> Registers a new instructor.
• POST /instructor/login -> Access the instructor account.
• PUT /instructor/update -> Updates instructor data.
• DELETE /instructor/delete -> Deletes instructor account.
```

### Administrator:

```
• POST /admin/login -> Access the administrator account.
```

### Administrator > Student:

```
• GET /admin/students -> List all students.
• GET /admin/student/:id -> Shows a student's data by ID.
• PUT /admin/student/:id -> Update a student's data by ID.
• DELETE /admin/student/:id -> Delete a student by ID.
```

### Administrator > Instructor:

```
• GET /admin/instructors -> List all instructors.
• GET /admin/instructor/:id -> Shows a instructor's data by ID.
• PUT /admin/instructor/:id -> Update a instructor's data by ID.
• DELETE /admin/instructor/:id -> Delete a instructor by ID.
```

Please see the following resources inside this repo:

- [REST API Routes](/src/routes/)

- [Swagger](https://app.swaggerhub.com/apis-docs/devartes/udemy_v2/1.0.0)

---

# ⚙ Swagger API documentation

Documentation link:

```
https://app.swaggerhub.com/apis-docs/devartes/udemy_v2/1.0.0
```

<h1 style="text-align: left;">STEP 1 - Proof Of Concept:</h1>
<h1 style="text-align: right;">Conduct Research and Development</h1>

---

# ⚙ Tools and Technologies

```
• Node.Js
• Typescript
• MVC - Model-View-Controller
• npm - Packages Manager for Node.js
• Data Bank - MongoDB Atlas
```

---

<h1 style="text-align: left;">STEP 2 - Proof Of Concept:</h1>
<h1 style="text-align: right;">Specify The Need For Our Idea</h1>

---

# Node Project

```json
{
  "name": "similar-udemy-compass",
  "version": "1.0.0",
  "description": "udemy similar",
  "main": "index.js",
  "scripts": {
    "start": "tsc && node dist/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "compassuol",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^5.1.1",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-async-errors": "^3.1.1",
    "http-status-codes": "^2.2.0",
    "jsonwebtoken": "^9.0.1",
    "mongoose": "^7.4.4",
    "postman-to-openapi": "^3.0.1"
  },
  "devDependencies": {
    "@types/bcrypt": "^5.0.0",
    "@types/express": "^4.17.17",
    "@types/jsonwebtoken": "^9.0.2",
    "@types/node": "^20.5.4",
    "@types/swagger-ui-express": "^4.1.3",
    "@types/yamljs": "^0.2.31",
    "swagger-ui-express": "^4.1.6",
    "yamljs": "^0.3.0"
  }
}
```

Please see the following resources inside this repo:

- [Node Project File](/package.json)

## 1 - Node.Js Project Packages (npm)

## 1 . 1 - Production Dependencies 🎉

### bcrypt - version: 5.1.1

```
https://www.npmjs.com/package/bcrypt/v/5.1.1
```

### dotenv - version: 16.3.1

```
https://www.npmjs.com/package/dotenv/v/16.3.1
```

### express - version: 4.18.2

```
https://www.npmjs.com/package/express/v/4.18.2
```

### http-status-codes - version: 2.2.0

```
https://www.npmjs.com/package/http-status-codes/v/2.2.0
```

### jsonwebtoken - version: 9.0.1

```
https://www.npmjs.com/package/jsonwebtoken/v/9.0.1
```

### mongoose - version: 7.4.4

```
https://www.npmjs.com/package/mongoose/v/7.4.4
```

### postman-to-openai - version: 3.0.1

```
https://www.npmjs.com/package/postman-to-openapi/v/3.0.1
```

## 1 . 2 - Development Dependencies 📚

### @types/bcrypt - version: 5.0.0

```
https://www.npmjs.com/package/@types/bcrypt/v/5.0.0
```

### @types/express - version: 4.17.17

```
https://www.npmjs.com/package/@types/express/v/4.17.17
```

### @types/jsonwebtoken - version: 9.0.2

```
https://www.npmjs.com/package/@types/jsonwebtoken/v/9.0.2
```

### @types/node - version: 20.5.4

```
https://www.npmjs.com/package/@types/node/v/20.5.4
```

### @types/swagger-ui-express - version: 4.1.3

```
https://www.npmjs.com/package/@types/swagger-ui-express/v/4.1.3
```

### @types/yamljs - version: 0.2.31

```
https://www.npmjs.com/package/@types/yamljs/v/0.2.31
```

### swagger-ui-express - version: 4.1.6

```
https://www.npmjs.com/package/swagger-ui-express/v/4.1.6?activeTab=versions
```

### yamljs - version: 0.3.0

```
https://www.npmjs.com/package/yamljs/v/0.3.0
```

Please see the following resources inside this repo:

- [Node Project File](/package.json)

---
