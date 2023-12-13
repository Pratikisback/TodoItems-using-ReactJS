import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const initialtododata = [
  {
    name: "Buy Milk",
    dueDate: "1-1-2",
  },
  {
    name: "Buy Paneer",
    dueDate: "04-12-2023",
  },
];

const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDuedate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(
    todoItemsReducer,
    initialtododata
  );

  const addNewItem = (itemName, itemDuedate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDuedate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (itemDeleteName) => {
    const newTodoData = todoItems.filter(
      (item) => item.name !== itemDeleteName
    );

    const deleteActionItem = {
      type: "DELETE_ITEM",
      payload: {
        itemName: itemDeleteName,
      },
    };
    dispatchTodoItems(deleteActionItem);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoitems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
