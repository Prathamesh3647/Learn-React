import "./App.css";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";
function App() {
  return (
    <>
      <MsgBox userName="Prathamesh" textColor="red" />
      <MsgBox userName="Shubham" textColor="green" />
      <ProductTab />
    </>
  );
}

export default App;
