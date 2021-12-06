import React, { useState, useEffect } from "react";
import imge from "./Images/pokemon-logo.png";
import Card from "./Card";


function MainPage() {
  const [pokemon, setPokemon] = useState([]);

  const [pokePower, setPokePower] = useState(0);
  const [addPower, setAddPower] = useState([]);
  //const{pokeCount,setPokeCount}=props;
 


  

  const clickOperation = (img, power, name) => {
 const details={
   'img':img,
   'name':name,
   'power':power,  
 
 }
    setAddPower(prevAddPower=>[...prevAddPower,details])
    const newPower = pokePower + power
    setPokePower(newPower)
    /* for(let i=0;i<pokemon.lengsetPokePower(prevPokePower=>[...prevPokePower,power])
     setPokeCount(prevPokeCount=>[...prevPokeCount,Count])
   }   */
  
    /* setPokeCount(prevPokeCount => [...prevPokeCount, pokemon])
  console.log(pokeCount.name)*/
  };

 

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((result) => {
        setPokemon(result);
      });
  }, []);

  return (
    <div className="container">
          
      <div className="row">
        <div className="col">
          {/*  Pokemon main image */}

          <img
            className="img-responsive"
            src={imge}
            style={{ width: "70%", height: "15rem" }}
            alt=""
          />

          {/* Title */}

          <div className="Title-name">
            <h1>
              Choose <span style={{ color: "#EEC02C" }}>Pokémon</span> For
              Battle
              <br />
              Total Power 1560 
              <i class="fa-solid fa-fire" style={{ color: "yellow" }}></i>
            </h1>
          </div>
        </div>
      </div>

      {/* 
 second row start */}

      <div class="row">
        {/* First Colmn  */}

        {/* 
      Card functionality */}

        {pokemon.map((data) => {
          return (
            <div class="col md-9">
              <div
                className="card mt-3"
                style={{
                  width: "18rem",
                  height: "35rem",
                  borderRadius: "1rem",
                }}
              >
                <img src={data.img} className="card-img-top" alt="..."></img>

                <div className="card-body">
                  <p className="card-text">Name:{data.name}</p>
                  <p className="card-text">Category:{data.category}</p>
                  <p className="card-text">Abilities:{data.abilities}</p>
                  <p className="card-text">Type:{data.type}</p>
                  <p className="card-text">Power:{data.power}</p>
                </div>
                <button
                  type="button"
                  class="btn btn-warning mb-4 me-4 ms-4"
                  onClick={() => 
                    clickOperation(data.img, data.power, data.name)
                  }
                
                >
                  Add to Battle
                </button>
              </div>
            </div>
          );
        })}

        
      <div class="col md-3 ">
          <div
            class="card"
            style={{ width: "18rem", height: "10rem", fontSize: "2rem" }}
          >
          
            <p>Total Pokémon: {addPower.length}
         
            </p>
            <p>Total Power:{pokePower}</p>

           
          </div>
        </div>

        {addPower.map((poke) => (
          <Card poke={poke} />
        ))}
      </div>
    </div>
  );
        }
export default MainPage;
