import { useRef } from "react";
import { MdAddCircleOutline } from "react-icons/md";

function Additem({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleButtonClicked = () => {
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, todoDate);
  };
  return (
    <div class="container text-center">
      <div class="row vn-row">
        <div class="col-6">
          <input type="text" placeholder="Add To-Do" ref={todoNameElement} />
        </div>
        <div class="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-success vn-button"
            disabled={!todoNameElement}
            onClick={handleButtonClicked}
          >
            <MdAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Additem;
