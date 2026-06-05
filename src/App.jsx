import "./App.css";
import Title from "./title.jsx";

function Description() {
  return <p>I am the Description</p>;
}
function App() {
  return (
    <div>
      <Title />
      <Description />
    </div>
  );
}

export default App;
