import { books } from "./books.js"

//9. Vilken bok finns det en dubblett av?


//Set kan bara hålla unika values, används för att matcha mot orginal listan.
const uniktitel = new Set();
//Dubbstitel håller alla dubbletter som hittas
const dubbstitel = [];
//För varje bok i books
for(const book of books) {
	//om uniktitel inte har den, lägg till den i uniktitel
	if (!uniktitel.has(book.title)){
		uniktitel.add(book.title)
		//annars lägg till den i dubbstitel
	} else {
		dubbstitel.push(book)
	}
//skriv ut alla titlar i dubbstitel
}
dubbstitel.forEach((book) => {console.log(book.title)} )
