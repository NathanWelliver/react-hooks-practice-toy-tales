import React from "react";

function ToyCard({toy, onDeleteToy, onUpdate}) {

function handleDelete(){
  fetch(`http://localhost:3001/toys/${toy.id}`, {
    method: "DELETE"
  })
  .then((r) => r.json())
  .then(() => onDeleteToy(toy))
}

function handleUpdate(){
  onUpdate(toy.id, toy.likes + 1)
}

  return (
    <div className="card">
      <h2>{`"${toy.name}"`}</h2>
      <img
        src={toy.image}
        alt={`"${toy.name}"`}
        className="toy-avatar"
      />
      <p>{`"${toy.likes}"`} Likes </p>
      <button className="like-btn"onClick={handleUpdate}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
