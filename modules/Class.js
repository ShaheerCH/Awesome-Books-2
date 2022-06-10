class ArrBooks {
  constructor() {
    this.books = [];
  }

  addBook(newBook) {
    this.books.push(newBook);
  }

  deleteBook(bookID) {
    this.books = this.books.filter((book) => book.id !== Number(bookID));
  }

  getBookById(bookID) {
    return this.books.find((book) => book.id === Number(bookID));
  }

  getNewID() {
    return this.books.reduce((a, b) => Math.max(a, b.id), 0) + 1 || 1;
  }
}

const Book = (id, title, author) => ({ id, title, author });

export { ArrBooks, Book };
