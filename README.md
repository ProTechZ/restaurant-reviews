# Restaurant Reviews Website

This is a full-stack web application that allows users to leave and view reviews for a fictional restaurant, as well as see other reviews. It uses an NLP model to determine if the review is positive or negative.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Running the project](#running-the-project)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Tech Stack

- **Frontend:** 
  - React with Typescript
  - TailwindCSS for styling
  - Zustand for state management

- **Backend:** 
  - Node.js with Express (TypeScript)
  - fast-csv for parsing the data

- **FastAPI Server** (Python) so the model can be accessed

- **NLP Model:**
  - nltk for parsing the data
  - sklearn (MultinomialNB) for the model

- **Database:** static review data in csv file

- **Package Manager:** npm, pip

## Setup

To use and try out the project for yourself, follow these steps.

1. Clone the repository:

   ```bash
   git clone https://github.com/ProTechZ/restaurant-reviews.git
   cd restaurant-reviews
   ```

   <br>

2. Setup the client folder.

   ```bash
   cd client
   npm install
   ```

   Then create a `.env` file in this folder and paste this code:
    
   ```
    REACT_APP_API_URL=http://localhost:3001
   ```

  <br>

3. Setup the server folder
   ```bash
   cd ../server
   npm install
   ```
   Then create a `.env` file in this folder and paste this:

   ```
    PORT=3001
    CLIENT_PORT=3000
   ```

<br>

4. Setup the fastapi-server folder with a virtual environment

   ```bash
   cd ../fastapi-server

   python -m venv env
   env\Scripts\activate.bat

   pip install -r requirements.txt
   ```

## Running the project

Create 3 new terminals, and make sure they are in the root directory (restaurant-reviews). Then run `npm run client` , `npm run server` and `npm run fastapi` respectively.

If you do want to modify the express server code, make sure to run `npm run tsc` as well. This ensures that the changes will be compiled and converted into regular JS.

## Usage

Navigate to http://localhost:3000 to view the website.

Click the **Leave Review** button to leave your own review. An NLP model which try to predict if your review is positive or negative. If it is negative, it will take you to a feedback form asking what we can do better!

## API Endpoints

#### 1. Express Server (Port 3001)
*GET* /reviews/list: Fetch all reviews.

*POST* /reviews/add: Submit a new review → adds it to reviews.csv


#### 2. FastAPI Server (Port 8000)
*POST* /predict: Submit a review → returns if the review is postive/negative
