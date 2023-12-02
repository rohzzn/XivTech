# Backend Assessment - Weather API

## Overview

Thank you for considering my application. This repository contains my solution for the backend assessment. The goal was to create a Node.js server using Express that accepts a list of city names, fetches real-time weather data from a weather API, and responds with the weather results. Additionally, I implemented a bonus feature - a simple UI app that interacts with the API.

## Question 1

   **Input:**
   ```json
   {
       "cities": ["toronto", "mumbai", "london"]
   }
```

  **Output:**
  ```json
 {
  "weather": {
    "toronto": "24.00C",
    "mumbai": "34.00C",
    "london": "14.00C"
  }
}
```
## Usage
**1. Backend Server**
To run the backend server, follow these steps:

```bash
# Install dependencies
npm install

# Start the server
npm start

```
The server will be running at http://localhost:3000.


