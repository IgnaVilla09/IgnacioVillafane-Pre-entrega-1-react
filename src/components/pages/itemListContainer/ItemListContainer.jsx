import "./itemListContainer.scss";

const ItemListContainer = ({ saludo }) => {
  return (
    <main>
      <div className="container-main">
        <p>{saludo}</p>
      </div>
    </main>
  );
};

export default ItemListContainer;
