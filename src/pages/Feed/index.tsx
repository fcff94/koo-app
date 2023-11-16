import { CardComponent } from "@/components/card/Card";
import profilePhoto from "@/assets/img/profile_photo.jpeg";

import { useGlobal } from '../../contexts/global'
import { Routes, Route } from "react-router-dom";
import { Explorer } from "../Explorer";

export function Feed() {
  // const [list, setList] = useState<PostType[]>([]);

  // async function loadPosts() {
  //   const result = await api.get("users/1/posts");
  //   setList(result.data);
  // }

  // useEffect(() => {
  //   loadPosts();
  // }, []);

  const { user, initialPosts } = useGlobal()

  return (
    <>
      <div style={{ background: "#f8f7f3", padding: '20px' }}>
        <h1>Olá, {user.name}</h1>
        <br />

        {initialPosts.slice(0)
          .reverse().map((tweet, index) => (
            <CardComponent
              key={index}
              userImg={profilePhoto}
              displayName={`Koo English ${tweet.userId}`}
              userName={"@kooenglish"}
              date={String(
                `${new Date().getDate()}/${new Date().getMonth() + 1
                }/${new Date().getFullYear()}`
              )}
              // {new Date(tweet.date).toLocaleString().split(",")[0]}
              text={tweet.title}
            />
          ))}
      </div>
      </>
  );
}
