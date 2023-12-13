import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemStore";
import TodoItem from "./TodoItem";
function TodoItems({}) {
  const { todoitems, deleteItem } = useContext(TodoItemsContext);

  console.log(todoitems);
  return (
    <>
      <div className="conj">
        {todoitems.map((item, index) => (
          <TodoItem
            key={index}
            todoname={item.name}
            tododate={item.dueDate}
            onDeleteClicked={deleteItem}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}

export default TodoItems;
