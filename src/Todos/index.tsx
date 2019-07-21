import React, { useEffect, useState } from "react";
import { request } from "../middleware";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = () => {
    request("todos", "GET", {}, (data: any) => {
      setTodos(data);
    });
  };

  const handleInput = (e: any) => {
    setNewTodo(e.target.value || "");
  };

  const addTodo = () => {
    request("todos", "POST", { Name: newTodo }, () => {
      setNewTodo("");
      loadTodos();
    });
  };

  const toggleState = (id: number) => {
    const todo: any = todos.find(({ id: listId }) => listId === id);

    if (!todo) {
      console.log("No data");
      return;
    }

    request(
      `todos/${id}`,
      "PUT",
      { State: todo.State === 1 ? 0 : 1 },
      loadTodos
    );
  };

  const deleteTodo = (id: number) => {
    if (window.confirm("削除しますか？")) {
      request(`todos/${id}`, "DELETE", {}, loadTodos);
    }
  };

  return (
    <div>
      <input type="text" onChange={handleInput} value={newTodo} />
      <input type="submit" value="追加" onClick={addTodo} />

      <ul>
        {todos.map(({ id, Name, State }, i) => (
          <li
            key={i}
            style={{
              textDecoration: State === 1 ? "none" : "line-through"
            }}
            onClick={() => toggleState(id)}
          >
            {Name}
            <input type="submit" value="削除" onClick={() => deleteTodo(id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
