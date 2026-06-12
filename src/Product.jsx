import "./Product.css";

function Product({ title, price, features = [], features2 = {} }) {
  return (
    <div className="Product">
      <h3>CourseName: {title}</h3>

      <p>Price: {price}</p>

      <p>Features:</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <p>{features2.a}</p>
    </div>
  );
}

export default Product;
