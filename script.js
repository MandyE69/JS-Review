const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//-----------------------------destructuring-----------------------------------
//    bhaneko kunai pani object acces garne choto tarika or new method to assign a objects value
//  --> yo euta syntax ho jun le hamlai kunai pani array or properties of object lai unpack garna ani tesko value chai euta chutai varaible ma store garna help garcha

const books = getBooks();
books;

const book = getBook(3);
book;

const {title, author, genres, publicationDate, pages, hasMovieAdaptation} = book;
console.log(title, author, genres);

const [primary, secondary] = genres;
primary
secondary

// ------------------------------rest operator-----------------------//
//    yo basically kunai pani array ko remaining value lai assign garna use garincha

const [primary1, secondary1, ...others] = genres;
console.log(primary, secondary, others)

// ----------------------------------spread operator --------------------------...
//  yo pani rest jasto hoo tara eesle chai naya value add garna help garcha array ra object ma 

// suru ma array ma herum
const newGenres = [...genres, "action"];
newGenres; // we can see that "action " has been added at the end index of array we can also add at the begining by place ...genres before the value that you are assinging 

// aba object ko lagi
const updatedBook = {...book, moviePublicationDate: 2020-1-2, pages: 132} // here is for an object where we have added new properties "moviePublicationDate" and overwrite a pages 
updatedBook;

//----------------------------template literals--------------------------------//
//.... yo bhaneko kunai pani string ma hamle ${} sign use garera kunai pani expression, function haru add or call garna milcha

const getYear = (str) => str.split("-")[0];

const summary = `${title} is a book written by ${author} and was publised in ${getYear(publicationDate)}. The book ${hasMovieAdaptation?"":"not"} have been adopted as movie`;
summary;

//------------------ternaries instead of if else statemets----------------------//
// yesh le chai inline condition achieve garna milcha jaha if else launa namilne huncha
// syntax: condition? yes:no; yes/no refer to the desired string or sentence if the condition is true it will give yes else no. as you can see we have added it in summary above to illustrate it
const pageRange = pages > 1000 ? "over a thousand" : "less than thousand";
pageRange;
console.log(`The pages is ${pageRange}`);

//-----------------Arrow function------------------------//
// yo chai mainly inliner function lekhna lai use gareni bhayoo, traditional bhanda different hunu bhayoo esma fucntion lekhi rakhnu parne just parameter pass garne ani arrow le denote garne ani euta variable ma store garne.
//traditional function
// function getYear(str){
//   return str.split("-")[0];
// }

//----------------------arrow function--------------------//
// const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

//-------------------------- short circuiting ----------------------- //
// for AND operator 

console.log(true && "hello world")// true huda chai pachadi pani gayoo
console.log(false && "aba dedaina") // false huda chai pachadi ko check nai nagari niklincha bhaneko matlab false 

console.log(hasMovieAdaptation && "this book has a movie");

//falsy: 0 , NULL, false, "", undefined

console.log("" && "hello roe")
console.log("hele" && "tptop")

//for OR operator 
// esma thakai opposite to AND operator 

console.log(true || "dedaina");
console.log(false || "dencha");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// let see another for short circuiting which is ?? 

// console.log(book.reviews.librarything.reviewsCount)
// const wrongInput = book.reviews.librarything.reviewsCount || "NO data"; 
// wrongInput; // here we can see when there is 0 value it return next value which is wrong because theere is some data so, for this consequence we can use ?? operator 

// const whatOp = book.reviews.librarything.reviewsCount ?? "No data";
// whatOp;

// ................Optional Chaining............................................//
// eedi kunai properties ma value chaina bhane teslai access garda js le undefined dekhai dincha tesaile lai over come garna ? sign used garincha jasle value chaina bhane ignore garcha rather the setting it undefined.. tala ko example ma herna milcha...

function getTotalReview(book){

  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0; //last ko ?? operator use garera default 0 value halna milyoo edi NaN ayo bhane yaa tyo properties nai chaina bhane 
  librarything;

  return goodreads + librarything;
}

console.log(getTotalReview(book))


//-------------Array Map() method----------------------------
// yo method chai js ma array method hoo jasle naya array create garcha result ko original array bata
// map() does not change the original array.
// It always returns a new array.
// It is often used for transforming an array (e.g., converting values, extracting properties).

const M = [1, 2, 3 ,4, 5].map((el)=> el*2)
M;

const titles = books.map((book)=>book.title)
title;

const limitedData = books.map((book)=>({
  ID :book.id,
  Title : book.title,
  Author : book.author,
  reviewsCount: getTotalReview(book)
}))

console.log(limitedData);

//-------------------------filter method-------------------------------------------------------//
// naam nai bata thaha huncha filter garna use huncha tara k filter garne ta??? kunai pani condition check garera tesbata element haru naya array rakhana help garcha, condition chai check garaunu paryoo 


const longBook = books
  .filter(book => book.pages > 400)
  .filter(book => book.hasMovieAdaptation);
longBook;

const adventureBook = books
  .filter(book => book.genres.includes("adventure"))
  .map(book=> book.title)
adventureBook

//-----------------------------------------reduce method ------------------------------------------------//
//yo chai array lai liyera kunai pani single value ma change garna ko lagi or obtain garna ko lagi

const pageAllBook = books.reduce((sum,book)=> sum + book.pages, 0);
pageAllBook;

//---------------------------------------sort method ----------------------------------------------//
// yo method sort garna use huncha array ko value tara eesma filter map jasto new array bandaina tei array mai huncha jun lai mutable bhanicha tesaile hami tyo array ko copy banayera garcham using slice()

const arr = [4, 3, 5, 6 ,2, 1]
const sorted = arr.slice().sort((a,b)=> a - b ) // slice use garena bhane chai original array nai change garcha tesaile copy banako 
sorted;
arr;

const sortedPageBook = books.slice().sort((a,b)=> a.pages - b.pages)
sortedPageBook;

//---------------------------------Working with immutable arrays--------------------------------------------------------//

const newBook = {
    id:1,
    title: 'Harry Potter in the void',
    author: 'J.K. Rowling'
}

//1. add a book
const AddBook = [...books, newBook]
AddBook;

//2. delete book
const deleteBook = books.filter((book)=> book.id!== 3)
deleteBook

//3. update book
const updateBook = books.map(
  (book)=>
   book.id === 1 ? {...book, pages:1}: book
);
updateBook;