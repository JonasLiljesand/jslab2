import { books } from "./books.js"

//4. metod för att returnera böcker inom genrer classic och dystopier

books.forEach((book) => {
	if (book.genre === "Classic" || book.genre === "Dystopian" || book.genre === "Fantasy"){
		console.log("Titel & Genre: " + book.title, book.genre);
	}
});