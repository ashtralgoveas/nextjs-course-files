import React from "react";

async function fetchData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();
  return data;
}

const ServerData = async () => {
  let products = await fetchData();
  console.log(products);
  return (
    <div>
      {" "}
      {products.map((item) => (
        <p className="border m-5 py-2 px-4" key={item.id}>
          {item.title}
        </p>
      ))}
    </div>
  );
};

export default ServerData;
