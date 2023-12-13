import AddComp from "./components/AddComp";
import TodoItems from "./components/TodoItems";
import AppName from "./components/appName";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/TodoItemStore";

function app() {
  // const [todoItems, setTodoItems] = useState(initialtododata);
  return (
    <TodoItemsContextProvider>
      <center className="todo-listin">
        <AppName id="title"></AppName>
        <AddComp />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default app;
