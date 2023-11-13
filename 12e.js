import { books } from "./books.js"

// 12 Skriv ut namnen på alla böcker vars titel inte börjar med "The".

let utanthe = books.filter(book => !book.title.startsWith("The"));
let title = utanthe.map((book)=>book.title)
console.log(title);
