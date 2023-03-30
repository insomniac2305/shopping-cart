import { useParams } from "react-router-dom";

function Item() {
  const params = useParams();

  return <div>Item: {params.itemId}</div>;
}

export default Item;