import * as Routie from "../libraries/Routie.js";
import * as server from "./server.js";
import * as render from "./render.js";

routie({
    //user selected a book, show bookdetails
    "books/book/:bookId": (bookId) => {
        //do post request to server and render result on screen
        const url = `http://localhost:3000/books/book/${bookId}`;
        server.get(url, render.renderHtml);
    },

    //user selected a sub-subjects, GET all books of that subject
    "books/:subjectName": (subjectName) => {
        //do post request to server and render result on screen
        const url = `http://localhost:3000/books/${subjectName}`;
        server.get(url, render.renderHtml);
    },

    //user selected a subject, GET sub-subjects
    ":subjectName":(subjectName) => {
        //do post request to server and render result on screen
        const url = `http://localhost:3000/${subjectName}`;
        server.get(url, render.renderHtml);
    },

    // GET all subjects.
    "":() => {
        //do post request to server and render result on screen
        const url = "http://localhost:3000";
        server.get(url, render.renderHtml);
    },
});