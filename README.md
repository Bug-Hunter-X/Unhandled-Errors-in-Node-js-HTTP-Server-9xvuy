# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js HTTP servers: improper error handling.  The original code lacks robust error handling, making it vulnerable to crashes. The solution demonstrates best practices to gracefully handle errors, preventing server crashes and providing informative responses to clients.

## Bug

The `bug.js` file contains a Node.js HTTP server that doesn't handle potential errors during request processing.  This could lead to the server crashing if an unexpected error occurs, such as a database connection failure or an issue with file I/O.

## Solution

The `bugSolution.js` file showcases the improved error handling. It uses `try...catch` blocks to handle errors gracefully and sends appropriate error responses to the client instead of crashing.  Proper logging is included for debugging and monitoring purposes.