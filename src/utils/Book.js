class Book {
  constructor(title, author, pages, info, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = info;
    this.summary = function () {
      console.log(info);
    };
  }
}

const getStoredBooks = () => {
  const storedBooks = localStorage.getItem("library");
  return storedBooks ? JSON.parse(storedBooks) : [];
};

const clearStoredBooks = () => {
  const storedBooks = [];
  localStorage.setItem("library", JSON.stringify(storedBooks));
};

const storeBook = (book) => {
  const storedBooks = getStoredBooks();
  storedBooks.push(book);
  localStorage.setItem("library", JSON.stringify(storedBooks));
};

export { Book, storeBook, clearStoredBooks, getStoredBooks };
