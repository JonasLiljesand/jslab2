import { books } from "./books.js"

//1. berättar hur många bäcker finns i listan

// console.log(`Det finns ${books.length} böcker i affären.`)

//2. returnerar alla titlar i listan

// books.forEach((books) => {
// 	console.log(books.title);
// });

//3. skriver ut title och pris på fantasy

// books.forEach((book) =>{
// 	if (book.genre === "Fantasy") {
// 		console.log(book.title, book.price)
// 	}
// })

//4. metoder för att returnera vissa genrer

// books.forEach((book) => {
// 	if (book.genre === "Classic" || book.genre === "Dystopian" || book.genre === "Fantasy"){
// 		console.log(book.title);
// 	}
// });


// console.log( books.filter(books => books.genre === "Fantasy" || books.genre === "Dystopian" || books.genre === "Classic") )

//5. visar alla böcker som kostar mer än 10

// books.forEach((book) =>{
// 	if (book.price > 10) {
// 		console.log(book.title, book.price)
// 	}
// })


//6. visar det total värdet

// let total = 0

// books.forEach((book) =>{
// 	total += book.price
// })
// console.log(total)

//7. Jämför priset på dystopier och mysterier

// let Dystotal = 0;
// let Mystotal = 0;

// books.filter(book => book.genre === "Dystopian").forEach(book => {
// 		Dystotal = Dystotal + book.price

// 	});

// books.filter(book => book.genre === "Mystery").forEach(book => {
// 		Mystotal += book.price

// 	});

// console.log("Alla Dystopier kostar tillsammans: "+Dystotal+", Alla Mysterier kostar tillsammans: "+ Mystotal)

//8. sorterar böckerna i alfabetisk ordning

// books.sort((a, b) => a.title.localeCompare(b.title));

// books.forEach((books) => {
// 	console.log(books.title);
// });


//9. Vilken bok finns det en dubblett av?


// //Set kan bara hålla unika values, används för att matcha mot orginal listan.
// const uniktitel = new Set();
// //Dubbstitel håller alla dubbletter som hittas
// const dubbstitel = [];
// //För varje bok i books
// for(const book of books) {
// 	//om uniktitel inte har den, lägg till den i uniktitel
// 	if (!uniktitel.has(book.title)){
// 		uniktitel.add(book.title)
// 		//annars lägg till den i dubbstitel
// 	} else {
// 		dubbstitel.push(book)
// 	}
// //skriv ut alla titlar i dubbstitel
// }
// dubbstitel.forEach((book) => {console.log(book.title)} )


// 10. Vilka författare har ett namn som består av mer än 2 ord? Ta inte med författare som har punkter i sina namn.


// let books2 = books.map((auth) => {
// 	return {
// 		...auth,
// 		author: auth.author.split(" "),
// 	}
// })
// books2.forEach((book) => {
// 	if(book.author.length > 2) {
// 		console.log(book.author)
// 	}
// })



// 11 Skriv ut namnen på alla författare i bokstavsordning. Sortera efter författarens efternamn.
// Tips: strängmetoden split.

// let book3 = books.map((auth) => {
// 	return {
// 		...auth,
// 		author: auth.author.split(" ")
// 		}
// })
// book3.forEach((book) => {
// 	book.author.reverse()
// })
// book3.sort((a,b)=>{
// 	 a.title.localeCompare(b.title)
// })
// book3.forEach((book) => {
// 	console.log(book.author)
// })



// 12 Skriv ut namnen på alla böcker vars titel inte börjar med "The".

// let utanthe = books.filter(book => !book.title.startsWith("The"));
// let title = utanthe.map((book)=>book.title)
// console.log(title);


// 13 Skriv ut böckernas titel, sorterat efter titelns längd, i stigande ordning.

// let books4 = books.map((titel)=>{
// 	return {
// 		...titel,
// 		title: titel.title
// 	}
// })
// books4.sort((a,b)=> a.title.length - b.title.length);

// console.log("Här är böckerna sorterade efter längden på titlarna, i stigande ordning:")
// books4.forEach((book)=> {
// 	console.log(book.title)
// });


// books4.forEach((book)=> {
// 		books4.sort((a,b)=> a.title.length - b.title.length
// 		);
// })
// books4.forEach((book)=> {
// 		books4.sort((a,b)=> a.title.length - b.title.length
// 		);

// 	console.log(book.title)
// })



// 14 Skriv färdigt funktionen, som ska kunna lägga till en ny bok sist i listan.
// function addBook(list, title, author, genre, price) {
//     // Din kod här
// }

