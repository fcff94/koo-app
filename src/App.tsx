import "./App.scss";
import { CardComponent } from "./components/card/Card";

import { api } from "./services/api";
import { useEffect } from "react";
import { NewTweet } from "./pages/NewTweet";

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
  date: string | Date;
  comments: string[];
  likes: number;
};

import { Routes, Route } from "react-router-dom";
import { Feed } from "./pages/Feed";
import { Explorer } from "./pages/Explorer";
import { GlobalProvider } from "./contexts/global";
import { Home } from "./pages/Home";

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
      <GlobalProvider>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/create" element={<NewTweet />} />
          <Route index path="/explorer" element={<Explorer />} />
        </Routes>
      </GlobalProvider>
    </>
  );
}

export default App;
