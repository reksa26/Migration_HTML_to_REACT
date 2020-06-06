import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo }) => {
  const [value, setvalue] = useState("");

  const handleFromSubmit = e => {
    e.preventDefault();

    if (!value) {
      alert("No Blank Todo!");
      return;
    }

    addTodo(value);
    alert(value);
    setvalue("");
  };

  // console.log("value", value);
  return (
    <section className="add">
      <form className="add-form" onSubmit={handleFromSubmit}>
        <input
          type="text"
          className="add-input"
          value={value}
          onChange={e => setvalue(e.target.value)}
        />
        <button className="add-btn main-black-color">Add</button>
      </form>
    </section>
  );
};

TodoForm.proptypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;
