# Supermarket App

I don't often use "Create React App" as I find it is more flexible in the longer to build everything from scratch.

### React Testing Library

I've not used the react testing library before, I usually use enzyme, sinon, chai and mocha. I understand the concept of testing what the user experiences rather than the structure of the html which enzyme tests tend to do...however I still prefer testing the HTML structure with enzyme. I've used the "what the user experiences" type tests as the basis for end to end testing using Selenium, I'm yet to be convinced that that concept works well for unit testing React.

### State

I was slightly torn what to keep in the store and what to calculate within the view, and applied discounts are in the store but really they should have been calculated in the view. I'm a firm believer in not storing anything that can be calculated from data already in the store. All the totals can be quickly calculated from pure functions so they is no reason put any of these those values in the store. 

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.
