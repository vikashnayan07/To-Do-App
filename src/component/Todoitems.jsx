import Todoitem from "./Todoitem";
const Todoitems = ({ objectitems }) => {
  return (
    <div className="item-container">
      {objectitems.map((item) => (
        <Todoitem todoitem={item.name} date={item.dueDate}></Todoitem>
      ))}
    </div>
  );
};
export default Todoitems;
