import React from "react";
import NatureImage from "@/public/nature-pic.jpg";
import Image from "next/image";

export const generateMetadata = () => {
  return {
    title: "This is a user page",
    description: "All about the users",
  };
};

const Users = () => {
  return (
    <div>
      {/* Internal Images */}
      <Image src={NatureImage} alt="Nature Image" width={1000} height={1000} />
      <br />
      {/* External Images */}
      <Image
        src="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Flower image"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default Users;
