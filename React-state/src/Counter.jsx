import { useState } from "react";
export default function Counter() {
  let [count, setCount] = useState(0);

  let incCount = () => {
    setCount((count += 1));
  };
  let styles = {
    margin: "0 auto",
    width: "120px",
    height: "30px",
  };
  return (
    <>
      <h3>Count is {count}</h3>
      <button style={styles} onClick={incCount} type="button">
        Increase Count
      </button>
    </>
  );
}
