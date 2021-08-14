const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export const getTodos = async () => {
  const response = await fetch(`${BASE_URL}?_start=0&_limit=5`);
  const json = await response.json();
  return json;
};

export const addTodo = async (body) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(body),
  });
  const json = await response.json();
  return json;
};
