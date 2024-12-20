import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete Button Click for item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    console.log("clicked to complete todo", name);
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }

  const className = item.done ? styles.completed : styles.itemName;

  return (
    <div className={styles.item}>
      <div className={className}>
        <span onClick={() => handleClick(item.name)}>{item.name}</span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deletebutton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
