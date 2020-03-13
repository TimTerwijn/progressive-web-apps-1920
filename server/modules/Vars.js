//set this to CHILD to 
menu = "1";

//books you receive from the api
books = {};


module.exports = {
    

    nextMenu(){
        menu++;
    },

    setBooks(booksResults){
        books = booksResults;
    },

    //book details you receive from the api
    bookDetails : {},

    setBookDetails(bookDetailsResult){
        bookDetails = bookDetailsResult;
    },

    
        
    

    // //randomize all subjects
    // subjects.forEach(subject => {
    //     shuffleArray(subject.value);
    // });

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    },

    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
};