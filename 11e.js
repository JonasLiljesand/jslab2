import { books } from "./books.js"

// 11 Skriv ut namnen på alla författare i bokstavsordning. Sortera efter författarens efternamn.

let book3 = books.map((auth) => {
	return {
		...auth,
		author: auth.author.split(" ")
		}
})
book3.forEach((book) => {
	book.author.reverse()
})
book3.sort((a,b)=>{
	 a.title.localeCompare(b.title)
})
book3.forEach((book) => {
	console.log(book.author)
})
