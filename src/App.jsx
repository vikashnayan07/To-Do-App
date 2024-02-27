import Todoapp from "./component/Todoapp";
import Additem from "./component/Additem";
import Todoitem from "./component/Todoitem";
import Todoitems from "./component/Todoitems";

import "./App.css";
function App() {
  const objectitems = [
    { name: "Buy Milk", dueDate: "27/02/2023" },
    { name: "Goto Market", dueDate: "28/02/2023" },
    { name: "Study", dueDate: "29/02/2023" },
  ];

  return (
    <center class="todo-container">
      <Todoapp></Todoapp>
      <Additem></Additem>
      <Todoitems objectitems={objectitems}></Todoitems>
    </center>
  );
}

export default App;
