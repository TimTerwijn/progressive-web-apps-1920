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

const subjects = [
    {"name" : "Dieren", "value" : dieren},
    {"name" : "Vakanties", "value" : vakanties},
    {"name" : "Boeken", "value" : boeken},
    {"name" : "Stoer", "value" : stoer},
];

module.exports = {
    getSubjects(){
        return subjects;
    }
};