import React from 'react';

const TodoItem = ({ toggleCompleted, handleDelete, todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          <p
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.text} -{' '}
            {todo.completed ? <span>완료</span> : <span>미완료</span>}
          </p>
          <button onClick={() => toggleCompleted(todo.id)}>완료</button>
          <button
            onClick={() => {
              handleDelete(todo.id);
            }}
          >
            삭제
          </button>
        </li>
      ))}
    </div>
  );
};

export default TodoItem;
