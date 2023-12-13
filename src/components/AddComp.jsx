import { useState, useRef, useContext } from "react";
import styles from "./AddComp.module.css";
import { TodoItemsContext } from "../store/TodoItemStore";

function AddComp() {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    // console.log(event);
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    console.log(`${todoName} due on ${todoDueDate}`);

    addNewItem(todoName, todoDueDate);
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleAddButtonClicked} className=" row for-margin">
        <div className="col-4">
          <input
            ref={todoNameElement}
            type="text"
            placeholder="Enter todo here"
          ></input>
        </div>
        <div className="col-4">
          <input ref={dueDateElement} type="date"></input>
        </div>
        <div className={`${styles.addButton} col-2`}>
          <button
            type="submit"
            // By default, form is of submit type, so to run a function on the form submission,we have to use the onSubmit method and giev the reference or the function which it is supposed to run. When the submission is done, the data is sent to to the server, which we dont want in our app, so to prevent that , we will use event.preventDefault(). This method will we be added where we have wrote the function.
            // type="button"
            className="btn btn-success bt1"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddComp;
