import SingleItem from "./SingleItem";

const Items = ({ items, removeItem, editItem }) => {
  return (
    <div className="items">
      {items.map((item, index) => {
        return (
          <SingleItem
            key={index}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

export default Items;
