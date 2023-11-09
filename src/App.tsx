// import { useState } from 'react';
import "./App.scss";
import { CardComponent } from "./components/card/Card";

import { api } from "./services/api";
import { useState, useEffect } from "react";
import { NewTweet } from "./pages/NewTweet";

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

import { Routes, Route } from "react-router-dom";
import { Feed } from "./pages/Feed";
import { Explorer } from "./pages/Explorer";

function App() {
  // const [count, setCount] = useState(0)

  // const text = `
  // Welcome to the Koo family 🙂
  // 1. Follow people you like by clicking on the '+ Follow' button to see their posts in your feed.
  // 2. Share your thoughts with others and gain a following.
  // Happy Koo to you!
  // `;

  return (
    <>
      <Routes>
        <Route index path="/" element={<Explorer />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/create" element={<NewTweet />} />
      </Routes>
    </>
  );
}

export default App;
