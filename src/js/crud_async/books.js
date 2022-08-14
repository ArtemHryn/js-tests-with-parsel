const BASE_URL = 'http://localhost:3000';

const newBook = {
  title: 'Тестовая книга по программированию для Гуру',
  author: 'Артем GR',
  genres: ['HTML', 'CSS/SASS', 'JS', 'ReactJS', 'NodeJS'],
  rating: 10,
};

async function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  const response = await fetch(`${BASE_URL}/books`, options);
  const parsedResponse = await response.json();
  // console.log(parsedResponse);
  return parsedResponse;
  //   .then(res => res.json())
  //   .then(console.log);
}

// addBook(newBook)

async function fetchBooks() {
  const response = await fetch(`${BASE_URL}/books`);
  return await response.json();
}

// fetchBooks().then(console.log)

async function fetchBookById(id) {
  const response = await fetch(`${BASE_URL}/books/${id}`);
  return await response.json();
}

// fetchBookById(12).then(console.log)

const updatedBook = {
  title: 'I wanna test async/await',
};

async function patchBook(updateFields, id) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateFields),
    };
    const response = await fetch(`${BASE_URL}/books/${id}`, options);
    return await response.json()
}

// patchBook(updatedBook, 20)
// fetchBookById(20).then(console.log);