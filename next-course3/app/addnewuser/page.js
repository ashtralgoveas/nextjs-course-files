"use client";
import React, { useState } from "react";

const AddNewUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addNewUserHandler = async () => {
    let response = await fetch("api/users", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });

    response = await response.json();

    if (response.ok) {
      alert("User successfully created");
    } else {
      alert("An Error Occurred while creating the new user.");
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Please Enter your name"
        className="ml-2 mr-4 mt-4"
      />
      <br />
      <br />
      <input
        type="number"
        onChange={(e) => setAge(e.target.value)}
        value={age}
        placeholder="Please Enter your age"
        className="ml-2 mr-4 mt-4"
      />
      <br /> <br />
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Please Enter your email"
        className="ml-2 mr-4 mt-4"
      />
      <br />
      <br />
      <button onClick={addNewUserHandler} className="ml-2 mr-4 mt-4">
        Add New User
      </button>
    </div>
  );
};

export default AddNewUser;
