import { CardComponent } from "@/components/card/Card";
import profilePhoto from "@/assets/img/profile_photo.jpeg";
import { PostType } from "@/App";
import { useEffect, useState } from "react";
import { api } from "@/services/api";

import { Comment } from "../../components/card/footer/components/Comment/Comment";

export function Feed() {
  const [list, setList] = useState<PostType[]>([]);

  async function loadPosts() {
    const result = await api.get("users/1/posts");
    setList(result.data);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div style={{ background: "#f8f7f3", padding: '20px' }}>
      <Comment />
      <br />

      {list.map((tweet, index) => (
        <CardComponent
          key={index}
          userImg={profilePhoto}
          displayName={`Koo English ${tweet.userId}`}
          userName={"@kooenglish"}
          date={String(
            `${new Date().getDate()}/${
              new Date().getMonth() + 1
            }/${new Date().getFullYear()}`
          )}
          text={tweet.title}
        />
      ))}
    </div>
  );
}
