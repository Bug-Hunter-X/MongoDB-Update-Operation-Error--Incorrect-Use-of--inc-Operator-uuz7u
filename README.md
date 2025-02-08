# MongoDB Update Operation Error: Incorrect Use of $inc Operator

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The error occurs when attempting to increment a field with a string value instead of a numerical value.

The `bug.js` file shows the incorrect implementation, resulting in a MongoDB error. The `bugSolution.js` file provides the corrected code.

## How to reproduce

1. Clone this repository.
2. Ensure you have a MongoDB instance running.
3. Install the MongoDB Node.js driver: `npm install mongodb`
4. Run `node bug.js`
5. Observe the error message.
6. Run `node bugSolution.js` to see the corrected implementation.