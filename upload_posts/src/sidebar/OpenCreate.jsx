import React from 'react'

import { LiaPhotoVideoSolid } from "react-icons/lia";


const OpenCreate = () => {

    return (
        <div className="create">
                       <div className="create-container">
                           <div className="create-up">
                               <div>
                                   <span>Create New Post</span>
                               </div>
                           </div>
                           <div className="create-down">
                               <div>
                                   <div>
                                       <LiaPhotoVideoSolid className='photo-video' />
                                   </div>
                                   <form action="">
       
                                   </form>
                                   <button className='secondary-button'> Select From Computer</button>
                               </div>
       
                           </div>
                       </div>
                   </div>
    )
}

export default OpenCreate