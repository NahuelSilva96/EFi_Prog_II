import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import products from "./data/products"; 

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Producto no encontrado</h2>;

  return <ProductDetail product={product} />;
};

export default ProductDetailPage;
