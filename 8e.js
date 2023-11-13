import { books } from "./books.js"

//8. sorterar böckerna i alfabetisk ordning

books.sort((a, b) => a.title.localeCompare(b.title));

books.forEach((books) => {
	console.log(books.title);
});