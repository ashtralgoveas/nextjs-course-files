"use client";
import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";

const DeleteUser = () => {
  const [id, setId] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      alert("Please provide user ID to delete the user.");
      return;
    }

    try {
      const response = await fetch(`api/users/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("User Successfully Deleted.");
        clearForm();
      } else {
        const data = await response.json();
        alert(
          data.result ||
            "Something went wrong while deleting user information. "
        );
      }
    } catch (error) {
      alert(error);
    }
  };

  const clearForm = () => {
    setId("");
  };

  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <Input
          label="ID"
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <Button className="mt-2" type="submit">
          Delete User
        </Button>
      </form>
    </div>
  );
};

export default DeleteUser;
