import React, { useState } from "react";
import MainPage from "./MainPge";

function Card({ poke}) {
  
  const { img, name, power } = poke;
  //const [count, setCount] = useState(0);
  /* const result = () => {
    for (let i = 0; i < name.length; i++) {
      pokeCount = name[i];
    }
    return pokeCount;
  }; */
  console.log(poke)
  return (
  
    <div className="app-container">
    <div class="card" style={{ width: "50%" }}>
      <img
        className="img-responsive"
        src={img}
        style={{ width: "50%", height: "15rem" }}
        alt=""
      />

      <ul class="list-group list-group-flush">
        <li class="list-group-item" style={{ textAlign: "center" }}>
          {name}
        </li>
      </ul>
    </div>
  </div> 
);
}

export default Card;

 