import { BOOK_API } from "../../env";

export async function getBooks() {
  const response = await fetch(BOOK_API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}

export async function getBooksById(id) {
  const response = await fetch(`${BOOK_API}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log('holaaa')
  console.log(data)
  return data;
}
