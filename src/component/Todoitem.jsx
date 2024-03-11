import { AiFillDelete } from "react-icons/ai";
function Todoitem({ todoitem, date, onDeleteButton }) {
  return (
    <div class="container ">
      <div class="row vn-row">
        <div class="col-6">{todoitem}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-danger vn-button vn-btn"
            onClick={() => onDeleteButton(todoitem)}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem;
