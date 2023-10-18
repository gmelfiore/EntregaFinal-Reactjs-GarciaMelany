import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return (
      <div
        style={{
          padding: "10px 25px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {products.map((prod)=> <Item key={prod.id} {...prod}/>)}
      </div>
    );
  };
  
  export default ItemList;