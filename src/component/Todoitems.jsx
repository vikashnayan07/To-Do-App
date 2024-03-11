import Todoitem from "./Todoitem";
const Todoitems = ({ objectitems, onDeleteButton }) => {
  return (
    <div className="item-container">
      {objectitems.map((item) => (
        <Todoitem
          todoitem={item.name}
          date={item.dueDate}
          onDeleteButton={onDeleteButton}
        ></Todoitem>
      ))}
    </div>
  );
};
export default Todoitems;
