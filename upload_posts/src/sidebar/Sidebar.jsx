import React, { useState } from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHomeSharp, IoCompassOutline, IoSearchOutline, IoCreateOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaBurger, FaCircleUser } from "react-icons/fa6";
import { BiCross, BiMessage, BiMoviePlay } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { MdMessage, MdOutlineMessage, MdTextDecrease } from 'react-icons/md';
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import { MdTextIncrease } from "react-icons/md";
import { PiTextAlignCenterBold, PiTextAlignJustify, PiTextAlignJustifyBold, PiTextAlignLeftBold, PiTextAlignRightBold } from "react-icons/pi";
const Sidebar = ({User}) => {
    const [openCreate, setOpenCreate] = useState(false);
    const createOpen = () => {
        setOpenCreate(true);
        console.log("working")
    }
    const [openWrite, setOpenWrite] = useState(false);
    const openCreateText = () => {
        setOpenCreate(false);
        setOpenWrite(true);
    }
    const closeTabs = ()=>{
        setOpenCreate(false);
        setOpenCreate(false);
    }
   // const [closeWrite, setCloseWrite]= useState(false);
    const [background, setBackground] = useState('white');
    const [color, setColor] = useState('black');
    const [textSize, setTextSize] = useState(20);
    const [textAlign, setTextAlign] = useState('center');
    const [lHeight, setLHeight] = useState(30);

    const increaseTextSize = (textSize, lineHeight) => {
        if (textSize < 56) {
            setTextSize(textSize + 2);
            setLHeight(lineHeight + 2)
        }
    }
    const decreaseTextSize = (textSize, lineHeight) => {
        if (textSize > 14) {
            setTextSize(textSize - 2);
            setLHeight(lineHeight - 2)
        }
    }
    const submitPost = (e) => {
        e.preventDefault();
        const form = e.target;
        
        const post = {
            userEmail:User?.email,
            text: form.textpost.value,
            type:"text",
            style: {
                background: background,
                color: color,
                fontSize: textSize,
                fontAlign: textAlign,
                lineHeight: lHeight
            }
        }
        console.log(post);
        fetch("http://localhost:5000/posts",
         {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
           body: JSON.stringify(post)
        }
        )
        .then((response) => response.json())
        .then(() => {
            alert("Posted Successfully");
        })
        .catch((error) => {
            alert("Error... try again");
        });

        
    }
    return (
        <>

            <div className='sidebar'>
                <div>
                    <div>
                        <div className="sidebar-container">
                            <div className="logo">
                                <div>
                                    <Link to={"/"} className="title">
                                        FantasyGram
                                    </Link>
                                </div>
                            </div>
                            <div className="sidebar-links">
                                <div className='sidebar-link-wrapper'>
                                    <div>
                                        <span>
                                            <div className='sidebar-link-container'>
                                                <Link>
                                                    <div className='sidebar-link-elements'>
                                                        <div className='sidebar-link-elements-icon'>
                                                            <div>
                                                                <IoHomeSharp style={{ width: "24px", height: "24px" }} />
                                                            </div>
                                                        </div>
                                                        <div className='sidebar-link-elements-text'>
                                                            <span>Home</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span>
                                            <div className='sidebar-link-container'>
                                                <Link>
                                                    <div className='sidebar-link-elements'>
                                                        <div className='sidebar-link-elements-icon'>
                                                            <div>
                                                                <IoCompassOutline style={{ width: "24px", height: "24px" }} />
                                                            </div>
                                                        </div>
                                                        <div className='sidebar-link-elements-text'>
                                                            <span>Explore</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span>
                                            <div className='sidebar-link-container'>
                                                <Link>
                                                    <div className='sidebar-link-elements'>
                                                        <div className='sidebar-link-elements-icon'>
                                                            <div>
                                                                <IoSearch style={{ width: "24px", height: "24px" }} />
                                                            </div>
                                                        </div>
                                                        <div className='sidebar-link-elements-text'>
                                                            <span>Search</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span>
                                            <div className='sidebar-link-container'>
                                                <Link>
                                                    <div className='sidebar-link-elements'>
                                                        <div className='sidebar-link-elements-icon'>
                                                            <div>
                                                                <BiMoviePlay style={{ width: "24px", height: "24px" }} />
                                                            </div>
                                                        </div>
                                                        <div className='sidebar-link-elements-text'>
                                                            <span>Reels</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span>
                                            <div className='sidebar-link-container'>
                                                <Link>
                                                    <div className='sidebar-link-elements'>
                                                        <div className='sidebar-link-elements-icon'>
                                                            <div>
                                                                <MdOutlineMessage style={{ width: "24px", height: "24px" }} />
                                                            </div>
                                                        </div>
                                                        <div className='sidebar-link-elements-text'>
                                                            <span>Messages</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span>
                                            <div className='sidebar-link-container'>
                                                <Link>
                                                    <div className='sidebar-link-elements'>
                                                        <div className='sidebar-link-elements-icon'>
                                                            <div>
                                                                <IoMdNotificationsOutline style={{ width: "24px", height: "24px" }} />
                                                            </div>
                                                        </div>
                                                        <div className='sidebar-link-elements-text'>
                                                            <span>Notifications</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </span>
                                    </div>
                                </div>
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
                                <div>
                                    <div>
                                        <span>
                                            <div className='sidebar-link-container'>
                                                <Link>
                                                    <div className='sidebar-link-elements'>
                                                        <div className='sidebar-link-elements-icon'>
                                                            <div>
                                                                <FaCircleUser style={{ width: "24px", height: "24px" }} />
                                                            </div>
                                                        </div>
                                                        <div className='sidebar-link-elements-text'>
                                                            <span>Profile</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span>
                                            <div className='sidebar-link-container'>
                                                <Link>
                                                    <div className='sidebar-link-elements'>
                                                        <div className='sidebar-link-elements-icon'>
                                                            <div>
                                                                <GiHamburgerMenu style={{ width: "24px", height: "24px" }} />
                                                            </div>
                                                        </div>
                                                        <div className='sidebar-link-elements-text'>
                                                            <span>More</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="more">

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
                                <div>
                                    <div>
                                        <MdOutlinePostAdd className='photo-video' />
                                    </div>
                                    <button onClick={openCreateText} className='secondary-button'> Write Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }
            {openWrite &&
                <div className="background">
                    <RxCrossCircled onClick={() => setOpenWrite(false)} className='cross-imo'></RxCrossCircled>
                    <div className="write">
                        <div className="write-container">
                            <div className="write-up">
                                <div>
                                    <span>Write Post</span>
                                </div>
                            </div>
                            <div className="write-down">
                                <div>
                                    <form onSubmit={submitPost}>
                                        <textarea
                                            name="textpost" id="textpost"
                                            style={{
                                                fontSize: textSize.toString() + "px",
                                                backgroundColor: background,
                                                color: color,
                                                textAlign: textAlign,
                                                lineHeight: lHeight.toString() + "px"
                                            }}
                                        >

                                        </textarea>
                                        <input className='secondary-button' type="submit" value="Post" />
                                    </form>
                                    <div className="wd-right">

                                        <div className='edit-bg'>
                                            <div><span>Edit Background</span></div>
                                            <div className='change-bg'>
                                                <div><button onClick={() => setBackground("white")} style={{ background: "white" }}></button></div>
                                                <div><button onClick={() => setBackground("black")} style={{ background: "black", color: "white" }}></button></div>
                                                <div><button onClick={() => setBackground("orange")} style={{ background: "orange" }}></button></div>
                                                <div><button onClick={() => setBackground("orchid")} style={{ background: "orchid" }}></button></div>
                                                <div><button onClick={() => setBackground("limegreen")} style={{ background: "limegreen" }}></button></div>
                                                <div><button onClick={() => setBackground("maroon")} style={{ background: "maroon", color: "white" }}></button></div>
                                                <div><button onClick={() => setBackground("mediumpurple")} style={{ background: "mediumpurple", color: "white" }}></button></div>
                                                <div><button onClick={() => setBackground("deepskyblue")} style={{ background: "deepskyblue", color: "white" }}></button></div>
                                            </div>
                                        </div>
                                        <div className='edit-text edit-bg'>
                                            <div><span>Edit Text</span></div>
                                            <div className='change-bg'>
                                                <div><button onClick={() => setColor("white")} style={{ background: "white" }}></button></div>
                                                <div><button onClick={() => setColor("black")} style={{ background: "black" }}></button></div>
                                                <div><button onClick={() => setColor("blue")} style={{ background: "blue" }}></button></div>
                                                <div><button onClick={() => setColor("green")} style={{ background: "green" }}></button></div>
                                                <div><button onClick={() => setColor("yellow")} style={{ background: "yellow" }}></button></div>
                                                <div><button onClick={() => setColor("mediumpurple")} style={{ background: "mediumpurple" }}></button></div>
                                                <div><button onClick={() => setColor("red")} style={{ background: "red" }}></button></div>
                                                <div><button onClick={() => setColor("magenta")} style={{ background: "magenta" }}></button></div>
                                            </div>
                                        </div>
                                        <div className='tz-div'>
                                            <div><button onClick={() => increaseTextSize(textSize, lHeight)}><MdTextIncrease /> </button></div>
                                            <div><button onClick={() => decreaseTextSize(textSize, lHeight)}><MdTextDecrease /></button></div>
                                        </div>
                                        <div className='ta-div'>
                                            <div><button onClick={() => setTextAlign('left')} className={textAlign ==='left'?'activeAlign':'align-btn'}><PiTextAlignLeftBold /> </button></div>
                                            <div><button onClick={() => setTextAlign('center')} className={textAlign ==='center'?'activeAlign':'align-btn'}><PiTextAlignCenterBold /> </button></div>
                                            <div><button onClick={() => setTextAlign('justify')} className={textAlign ==='justify'?'activeAlign':'align-btn'}><PiTextAlignJustifyBold /> </button></div>
                                            <div><button onClick={() => setTextAlign('right')} className={textAlign ==='right'?'activeAlign':'align-btn'}><PiTextAlignRightBold /> </button></div>
                                        </div>
                                    </div>
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