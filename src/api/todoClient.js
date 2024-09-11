import axios from 'axios';

export const todoClient = axios.create({
  baseURL: 'http://localhost:4000/todos',
});

// 서버에서 todos 가져오기
export const fetchTodos = async () => {
  const { data } = await todoClient.get('/');
  return data;
};
// todo 추가하기
export const postTodo = async (newTodoObj) => {
  const { data } = await todoClient.post('/', newTodoObj);

  return data;
};

// 비동기 삭제
export const handleDelete = async (id) => {
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
