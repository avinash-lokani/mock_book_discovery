import { rest } from "msw";
import { books } from "../../Data/booksData";

export const handlers = [
  rest.get(`${window.location.origin}/api/bookdetails/:id`, (req, res, ctx) => {
    const { id } = req.params;
    let book = books.filter((bookData) => bookData.id == id);
    return res(ctx.delay(2000), ctx.status(200), ctx.json(book));
  }),
  rest.get(`${window.location.origin}/api/bookdetails`, (req, res, ctx) => {
    return res(ctx.delay(2000), ctx.status(200), ctx.json(books));
  }),
];
