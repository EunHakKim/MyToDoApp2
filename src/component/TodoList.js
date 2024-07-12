import TodoItem from './TodoItem';

export default function TodoList({todos, onRemove, onToggle}) {
    return (
        <ul className="todoList">
            {todos.map((todo) => (
                <TodoItem
                    todo = {todo}
                    key = {todo.id}
                    onRemove = {onRemove}
                    onToggle = {onToggle}
                />
            ))}
        </ul>
    );
}