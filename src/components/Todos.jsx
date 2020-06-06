import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "1!"
    },
    {
      text: "2"
    },
    {
      text: "3"
    },
    {
      text: "4"
    },
    {
      text: "5"
    },
    {
      text: "6"
    },
    {
      text: "7"
    },
    {
      text: "8"
    },
    {
      text: "9"
    },
    {
      text: "10"
    }
  ];
  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
