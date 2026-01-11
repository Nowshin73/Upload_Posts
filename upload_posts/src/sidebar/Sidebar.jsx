import React, { useState } from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
import {  IoCreateOutline } from "react-icons/io5";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { RxCrossCircled } from "react-icons/rx";

const Sidebar = () => {
    const [openCreate, setOpenCreate] = useState(false);
    const createOpen = () => {
        setOpenCreate(true);
        console.log("working")
    }
   
    const closeTabs = () => {
        setOpenCreate(false);
        setOpenCreate(false);
    }
    
    // const submitPost = (e) => {
    //     e.preventDefault();
    //     const form = e.target;

    //     const post = {
    //         userEmail: User?.email,
    //         text: form.textpost.value,
    //         type: "text",
    //         style: {
    //             background: background,
    //             color: color,
    //             fontSize: textSize,
    //             fontAlign: textAlign,
    //             lineHeight: lHeight
    //         }
    //     }
    //     console.log(post);
    //     fetch("https://fancygram.vercel.app/posts",
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(post)
    //         }
    //     )
    //         .then((response) => response.json())
    //         .then(() => {
    //             alert("Posted Successfully");
    //         })
    //         .catch((error) => {
    //             alert("Error... try again");
    //         });


    // }
    return (
        <>

            <div className='sidebar'>
                <div>
                    <div>
                        <div className="sidebar-container">
                            <div className="sidebar-links">
                                <div>
                                    <div>
                                        <span>
                                            <div className='sidebar-link-container'>
                                                <Link onClick={createOpen}>
                                                    <div className='sidebar-link-elements'>
                                                        <div className='sidebar-link-elements-icon'>
                                                            <div>
                                                                <IoCreateOutline style={{ width: "24px", height: "24px" }} />
                                                            </div>
                                                        </div>
                                                        <div className='sidebar-link-elements-text'>
                                                            <span>Create</span>
                                                        </div>
                                                    </div>
                                                </Link>

                                            </div>
                                        </span>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
            {openCreate &&
                <div className="background">
                    <RxCrossCircled onClick={closeTabs} className='cross-imo'></RxCrossCircled>
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
                </div>

            }
          
        </>
    )
}

export default Sidebar