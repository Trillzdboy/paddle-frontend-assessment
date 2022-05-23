# Getting Started with Create React App

This project was bootstrapped with [Create React App].

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Dependencies Used

-React-paginate
-React-bootstrap

###Details

As per the instructions given, more emphasis was placed on wiring up the application to get requests when the component is mounted and when the pagination is clicked. I did place the returned items in a card instead of as a list since the information could not be rendered as a list without having overflows(The description cannot be contained in one line.\
Aside that, not much styling was implemented. If i had more time, things to improve would be:
- Add a loading and error state and render different view depending on conditional statements. ie, If component is loading(Data is being fetched) then show a spinner.
- Implement a function to automatically scroll back to top after the pagination is clicked.
