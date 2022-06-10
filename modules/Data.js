import { ArrBooks } from './Class.js';

const arrBooks = new ArrBooks();

const saveLocal = () => {
  localStorage.setItem('arrBooksLocal', JSON.stringify(arrBooks.books));
};

const localBooks = JSON.parse(localStorage.getItem('arrBooksLocal'));
arrBooks.books = localBooks;
if (!localBooks) {
  arrBooks.books = [
    {
      id: 1,
      title: 'The Adventures Of Sherlock Holmes',
      author: 'Sir Author Conan Doyle',
    },
    {
      id: 2,
      title: 'Around The World In 80 Days',
      author: 'Jules Verne',
    },
    {
      id: 3,
      title: 'Great Expectation',
      author: 'Charles Dickens',
    },
    {
      id: 4,
      title: 'The Three Musketeers',
      author: 'Alexander Dumas',
    },
    {
      id: 5,
      title: 'Robinson Crusoe',
      author: 'Daniel Defoe',
    },
  ];
}

export { arrBooks, saveLocal };
