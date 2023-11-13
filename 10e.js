import { books } from "./books.js"


// 10. Vilka författare har ett namn som består av mer än 2 ord? Ta inte med författare som har punkter i sina namn.


let books2 = books.map((auth) => {
	return {
		...auth,
		author: auth.author.split(" "),
	}
})
books2.forEach((book) => {
	if(book.author.length > 2) {
		console.log(book.author)
	}
})
