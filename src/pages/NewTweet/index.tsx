import { PostType } from "@/App";
import { useState } from "react";

import { Link, useNavigate, useNavigation } from "react-router-dom";

// import { Comment } from "@/components/card/footer/components/Comment/Comment"
import { TweetInput } from "@/components/TweetInput";
import { useGlobal } from "@/contexts/global";

export function NewTweet() {
  // const [tweet, setTweet] = useState("");
  // const [posts, setPosts] = useState<PostType[]>([]);

  const { initialPosts, setPosts, tweet, setTweet } = useGlobal();

  // export type PostType = {
  //   userId: number;
  //   id: number;
  //   title: string;
  //   body: string;
  // };

  const navigate = useNavigate();

  function updateState() {
    event?.preventDefault();

    let newPost = {
      userId: 11,
      id: Math.random(),
      title: tweet,
      body: "",
      date: new Date(),
      comment: [],
      likes: 0,
    };

    setPosts([...initialPosts, newPost]);
    setTweet("");

    navigate("/feed");
  }

  return (
    <>
      <h1>NewTweet page</h1>

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
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
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
