import { useState } from "react";
export default function LikeButton() {
  let [isLiked, setIsliked] = useState(false);
  let toggleLike = () => {
    setIsliked(!isLiked);
  };
  let Btncolor = { color: "red" };
  return (
    <span onClick={toggleLike}>
      {isLiked ? (
        <i style={Btncolor} className="fa-solid fa-heart"></i>
      ) : (
        <i className="fa-regular fa-heart"></i>
      )}
    </span>
  );
}
