"use client";
import React, { useEffect, useState } from "react";

const Data = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      data = await data.json();
      setProduct(data);
    }
    fetchData();
  }, []);

  return (
    <>
      {product.map((item) => (
        <p className="border m-5 py-2 px-4" key={item.id}>
          {item.title}
        </p>
      ))}
    </>
  );
};
export default Data;
