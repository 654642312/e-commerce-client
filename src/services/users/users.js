import { BASE_URL } from '../../env'

export async function registerUser({ email, password, username }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      username
    }),
  });
  const data = await response.json();
  return data
}

export async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password
    }),
  });
  const data = await response.json();
  return data
}
