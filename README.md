# AI Product Category Generator API

## Overview
## Link : https://rayeva-ai-assignment-nd4p.onrender.com
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
# System Architecture – Remaining Modules

The backend is designed using a **modular service-based architecture** where AI logic is separated from business logic. This ensures scalability, maintainability, and easier integration with external AI services.

The system consists of the following additional modules:

---

# Module 3: AI Impact Reporting Generator

## Purpose

This module generates **environmental impact reports for each order** using rule-based estimations and AI-generated summaries.

It helps quantify the sustainability benefits of eco-friendly product purchases.

---

## Key Features

### 1. Estimated Plastic Saved

Calculates plastic reduction based on product type and predefined material substitution rules.

Example logic:

* Bamboo toothbrush vs plastic toothbrush
* Reusable bags vs plastic bags

---

### 2. Carbon Emissions Avoided

Uses logic-based estimation based on:

* product material
* manufacturing footprint
* shipping distance

Example calculation:

```
carbon_avoided = baseline_carbon - eco_product_carbon
```

---

### 3. Local Sourcing Impact

Determines whether the product was sourced locally.

Factors:

* supplier location
* warehouse distance
* shipping method

Example summary:

```
"This product was sourced within 200km reducing transportation emissions."
```

---

### 4. Human-Readable Impact Statement

AI generates a **customer-friendly sustainability summary** stored with the order.

Example:

```
"By purchasing this bamboo toothbrush, you helped reduce plastic waste and avoided approximately 0.2 kg of carbon emissions."
```

---

## Architecture Flow

```
Order Created
      ↓
Impact Calculation Service
      ↓
AI Summary Generator
      ↓
Impact Report Stored in Database
      ↓
Displayed to User in Order History
```

---

## Module Structure

```
server
│
├── controllers
│      impactController.js
│
├── services
│      impactService.js
│      aiImpactSummaryService.js
│
├── models
│      impactReportModel.js
│
└── routes
       impactRoutes.js
```

---

# Module 4: AI WhatsApp Support Bot

## Purpose

Provide automated customer support through WhatsApp using AI combined with real order data.

The bot answers common queries and escalates complex issues to human support agents.

---

## Key Features

### 1. Order Status Queries

The bot retrieves order information directly from the database.

Example interaction:

User:

```
Where is my order?
```

Bot:

```
Your order #3245 has been shipped and will arrive tomorrow.
```

---

### 2. Return Policy Questions

The bot uses a **knowledge base prompt** to answer policy questions.

Example:

User:

```
Can I return an item after 7 days?
```

Bot:

```
Yes, returns are accepted within 14 days of delivery.
```

---

### 3. Escalation Handling

The bot identifies high-priority issues such as:

* refund requests
* payment disputes
* damaged products

These are escalated to human agents.

Example logic:

```
if message contains:
    "refund"
    "chargeback"
    "complaint"
→ escalate to support team
```

---

### 4. AI Conversation Logging

All bot interactions are logged for:

* quality monitoring
* training improvements
* customer support tracking

---

## Architecture Flow

```
User WhatsApp Message
        ↓
Webhook Receiver
        ↓
Message Processing Service
        ↓
Intent Detection
        ↓
AI Response Generation
        ↓
Database Logging
        ↓
Response Sent to User
```

---

## Module Structure

```
server
│
├── controllers
│      whatsappController.js
│
├── services
│      whatsappBotService.js
│      aiChatService.js
│
├── models
│      conversationModel.js
│
└── routes
       whatsappRoutes.js
```

---

# Technical Design Principles

## 1. Structured JSON Outputs

All AI responses follow structured JSON formats for easy integration.

Example:

```json
{
  "intent": "order_status",
  "response": "Your order has been shipped",
  "confidence": 0.92
}
```

---

## 2. Prompt + Response Logging

All AI interactions are stored for monitoring and debugging.

Logged data:

* prompt
* AI response
* timestamp
* user query
* module source

---

## 3. Environment-Based API Key Management

Sensitive credentials are stored in environment variables.

Example:

```
OPENAI_API_KEY
MONGO_URI
WHATSAPP_API_KEY
```

These are loaded using `.env` configuration.

---

## 4. Separation of AI and Business Logic

AI calls are isolated in the **service layer** to avoid mixing with controllers.

Benefits:

* easier testing
* easier AI provider replacement
* cleaner architecture

---

## 5. Error Handling and Validation

All APIs include:

* request validation
* try/catch error handling
* standardized error responses

Example:

```json
{
  "success": false,
  "message": "Invalid product description"
}
```

---

# Scalability Considerations

The architecture supports future extensions such as:

* multi-language AI support
* analytics dashboards
* recommendation systems
* AI-driven sustainability scoring

---

# Conclusion

This architecture demonstrates a **scalable AI-enabled backend system** that integrates:

* product categorization
* sustainability impact reporting
* AI customer support automation

while maintaining clean separation between business logic and AI services.

# Author

Backend API developed as part of an **AI backend engineering assignment**.
