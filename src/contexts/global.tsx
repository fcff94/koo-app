import { PostType } from '@/App';
import React,{ createContext, useContext, useState } from 'react'

// const context = {
//   user: 'rafael', 
//   signed: false,
//   setStatus: false
// }

// const {user} = useContext(context)

type UserType = {
  name: string;
  email: string;
}

type GlobalTypes = {
  user: UserType;
  setUser(user: UserType): void;
  loading: boolean;
  
  tweet: string;
  setTweet(tweet: string): void;

  initialPosts: PostType[];
  setPosts(post: PostType[]): void;
}

const GlobalContext = createContext<GlobalTypes>({} as GlobalTypes);

export function GlobalProvider({children}:{children: React.ReactNode}) {

// function (params:type) {
  
// }

const [user, setUser] = useState<UserType>({
  name: 'rafael',
  email: 'email@gmail.com'
})

const [loading, setLoading] = useState<boolean>(false)

const [tweet, setTweet] = useState<string>("");
  const [initialPosts, setPosts] = useState<PostType[]>([
    {
      userId: 11,
      id: 1,
      title:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, similique.",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, similique.",
      date: "Thu Mar 24 2022 21:00:00 GMT-0300 (Brasilia Standard Time)",
      comments: ["i ha** it", "make orkut great again"],
      likes: 0,
    },
    {
      userId: 11,
      id: 2,
      title: "consectetur adipisicing elit. Odit, similique. ",
      body: "adipisicing elit. Odit, similique.",
      date: "Thu Mar 24 2022 21:00:00 GMT-0300 (Brasilia Standard Time)",
      comments: ["koo app sucks", "twitter way better"],
      likes: 0,
    },
  ]);

  return (
    <GlobalContext.Provider
      value={{
        user, setUser, loading, tweet, setTweet, initialPosts, setPosts
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

// hook customizado
export function useGlobal() {
  const context = useContext(GlobalContext)
  return context;
}