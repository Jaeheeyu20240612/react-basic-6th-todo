import axios from 'axios';

export const todoClient = axios.create({
  baseURL: 'http://localhost:5000/todos',
});

export const getTodos = async (filter) => {
  const searchParams = new URLSearchParams();

  if (filter === 'completed') {
    searchParams.append('completed', true);
  }
  if (filter === 'pending') {
    searchParams.append('completed', false);
  }

  const { data } = await todoClient.get(`?${searchParams.toString()}`);
  return data;
};

// todo 추가하기
export const postTodo = async (newTodoObj) => {
  const { data } = await todoClient.post('/', newTodoObj);

  return data;
};

// 비동기 삭제
export const handleDelete = async (id) => {
  console.log(`Deleting todo with URL: /todos/${id}`);
  const { data } = await todoClient.delete(`/${id}`);
  return data;
};
// 비동기 업데이트
export const toggleComplete = async (id, completed) => {
  const { data } = await todoClient.patch(`/${id}`, {
    completed,
  });
  return data;
};
