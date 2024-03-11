import Todoapp from "./component/Todoapp";
import Additem from "./component/Additem";
import Todoitems from "./component/Todoitems";
import WelcomeMessage from "./component/WelcomeMessage";

import "./App.css";
import { useState } from "react";
function App() {
  const [objectItems, setObjectItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItem = [
      ...objectItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setObjectItems(newTodoItem);
  };

  const handleDeleteButton = (todoNewItem) => {
    const newTodoItem = objectItems.filter((item) => item.name != todoNewItem);
    setObjectItems(newTodoItem);
  };

  return (
    <center class="todo-container">
      <Todoapp></Todoapp>
      <Additem onNewItem={handleNewItem}></Additem>
      {objectItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <Todoitems
        objectitems={objectItems}
        onDeleteButton={handleDeleteButton}
      ></Todoitems>
    </center>
  );
}

export default App;
