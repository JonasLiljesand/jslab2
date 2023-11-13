import { books } from "./books.js"

//7. Jämför priset på dystopier och mysterier

let Dystotal = 0;
let Mystotal = 0;

books.filter(book => book.genre === "Dystopian").forEach(book => {
		Dystotal = Dystotal + book.price

	});

books.filter(book => book.genre === "Mystery").forEach(book => {
		Mystotal += book.price

	});

console.log("Alla Dystopier kostar tillsammans: "+Dystotal+", Alla Mysterier kostar tillsammans: "+ Mystotal)