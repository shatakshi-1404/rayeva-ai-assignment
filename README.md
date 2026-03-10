# AI Product Category Generator API

## Overview

This project is a **Node.js + Express backend API** that analyzes a product description and generates structured product categorization data.

The API processes product descriptions and returns:

 Primary category
 Sub-category
 SEO tags
 Sustainability filters

The project follows a **layered backend architecture** separating routes, controllers, and services for maintainability and scalability.

---

# Tech Stack

* Node.js
* Express.js
* MongoDB
* REST API Architecture
* Service Layer Design Pattern

---

# Architecture Overview

The project follows a **modular MVC-like backend structure**.

```
rayeva-ai-assignment
│
├── server
│   ├── controllers
│   │     categoryController.js
│   │
│   ├── routes
│   │     categoryRoutes.js
│   │
│   ├── services
│   │     aiService.js
│   │
│   └── config
│         db.js
│
├── server.js
├── package.json
└── README.md
```

## Components

### 1. Routes Layer

Defines API endpoints and maps them to controller functions.

Example endpoint:

```
POST /api/category/generate
```

---

### 2. Controller Layer

Handles request/response logic and input validation.

Responsibilities:

* Receive request data
* Validate input
* Build AI prompt
* Call service layer
* Return structured response

---

### 3. Service Layer

Contains the **AI generation logic**.

This layer is responsible for:

* Sending prompts to AI models
* Processing AI output
* Returning structured results

Separating this logic makes the system easier to scale if different AI models are integrated in the future.

---

# API Endpoint

### Generate Category

**POST**

```
/api/category/generate
```

### Request Body

```json
{
  "description": "Eco friendly bamboo toothbrush"
}
```

### Example Response

```json
{
  "success": true,
  "product_description": "Eco friendly bamboo toothbrush",
  "data": {
    "primary_category": "Personal Care",
    "sub_category": "Eco Friendly Products",
    "seo_tags": [
      "bamboo toothbrush",
      "eco friendly",
      "sustainable oral care"
    ],
    "sustainability_filters": [
      "biodegradable",
      "plastic-free"
    ]
  }
}
```

---

# AI Prompt Design

The system uses **prompt engineering** to instruct the AI model to return structured product categorization data.

Example prompt template:

```
Analyze this product description and return JSON.

Product: Eco friendly bamboo toothbrush

Return JSON with:
- primary_category
- sub_category
- seo_tags (5-10)
- sustainability_filters
```

## Prompt Design Goals

The prompt is designed to ensure the AI returns:

1. **Clear product classification**
2. **SEO-relevant tags**
3. **Sustainability indicators**
4. **Structured JSON output**

This structured output allows the data to be easily integrated into e-commerce platforms or product catalog systems.

---

# Error Handling

The API includes basic error handling for:

* Missing product descriptions
* AI service failures
* Internal server errors

Example error response:

```json
{
  "success": false,
  "message": "Product description is required"
}
```

---

# Running Locally

### Install dependencies

```
npm install
```

### Start server

```
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

# Deployment

The API can be deployed easily on platforms like:

* Render
* Railway
* Vercel (serverless)
* AWS

---

# Future Improvements

Possible enhancements:

* Integrate real LLM APIs
* Add caching for AI responses
* Implement authentication
* Add product database storage
* Add Swagger API documentation

---

# Author

Backend API developed as part of an **AI backend engineering assignment**.
