## Introduction

This application is a RESTful API that allows users to retrieve, create, update, and delete movies. It provides a convenient way to manage a collection of movies and perform various operations on them.

## Endpoints

- Retrieve movies: `http://localhost:3000/movies`.
- Create movies: `http://localhost:3000/movies`

    - Example request body (JSON):
        ```json
        {
            "title": "Inception",
            "year": 2010,
            "director": "Christopher Nolan",
            "duration": 148,
            "poster": "https://m.media-amazon.com/images/I/91Rc8cAmnAL._AC_UF1000,1000_QL80_.jpg",
            "genre": ["Action", "Adventure", "Sci-Fi"],
            "rate": 8.8
        }
        ```

- Update movies: `http://localhost:3000/movies/:id`

    - Example request body (JSON):
        ```json
        {
            "title": "Inception",
            "year": 2010,
            "director": "Christopher Nolan"
        }
        ```

- Delete movies: `http://localhost:3000/movies/:id`.

## Usage

There's a web at directory web-client with an index.html that can be used for a preview.

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `node server.js` to start the server.
4. Open `http://localhost:3000` in your browser.
5. Use web-client/index.html to take a look at the web (you can use live server extension for vscode) .
