import * as Routie from "../libraries/Routie.js";
import * as server from "./server.js";
import * as render from "./render.js";

routie({
    // GET all subjects.
    "":() => {
        //do post request to server and render result on screen
        const url = "http://localhost:3000";
        server.get(url, render.renderHtml);
    },
    //user selected a subject, GET sub-subjects
    ":subjectName":(subjectName) => {
        //do post request to server and render result on screen
        const url = `http://localhost:3000/${subjectName}`;
        server.get(url, render.renderHtml);
    },
    //user selected a sub-subjects, GET all books of that subject
    "books/:subjectName": (subjectName) => {
        alert(subjectName)
    },
    //user selected a book, show bookdetails
    "books/book/:bookName": (bookName) => {
        alert(bookName)
    },
});