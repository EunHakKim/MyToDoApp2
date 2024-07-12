import './App.css';
import TodoList from './component/TodoList';
import TodoInput from './component/TodoInput';
import { useCallback, useRef, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    },[todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  return (
    <div className="app">
        <div className="todo-container"> 
            <h2>My ToDo App</h2>
            <hr/>
                <TodoInput onInsert={onInsert}/>
            <hr/>
                <TodoList todos={todos} onRemove={onRemove}
                onToggle={onToggle}/>
        </div>
    </div>
  );
}

export default App;
