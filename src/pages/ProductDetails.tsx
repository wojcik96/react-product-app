import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { id } = useParams();

  return (
    <div>
      <h1> Product ID: {id}</h1>
    </div>
  );
}

export default ProductDetailsPage;
