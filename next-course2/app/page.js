"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Home() {
  const router = useRouter();

  const navigate = (page) => {
    router.push(page);
  };

  return (
    <section>
      <h1>useRouter</h1>
      <Link href="/projects">Projects</Link>
      <br />
      <button onClick={() => navigate("about")}>Go to About Page</button>
      <br />
      <button onClick={() => navigate("login")}>Go to Login Page</button>
    </section>
  );
}

export default Home;
