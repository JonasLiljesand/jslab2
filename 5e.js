import { books } from "./books.js"

//5. visar alla böcker som kostar mer än 10

books.forEach((book) =>{
	if (book.price > 10) {
		console.log(book.title, book.price)
	}
})
