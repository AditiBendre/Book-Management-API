const books = [
    {
        ISBN: "12345book",
        title: "Tesla",
        pubDate: "2021-08-05",
        lang: "en",
        numPage: 250,
        author:[1, 2],
        publications: [1],
        category: ["tech", "education", "space"]
    },

    {
        ISBN: "111333book",
        title: "Batman",
        pubDate: "2020-03-07",
        lang: "en",
        numPage: 250,
        author:[2],
        publications: [2],
        category: ["comic", "action"]
    }
]

const author = [
    {
        id:1,
        name : "aditi",
        books: ["12345book", "blahbook"]
    },
    {
        id:2,
        name : "seeta",
        books: ["12345book", "111333book"]
    }
]

const publication = [
    {
        id:1,
        name: "writex",
        books: ["12345book"]
    },

    {
        id:2,
        name: "abc",
        books: ["12345book", "111333book"]
    }
]

module.exports = {books, author, publication};