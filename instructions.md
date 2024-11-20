*Welcome to the Data Fetching and Display Assessment! In this task, you will implement JavaScript functions to fetch data from local files and external APIs and render them dynamically on the webpage.*

- This README provides detailed instructions, assessment requirements, and test cases to help you complete the project successfully. 
- Make sure to follow the guidelines and validate your code with the given test cases.

## Assessment Overview
You will implement three functions:
- getText() – Fetches and displays text from a local text file (test.txt).
- getJson() – Fetches and displays JSON data from a local file (posts.json).
- getDataFromExternalAPI() – Fetches and displays user data from the GitHub API.

## Key Objectives
- Use the fetch() API to retrieve data.
- Handle data asynchronously using .then() and .catch().
- Update the DOM with the fetched data.
- Handle and display errors gracefully.


## Instructions for Implementation
1. getText() Function
Purpose: Fetches a string from test.txt and displays it inside the <div id="output">.
Steps:
- Use fetch() to get data from the file `test.txt`.
- Convert the response using .text().
- Update the content of the <div id="output"> with the fetched text.
- Handle errors by displaying the error message in the same <div>.
*Expected Output*
- When button1 is clicked:
- "This is a sample text file" should be displayed.


2. getJson() Function
Purpose: Fetches an array of posts from posts.json and displays them as a list inside <ul id="output1">.
Steps:
- Use fetch() to get data from the file `posts.json`.
- Convert the response using .json().
- Loop through the JSON data and display each post as a <li> element inside <ul id="output1">.
- Handle errors by displaying the error message in the same <ul>.
*Expected Output*
When button2 is clicked
```
<li>Post 1: This is post 1</li>
<li>Post 2: This is post 2</li>
<li>Post 3: This is post 3</li>
<li>Post 4: This is post 4</li>
<li>Post 5: This is post 5</li>
```

3. getDataFromExternalAPI() Function
Purpose: Fetches user data from the GitHub API and displays it as a list inside <ul id="output2">.
Steps:
- Use fetch() to call the API: https://api.github.com/users.
- Convert the response using .json().
- Loop through the user data and display each username as a <li> element inside <ul id="output2">.
- Handle errors by displaying the error message in the same <ul>.
*Expected Output*

When button3 is clicked
```
<li>user1</li>
<li>user2</li>
<li>user3</li>
<li>user4</li>
<li>user5</li>
```
Here when you use  `https://api.github.com/users`, there will be many users, user 1 and user 2.. is an example. you will be actually displaying user names.
