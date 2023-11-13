import { books } from "./books.js"

// 13 Skriv ut böckernas titel, sorterat efter titelns längd, i stigande ordning.

let books4 = books.map((titel)=>{
	return {
		...titel,
		title: titel.title
	}
})
books4.sort((a,b)=> a.title.length - b.title.length);

console.log("Här är böckerna sorterade efter längden på titlarna, i stigande ordning:")
books4.forEach((book)=> {
	console.log(book.title)
});

//The great gatsby fanns med på fel plats i listan när nedan kod bara kördes en gång
books4.forEach((book)=> {
		books4.sort((a,b)=> a.title.length - b.title.length
		);
})
books4.forEach((book)=> {
		books4.sort((a,b)=> a.title.length - b.title.length
		);

	console.log(book.title)
})

