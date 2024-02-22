"use client";
import React, { useState } from "react";
import { Button, Card, Input, List, ListItem } from "@material-tailwind/react";

const SpecificUser = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    const response = await fetch(`/api/users/${userId}`);

    if (response.ok) {
      const res = await response.json();
      setUserData(res.user);
    } else {
      console.log("Error fetching user data");
      setUserData(null);
    }
  };

  return (
    <div>
      <div className="flex">
        <div className="w-72">
          <Input
            label="Enter User ID"
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <Button className="ml-4" onClick={fetchUserData}>
          Fetch User
        </Button>
      </div>
      {userData ? (
        userData.map((data) => (
          <>
            <Card className="w-96 mt-5">
              <List>
                <ListItem>ID: {data.id}</ListItem>
                <ListItem>Name: {data.name}</ListItem>
                <ListItem>Age: {data.age}</ListItem>
                <ListItem>Email: {data.email}</ListItem>
                <ListItem>Password: {data.password}</ListItem>
              </List>
            </Card>
          </>
        ))
      ) : (
        <p className="mt-2">Search for a specific user</p>
      )}
    </div>
  );
};

export default SpecificUser;
