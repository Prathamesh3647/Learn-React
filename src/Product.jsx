import "./Product.css";
import Price from "./Price";
function Product({ title, idx }) {
  let oldPrices = ["11,234", "3,456", "1800", "2345"];
  let newPrices = ["10,767", "2000", "1200", "2100"];
  let descrptions = [
    ["3600 DPI", "Multi functionality"],
    ["Designed for ipad pro", "Better output"],
    ["Smooth surface", "Reliabale product"],
    ["Wireless and wired", "Multifunction based "],
  ];
  return (
    <>
      <div className="Product">
        <h4>{title}</h4>
        <div>Image</div>
        <p>{descrptions[idx][0]}</p>
        <p>{descrptions[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
      </div>
    </>
  );
}

export default Product;
