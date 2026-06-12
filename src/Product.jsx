import "./Product.css";

function Product({ title, price, features = [], features2 = {} }) {
  return (
    <div className="Product">
      <h3>CourseName: {title}</h3>
      <p>Price: {price}</p>
    </div>
  );
}

export default Product;
