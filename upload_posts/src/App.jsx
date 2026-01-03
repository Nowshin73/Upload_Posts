
import { useState } from 'react';
import './App.css'
import OpenCreate from './sidebar/OpenCreate';
import { RxCrossCircled } from "react-icons/rx";

function App() {

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
