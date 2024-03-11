import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";

function Additem({ onNewItem }) {
  const [todoName, setodoName] = useState("");
  const [todoDate, setodoDate] = useState("");

  const handletodoName = (event) => {
    setodoName(event.target.value);
  };
  const handletodoDate = (event) => {
    setodoDate(event.target.value);
  };
  const handleButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setodoDate("");
    setodoName("");
  };
  return (
    <div class="container text-center">
      <div class="row vn-row">
        <div class="col-6">
          <input
            type="text"
            placeholder="Add To-Do"
            value={todoName}
            onChange={handletodoName}
          />
        </div>
        <div class="col-4">
          <input type="date" value={todoDate} onChange={handletodoDate} />
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-success vn-button"
            disabled={!todoName}
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
