import { books } from "./books.js"

//6. visar det total värdet

let total = 0

books.forEach((book) =>{
	total += book.price
})
console.log(total)