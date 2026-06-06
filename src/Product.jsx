import "./Product.css";

function Product({ title, price = 1 }) {
  return (
    <div className="Product">
      <h3>CourseName: {title}</h3>
      <p>Price is: {price}</p>
    </div>
  );
}
export default Product;
