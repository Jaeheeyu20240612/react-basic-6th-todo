// import React, { createContext, useEffect, useState } from 'react';
// import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
// import { todoClient } from '../api/todoClient';

// export const TodoContext = createContext(null);

// const TodoProvider = ({ children }) => {
//   const [todos, setTodos] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const pendingTodos = todos.filter((todo) => !todo.completed);
//   const completedTodos = todos.filter((todo) => todo.completed);
//   return (
//     <TodoContext.Provider
//       value={{
//         fetchTodos,
//         todos,
//         addTodos,
//         toggleComplete,
//         handleDelete,
//         pendingTodos,
//         completedTodos,
//       }}
//     >
//       {children}
//     </TodoContext.Provider>
//   );
// };

// export default TodoProvider;
