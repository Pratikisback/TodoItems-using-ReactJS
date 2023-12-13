import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/TodoItemStore";

const WelcomeMessage = () => {
  const todoItems = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && (
      <h1 className={styles.Welcome}>Enjoy your Day, Tasks are already done</h1>
    )
  );
};
export default WelcomeMessage;
