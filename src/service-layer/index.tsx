import axios from "axios";
import  {BooksURL}  from "../core-utils/properties";

export const bookMarkBook = async (id: number) => {
  const bookmarkUpdate = { isBookmarked: true };
  await axios.patch(`${BooksURL}/BookDetail/${id}`, bookmarkUpdate);
};

export const unbookMarkBook = async (id: number) => {
  const bookmarkUpdate = { isBookmarked: false };
  await axios.patch(`${BooksURL}/BookDetail/${id}`, bookmarkUpdate);
};

export const startReadBook = async (id: number) => {
  const startReadUpdate = { isStartRead: true };
  await axios.patch(`${BooksURL}/BookDetail/${id}`, startReadUpdate);
};

export const stopReadBook = async (id: number) => {
  const startReadUpdate = { isStartRead: false };
  await axios.patch(`${BooksURL}/BookDetail/${id}`, startReadUpdate);
};
