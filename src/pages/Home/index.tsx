import { useNavigate } from "react-router-dom";
import "./home.css";
import { Feed } from "../Feed";

export function Home() {

  const navigate = useNavigate()

  return (
    <>
      <main>
        <div className="firstColumn columnAside">
          <img
            src="https://www.kooapp.com/_next/static/media/logoKuSolidOutline.1f4fa971.svg"
            className="logo"
          />

          <nav>
            <a href="/feed">
              <img src="https://i.imgur.com/0qcl2x7.png" alt="" />
              <span>Feed</span>
            </a>
            <a href="/explorer">
              <img src="https://i.imgur.com/0qcl2x7.png" alt="" />
              <span>Explorer</span>
            </a>

            <button className="grayButton"
              onClick={()=> navigate("/create")}
            >+ Koo</button>
          </nav>
        </div>

        <div>
          <Feed />
        </div>

        <div style={{ height: 400 }} className="thirdColumn columnAside">
          <h2>Trending Hashtags</h2>

          {["react-js", "react-native", "next-js", "js"].map((hashtag: string, index) => (
            <div className="columnAside hashtagCard"
              key={index}
            >
              <div className="columnAside">
                <h1># {hashtag}</h1>
                <img src="https://images.kooapp.com/koo-profile-media/profiles/transcode_input/3281076/8fff3974-dd5b-4f7f-ac17-134f60429e07voke.jpg?tr=n-dp_mini" width="24" />
                <span style={{marginTop: "6px !important"}}>Trending locally</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}