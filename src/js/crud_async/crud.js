//GET
const BASE_URL = 'http://localhost:3000';

function fetchBooks() {
  return fetch(`${BASE_URL}/books`).then(res => res.json());
}

function fetchBookById(id) {
  return fetch(`${BASE_URL}/books/${id}`).then(res => res.json());
}

// fetchBookById(4);

//POST

const newBook = {
  title: 'Тестовая книга по программированию для Гуру',
  author: 'Артем',
  genres: ['HTML', 'CSS/SASS', 'JS', 'ReactJS', 'NodeJS'],
  rating: 10,
};

// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(newBook),
// };

// fetch(`${BASE_URL}/books`, options)
//   .then(res => res.json())
//   .then(console.log);

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  fetch(`${BASE_URL}/books`, options)
    .then(res => res.json())
    .then(console.log);
}

// addBook(newBook).catch(console.log)

//PATCH and PUT
//PUT - удаляет все записи и ставит те что прислали
//PATCH - заменяет указаные поля

const updatedBook = {
  title: 'I wanna test patch'
}

function patchBook(updateFields) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateFields),
  };

  fetch(`${BASE_URL}/books/32`, options)
    .then(res => res.json())
    .then(console.log);
}


// patchBook(updatedBook)

//DELETE

function removeBook(id) {
  const options = {
    method: 'DELETE',
  };
  return fetch(`${BASE_URL}/books/${id}`, options).then(res => res.json())
}

// removeBook(37).catch(console.log)

