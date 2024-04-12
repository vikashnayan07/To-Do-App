import { AiFillDelete } from "react-icons/ai";
function Todoitem({ todoitem, date, onDeleteButton }) {
  return (
    <div className="container ">
      <div className="row vn-row">
        <div className="col-6">{todoitem}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger vn-button vn-btn"
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
