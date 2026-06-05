import Product from "./Product.jsx";
function ProductTab() {
  return (
    <>
      <Product title="Cloud computing" price={8999} />
      <Product title="Data Science" price={2000} />
      <Product title="MERN stack" />
    </>
  );
}
export default ProductTab;
