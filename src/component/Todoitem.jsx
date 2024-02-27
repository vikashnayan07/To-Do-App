function Todoitem({ todoitem, date }) {
  return (
    <div class="container ">
      <div class="row vn-row">
        <div class="col-6">{todoitem}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger vn-button vn-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem;
