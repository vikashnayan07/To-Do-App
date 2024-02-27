function Additem() {
  return (
    <div class="container text-center">
      <div class="row vn-row">
        <div class="col-6">
          <input type="text" placeholder="Add To-Do" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success vn-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Additem;
