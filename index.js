const express = require("express");

const database = require("./database");
const { access } = require("fs");

// initializing express
const booky = express();

// Route             /
// Description       get all books
// Access            PUBLIC
// Parameter         NONE
// Methods           GET

booky.get("/", (req, res) => {
return res.json({books: database.books});
})

// Route             /is
// Description       get specific books on ISBN
// Access            PUBLIC
// Parameter         isbn
// Methods           GET

booky.get("/is/:isbn", (req, res) => {
    const getIsbn = database.books.filter((book) =>
        book.ISBN === req.params.isbn
    );

    if(getIsbn.length === 0){
        return res.json({error: `No book found for ISBN ${req.params.isbn}`})
    }

    return res.json({book: getIsbn})
})

// Route             /cat
// Description       get specific books on category
// Access            PUBLIC
// Parameter         category
// Methods           GET

booky.get("/cat/:category", (req, res) => {
    const getCategory = database.books.filter((book) =>
        book.category.includes(req.params.category) 
    )

    if(getCategory.length === 0){
        return res.json({error: `No book with category ${req.params.category} was found.`})
    }

    return res.json({data:getCategory});
})

// Route             /ln
// Description       get specific books on language
// Access            PUBLIC
// Parameter         category
// Methods           GET

booky.get("/ln/:lang", (req, res) => {
    const getLanguage = database.books.filter((book) =>
        book.lang === req.params.lang 
    )

    if(getLanguage.length === 0){
        return res.json({error: `No book with language ${req.params.lang} was found.`})
    }

    return res.json(getLanguage)
})

// Route             /author
// Description       get all authors
// Access            PUBLIC
// Parameter         NONE
// Methods           GET

booky.get("/author", (req, res) => {
    return res.json({author:database.author})
});

// Route             /author
// Description       get specific author based on id
// Access            PUBLIC
// Parameter         id
// Methods           GET

booky.get("/author/:id", (req, res) => {
    const authId = req.params.id;
    const getId = database.author.filter((auth) =>
        auth.id === parseInt(authId)
    )

    if(getId.length === 0){
        return res.json({error: `No author with the id ${authId} was found.`})
    }

    return res.json(getId);
});

// Route             /author/book
// Description       get authors based on book ISBN
// Access            PUBLIC
// Parameter         isbn
// Methods           GET

booky.get("/author/book/:isbn", (req, res) => {
    const getAuthor = database.author.filter((auth) =>
        auth.books.includes(req.params.isbn)
    )

    if(getAuthor.length === 0){
        return res.json({error: `No author with the book ID ${req.params.isbn} was found.`})
    }

    return res.json(getAuthor);
});

// Route             /publications
// Description       get all publications
// Access            PUBLIC
// Parameter         NONE
// Methods           GET

booky.get("/publications", (req, res) => {
    return res.json({publications:database.publication})
})

// Route             /publications/id
// Description       get specific publications based on id
// Access            PUBLIC
// Parameter         id
// Methods           GET

booky.get("/publications/id/:id", (req, res) => {
    const pubId = req.params.id;
    const getId = database.publication.filter((pub) => 
        pub.id === parseInt(pubId)
    );

    if(getId.length === 0){
        return res.json({error: `No publication for the id ${pubId} was found.`})
    }

    return res.json(getId);
})

// Route             /publications/book
// Description       get all publications based on book
// Access            PUBLIC
// Parameter         isbn
// Methods           GET

booky.get("/publications/book/:isbn", (req, res) => {
    const getPub = database.publication.filter((pub) =>
        pub.books.includes(req.params.isbn) 
    )

    if(getPub.length === 0){
        return res.json({error: `No publication for the book ${req.params.isbn} was found.`})
    }

    return res.json(getPub);
})

booky.listen(3000, () => {
    console.log("Server is up and running");
});