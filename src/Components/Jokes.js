import React, { useState, useEffect } from "react";

function Jokes(props) {
  let list = props.joke_list;
  
  return (
    <>
      {list.map((item) => (
        <p key={item.id}>
          {item.value}
        </p>
      ))}
    </>
  );
}
export default Jokes;
