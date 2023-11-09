import { PostType } from "@/App";
import { useState } from "react";

import { Link } from "react-router-dom";

// import { Comment } from "@/components/card/footer/components/Comment/Comment"
import { TweetInput } from "@/components/TweetInput";

export function NewTweet() {
  const [tweet, setTweet] = useState("");
  const [posts, setPosts] = useState<PostType[]>([]);

  // export type PostType = {
  //   userId: number;
  //   id: number;
  //   title: string;
  //   body: string;
  // };

  function updateState() {
    event?.preventDefault();

    let newPost = {
      userId: 11,
      id: Math.random(),
      title: tweet,
      body: "",
    };

    setPosts([...posts, newPost]);
    setTweet("");
  }

  return (
    <>
      <h1>NewTweet page</h1>

      {posts.map((tweet) => (
        <h1 key={tweet.id}>{tweet.title}</h1>
      ))}

      <form
        onSubmit={() => updateState()}
        style={{
          backgroundColor: "#f8f7f3",
          borderRadius: "24px",
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <div style={{
            display: 'flex', 
            alignItems: 'center',
          }}>
            <Link to="/feed">
              <img
                src="https://www.kooapp.com/_next/static/media/create_back-arrow.cea4aa95.svg"
                alt="link voltar"
              />
            </Link>
            <img
            width={42}
                src="https://www.kooapp.com/_next/static/media/profilePlaceholderYellow.df4b6e90.svg"
                alt="avatar"
              />
          </div>
          
          <button
            style={{
              backgroundColor: "#b3b2b0",
              gap: 10,
              display: "flex",
              flexDirection: "row",
              borderRadius: "16px",
              alignItems: "center",
              color: "white",
              fontWeight: 800,
              padding: "6px 10px",
              border: "none",
            }}
            type="submit"
          >
            <img
              src="https://www.kooapp.com/_next/static/media/create_post.035a59de.svg"
              alt=""
            />
            <span style={{}}>Post</span>
          </button>
        </div>
        <TweetInput tweet={tweet} setTweet={setTweet} />
        <br />
      </form>
    </>
  );
}
