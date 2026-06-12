import Product from "./Product.jsx";

function ProductTab() {
  let options = ["good", "easy"];
  let options2 = { a: "Simple", b: "ajdna" };

  return (
    <>
      <Product
        title="Cloud computing"
        price={8999}
        features={options}
        features2={options2}
      />

      <Product title="Data Science" price={2000} features={["AI", "ML"]} />

      <Product
        title="MERN Stack"
        price={12322}
        features={["MongoDB", "Express", "React", "Node.js"]}
      />
    </>
  );
}

export default ProductTab;
