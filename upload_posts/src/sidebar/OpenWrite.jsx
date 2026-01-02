import React from 'react'

const OpenWrite = () => {
  return (
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
                                               <div><button onClick={() => setTextAlign('left')} className={textAlign === 'left' ? 'activeAlign' : 'align-btn'}><PiTextAlignLeftBold /> </button></div>
                                               <div><button onClick={() => setTextAlign('center')} className={textAlign === 'center' ? 'activeAlign' : 'align-btn'}><PiTextAlignCenterBold /> </button></div>
                                               <div><button onClick={() => setTextAlign('justify')} className={textAlign === 'justify' ? 'activeAlign' : 'align-btn'}><PiTextAlignJustifyBold /> </button></div>
                                               <div><button onClick={() => setTextAlign('right')} className={textAlign === 'right' ? 'activeAlign' : 'align-btn'}><PiTextAlignRightBold /> </button></div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
  )
}

export default OpenWrite