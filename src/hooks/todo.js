import React, { createContext, useState, useContext } from "react";
import { uuid } from "uuidv4";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const storageTodos = localStorage.getItem("@myApp:todos");
    return storageTodos ? JSON.parse(storageTodos) : [];
  });

  const addTodo = (todo) => {
    setTodos((oldTodos) => {
      const newTodos = [...oldTodos, { id: uuid(), title: todo }];
      localStorage.setItem("@myApp:todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const removeTodo = (todo_id) => {
    setTodos((oldTodos) => {
      const filteredTodos = oldTodos.filter((todo) => todo.id !== todo_id);
      localStorage.setItem("@myApp:todos", JSON.stringify(filteredTodos));
      return filteredTodos;
    });
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

function useTodo() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error(
      "You should execute this hook only inside of one react component"
    );
  }

  return context;
}

export { useTodo, TodoProvider };
