import React, { useReducer, useState } from "react";
import { reducer } from "./reducer";
const booksData = [
  { id: "1", name: "Shaiful Islam" },
  { id: "2", name: "Anisul Islam" },
  { id: "3", name: "Anisul Islam rokon" },
];


const UseReduce = () => {
  const [bookState, dispatch] = useReducer(reducer, {
    books: booksData,
    isModalOpen: false,
    modalText: "",
  });
  const [bookName, setBookName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: new Date().getTime().toString(), name: bookName };
    dispatch({ type: "ADD", payload: newBook });
    setBookName("");
  };
  const Modal = ({ modalText }) => {
    return <p>{modalText}</p>;
  };
  const handleRemove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  return (
    <div>
      <h1>Book List</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Book Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}
      {bookState.books.map((book) => {
        const { id, name } = book;
        return (
          <li key={id}>
            {name} <button onClick={() => handleRemove(id)}>Remove</button>
          </li>
        );
      })}
    </div>
  );
};

export default UseReduce;
