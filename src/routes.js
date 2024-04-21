const {
  addBooks,
  getAllBookHandler,
  getBooksByIdHandler,
  editBookByIdHandler,
  deleteBookByHandler,
} = require("./handler");

const routes = [
  {
    method: "GET",
    path: "/books",
    handler: getAllBookHandler,
  },
  {
    method: "POST",
    path: "/books",
    handler: addBooks,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBooksByIdHandler,
  },

  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: editBookByIdHandler,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookByHandler,
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Halaman tidak ditemukan";
    },
  },
];

module.exports = routes;
