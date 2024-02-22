"use client";

import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

function Home() {
  return (
    <section>
      <h1>Google Fonts</h1>
      <h2 className={roboto.className}>Hello this is roboto font</h2>
    </section>
  );
}

export default Home;
