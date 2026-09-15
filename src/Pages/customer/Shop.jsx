import products from "../../data/products";
import ProductCard from "../../Components/product/ProductCard";

function Shop() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default Shop;