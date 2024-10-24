import TodoItem from "./TodoItem";

export default function TodoList({ todo, deleteTodo, toggleTodo }) {
  return (
    <ul className="list">
      {todo.length === 0 && "No Todos"}
      {todo.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </ul>
  );
}
