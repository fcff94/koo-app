// import { useState } from 'react';
import './App.scss';
import { CardComponent } from './components/card/Card';
import profilePhoto from '@/assets/img/profile_photo.jpeg';

import { api } from "./services/api";
import { useState, useEffect } from "react";

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function App() {
  // const [count, setCount] = useState(0)

  const [list, setList] = useState<PostType[]>([]);

  async function loadPosts() {
    const result = await api.get("users/1/posts");
    setList(result.data);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  // const text = `
  // Welcome to the Koo family 🙂
  // 1. Follow people you like by clicking on the '+ Follow' button to see their posts in your feed.
  // 2. Share your thoughts with others and gain a following.
  // Happy Koo to you!
  // `;

  return (
    <>
      {list.map((tweet, index) => (
        <CardComponent
          key={index}
          userImg={profilePhoto}
          displayName={`Koo English ${tweet.userId}`}
          userName={"@kooenglish"}
          date={String(`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`)}
          text={tweet.title}
        />
      ))}
    </>
  );
}

export default App;
