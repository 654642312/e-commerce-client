export function saveToken(token) {
  localStorage.setItem("token", JSON.stringify(token));
}

export function checkLogin() {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  }
  return false;
}

export function closeSession() {
  localStorage.removeItem("token");
}