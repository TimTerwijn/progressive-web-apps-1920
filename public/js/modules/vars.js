//set this to CHILD to 
export let menu = "1";

export function nextMenu(){
    menu++;
}

//books you receive from the api
export let books = {};

export function setBooks(booksResults){
    books = booksResults;
}

//book details you receive from the api
export let bookDetails = {};

export function setBookDetails(bookDetailsResult){
    bookDetails = bookDetailsResult;
}


const dieren = [
    "Aap", "Beer", "Cavia", "Duif", "Egel", "Flamingo", "Giraffe", "Hond", 
    "Inktvis", "Jaguar", "Krokodil", "Leeuw", "Muis", "Nijlpaard", "Olifant", "Poes", "Rups", 
    "Schildpad", "Tijger", "Uil", "Vis", "Worm", "Yak", "Zeehond"
];

const vakanties = [
    "Australië", "Bahama's", "Canada", "Duitsland", "Egypte", "Frankrijk", "Griekenland", "Hongarije", 
    "IJsland", "Japan", "Kroatië", "Luxemburg", "Marokko", "Nederland", "Oostenrijk", 
    "Portugal", "Qatar", "Rusland", "Spanje", "Tsjechië", "Uruguay", "Verenigde Staten", "Verenigd Koninkrijk", "Wit-Rusland", 
    "Zweden"
];

const boeken = [
    "Alice in Wonderland", "De brief voor de koning", "De GVR", "Dolfje Weerwolfje", "Harry Potter", "Hoe overleef ik", 
    "Koning van Katoren", "Kruistocht in spijkerbroek", "Matilda", "Minoes", "Narnia", "Pippi Langkous", "Pluk van de Petteflet", 
    "Polleke", "Grimm", "De Hobbit", "Lord of the Rings", 
];

const stoer = [
    "Politie", "Ajax", "PSV", "Feyenoord", "Brandweer", "Computers", 
    "Pokémon", "Star Wars", "Lord of the Rings", "Lego", "Playmobil", "Ridders", "Ruimte", 
    "Elektronica", "Yu-Gi-Oh"
];
    
export const subjects = [
    {"name" : "Dieren", "value" : dieren},
    {"name" : "Vakanties", "value" : vakanties},
    {"name" : "Boeken", "value" : boeken},
    {"name" : "Stoer", "value" : stoer},
]

//randomize all subjects
subjects.forEach(subject => {
    shuffleArray(subject.value);
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}