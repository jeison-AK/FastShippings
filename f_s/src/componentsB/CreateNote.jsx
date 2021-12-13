import React, { useState } from "react"; //para recordar cambios tenemos q tener conciencia de los estados del imput

function CreateNote() {
  const [input, setInput] = useState({
    title: "", //field to be tracked
    content: "", //field to be tracked, para el value de textarea
  });
  function handleChange(event) {
    const { name, value } = event.target; //referencia el name y value q estan en el html
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }
  function handleClick(event) {
    event.preventDefault(); //prevent refresh after a button click
    console.log(input);
  }
  return (
    <div className="container">
      <h1>Create a note 🎵🎶!!</h1>
      <form action="">
        <div className="form-group">
          <input
            onChange={handleChange}
            name="title"
            value={input.title}
            type="text"
            className="form-control"
          />
        </div>
        <div>
          <textarea
            onChange={handleChange}
            name="content"
            value={input.content}
            id=""
            cols="30"
            rows="10"
            className="form-control"
          ></textarea>
        </div>
        <button onClick={handleClick} className="btn btn-lg btn-info">
          Add note
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
