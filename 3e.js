import { books } from "./books.js"


//3. skriver ut title och pris på fantasy

books.forEach((book) =>{
	if (book.genre === "Fantasy") {
		console.log(book.title, book.price)
	}
})