import { TweetInput } from "@/components/TweetInput"
import { useGlobal } from "@/contexts/global"

export function Explorer(){

  const {loading, user} = useGlobal()

  return(
    <>
      {loading ? (<h1>loading...</h1>) : (
        <div>
        <h1>Feed Explorer - {JSON.stringify(loading)}</h1>
        {/* {user.name && <TweetInput tweet="false" setTweet={setTweet} />} */}
        <img src="https://i.imgur.com/w1evrRa.png" alt="" />
        </div>
      )}
     </>
  )
}