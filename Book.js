import React from "react";
function Book(props) {
  return (
    <div className="b1">
      <img src={props.img} width={"150px"} height={"150px"} alt="india_img" />
      <p>{props.title}</p>
      <p>{props.author}</p>
    </div>
  );
}
export default Book;