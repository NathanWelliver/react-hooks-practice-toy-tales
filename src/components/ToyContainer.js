import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setToys}) {

  function handleUpdate(id, likes){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "likes": likes
      })
    })
    .then((r) => r.json())
    .then((updatedToy) => {
      const updatedToys = toys.map((toy) => 
        toy.id === id ? {...toy, likes: updatedToy.likes}: toy
    );
    setToys(updatedToys)
    });
  }

  function deleteToy(deletedToy){
    const updatedToys = toys.filter((toy) => toy.id !== deletedToy);
    setToys(updatedToys)
  }

  return (
    <div id="toy-collection">{toys.map((toy) => (
      <ToyCard 
        key={toy.id}
        toy={toy}
        onDeleteToy={deleteToy}
        onUpdate={handleUpdate}
      />
    ))}</div>
  );
}

export default ToyContainer;
