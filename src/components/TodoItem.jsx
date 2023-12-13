import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemStore";

function TodoItem({ todoname, tododate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row for-margin">
        <div id="task1" className="col-4">
          {todoname}
        </div>
        <div id="dt1" className="col-4">
          {tododate}
        </div>
        <div className="col-2">
          <button
            type="button"
            id="btnd1"
            onClick={() => deleteItem(todoname)}
            className="btn btn-danger bt1"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
