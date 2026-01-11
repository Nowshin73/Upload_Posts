
import { useEffect, useState } from 'react';
import './App.css'
import OpenCreate from './sidebar/OpenCreate';
import { RxCrossCircled } from "react-icons/rx";
import axios from 'axios';

function App() {
const [posts,setPosts] = useState([]);

useEffect(()=>{
  const Posts = axios.get("https://fancygram.vercel.app/posts");
  Posts.then((response) => {
    setPosts(response.data);
  });
},[posts])
  const [openCreate, setOpenCreate] = useState(false);
  const createOpen = () => {
    setOpenCreate(true);
    console.log("working")
  }

  const closeTabs = () => {
    setOpenCreate(false);
   // setOpenCreate(false);
  }
  return (
    <>
      <div className='wrapper'>
        <div className="container">
          <h1>Upload Posts Here</h1>
          <button onClick={createOpen} className='create-btn' type="button">Create</button>
        </div>
        <div className="post-container">
          {
            posts? posts.map((post) => (
              <div key={post._id} className="post">
             {
              post.mediaUrl?    <img className='post-img' src={post.mediaUrl}  alt="Post media" />
              : <div style={{
              background:post.style.background,
              color: post.style.color,
              fontSize:post.style.fontSize,
              textAlign:post.style.fontAlign,
              lineHeight:post.style.lineHeight.toString()+'px'
              }}>
                {post.text}
                </div>
             }
                <p>{post.caption}</p>
              </div>
            )) : <p>No posts available</p>
          }
       </div>
      </div>
      {
        openCreate && 
        <div className="background">
                   <RxCrossCircled onClick={closeTabs} className='cross-imo'></RxCrossCircled>
                 <OpenCreate></OpenCreate>
               </div>
      }
    </>
  )
}

export default App
