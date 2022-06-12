import { BASE_URL } from '../../env'

async function registerUser() {
  const response = fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "John Doe",
      email: "edgar_belandria010@hotmail.com",
      password: "password",
    }),
  });
  const data = await response.json();
  return data
}
