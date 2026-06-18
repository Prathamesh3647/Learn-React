import { useState } from "react";
export default function LikeButton() {
  let [isLiked, setIsliked] = useState(false);
  let [counter, setCounter] = useState(0);
  let toggleLike = () => {
    setIsliked(!isLiked);
    setCounter(counter + 1);
  };
  let Btncolor = { color: "red" };
  return (
    <>
      <p>LikeCount : {counter}</p>
      <span onClick={toggleLike}>
        {isLiked ? (
          <i style={Btncolor} className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </span>
    </>
  );
}
