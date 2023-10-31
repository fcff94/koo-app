// import { useState } from 'react';
import './App.scss';
import { CardComponent } from './components/card/Card';
import profilePhoto from '@/assets/img/profile_photo.jpeg';

function App() {
  // const [count, setCount] = useState(0)
  const text = `
  Welcome to the Koo family 🙂
  1. Follow people you like by clicking on the '+ Follow' button to see their posts in your feed.
  2. Share your thoughts with others and gain a following.
  Happy Koo to you!
  `;

  return (
    <>
      <CardComponent
        userImg={profilePhoto}
        displayName={'Koo English'}
        userName={'@kooenglish'}
        date={'21/07/2023'}
        text={text}
      />
    </>
  );
}

export default App;
