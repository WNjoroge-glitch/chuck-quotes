import React, { useState } from "react";
import Jokes from "./Jokes";

function Categories() {
  const [categories, setCategories] = useState([
    "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel"
  ]);
  const [jokes, setJoke] = useState([]);
  function GetJoke(category,jokes,setJoke){
    const url =`https://api.chucknorris.io/jokes/random?category=${category}`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
       const obj = data;
       const value = obj.value;
       const id = obj.id;
       const categories = obj.categories;

       setJoke([...jokes,{value:value,id:id,category:categories}])
    })

  }
 
  return (
    <div>
      {
        categories.map((category,index)=>(
          <button onClick={()=>{
            GetJoke(category,jokes,setJoke);
          }} key ={index}>{category}</button>
        ))}
      <Jokes joke_list={jokes}/>
    </div>

  )


  //     function handleClick(e){
  //         // jokes.map(joke => joke.categories)
  //         // // console.log(jokes)
  //         // setJoke(jokes.map(joke => joke.categories))

  //     //   if(e.target.value === jokes.map(joke => joke.categories)){

  //     //    setJoke(jokes.map(joke => joke.value))

  //     //  }
  // }

  
    // <div>
    //   {categories.map((category) => (
    //     <button
    //       onClick={jokes.map((joke) => (
    //         <Jokes name={joke.categories} />
    //       ))}
    //     >
    //       {category}
    //     </button>
    //   ))}
    // </div>
 
}
export default Categories;
