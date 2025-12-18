# almedia-usecase

The system is designed to ingest offers from multiple external offer networks (providers) via HTTP APIs. Each provider exposes its offers in a different response format, and the number of offers returned may vary.

The application must:
1. Fetch offer data from multiple providers stored in the database
2. Handle heterogeneous provider response structures
3. Transform provider-specific data into a common offer schema
4. Validate each individual offer before persistence
5. Store all valid offers into a single offers table
6. Skip invalid offers while logging warnings
7. Ensure failures in one provider do not affect others

How to Start the Application

1. Install Dependencies
   npm install

2. Execute command
   npm start
