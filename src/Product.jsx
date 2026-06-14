import "./Product.css";

function Product({ title, price, features = [], features2 = {} }) {
  let isDiscount = price > 10000;
  const styles = { backgroundColor: isDiscount ? "pink" : "" };

  return (
    <div className="Product" style={styles}>
      <h3>CourseName: {title}</h3>
      <p>Price: {price}</p>
      {isDiscount && <p>Discount is : 5%</p>} {/* conditionals */}
    </div>
  );
}

export default Product;
