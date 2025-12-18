# Almedia Use Case

## Problem Definition

The system is designed to ingest offers from multiple external offer networks (providers) via HTTP APIs. Each provider exposes its offers in a different response format, and the number of offers returned may vary.

The application must:
- Fetch offer data from multiple providers stored in the database
- Handle heterogeneous provider response structures
- Transform provider-specific data into a common offer schema
- Validate each individual offer before persistence
- Store all valid offers into a single offers table
- Skip invalid offers while logging warnings
- Ensure failures in one provider do not affect others

---

## How to Start the Application

### 1. Install Dependencies
 - npm install

### 2. Start application
 - npm start

