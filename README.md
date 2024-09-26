# Restaurant Reviews Website

This is a full-stack web application that allows users to leave and view reviews for a fictional restaurant, as well as see other reviews. It uses an NLP model to determine if the review is positive or negative.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Running the project](#running-the-project)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

<br>

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

<br>

## Setup

To use and try out the project for yourself, follow these steps.

1. Clone the repository:

   ```bash
   git clone https://github.com/ProTechZ/restaurant-reviews.git
   cd restaurant-reviews
   ```

2. Setup the client folder.

   ```bash
   cd client
   npm install
   ```

   Then create a `.env` file in this folder and setup a `REACT_APP_API_URL` variable in it. This url should point to the express server (e.g. `http://localhost:3001`).

3. Setup the server folder
   ```bash
   cd server
   npm install
   ```
   Then create a `.env` file in this folder and setup a `PORT` variable in it. This port is the port for the express server. (3001 recommended).

4. Setup the fastapi-server folder with a virtual environment

   ```bash
   pip install virtualenv --global

   cd fastapi-server

   python -m venv env
   env\Scripts\activate.bat

   pip install -r requirements.txt
   ```

<br>

## Running the project

Create 3 new terminals, and make sure they are in the root directory (restaurant-reviews). Then run `npm run client` , `npm run server` and `npm run fastapi` respectively.

<br>

## Usage

Navigate to http://localhost:3000 to view the website.

Click the **Leave Review** button to leave your own review. An NLP model which try to predict if your review is positive or negative. If it is negative, it will take you to a feedback form asking what we can do better!

<br>

## API Endpoints

#### 1. Express Server (Port 3001)
*GET* /reviews/list: Fetch all reviews.

*POST* /reviews/add: Submit a new review → adds it to reviews.csv


#### 2. FastAPI Server (Port 8000)
*POST* /predict: Submit a review → returns if the review is postive/negative
