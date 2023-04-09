

import React, { useContext, useEffect, useState } from 'react';
import { store } from '../App';
import { useNavigate } from 'react-router-dom';
import happySound from './wow.mp3';
import sadSound from './cry.mp3';
// import boyImage from '../assets/boy.png';
// import './RoadMap.css';
 import thinking from './thinking.jpg'
 import happyImage from './happyImage.png'


 
const Button = () => {
    const navigate = useNavigate();
    const { totalPages,currentPage, setCurrentPage,
      counter, setCounter,
      completedPages, setCompletedPages,
      isJumping, setIsJumping,
      isHappy, setIsHappy,
      jumpDuration,
      handleNextPage,
      handlePrevPage,
      isPageCompleted,
      playSound,
      handleJumpEnd } = useContext(store);
  return (
    <>
         <div className="roadmap-buttons">
        {/* <button disabled={currentPage === 1} onClick={handlePrevPage}>
          dcd
        </button> */}
        {/* <button style={{display:`${currentPage === 1?'none':"block"}`}} onClick={handlePrevPage}>
          back
        </button> */}
        <button type="button" class="btn btn-danger" style={{display:`${currentPage === 1?'none':"block"}`}} onClick={handlePrevPage}>Back</button>
        <button type="button" class="btn btn-primary" disabled={currentPage === totalPages} onClick={handleNextPage}>
        {
            counter === 0 ? " please proceed"
              :counter ===1 ?"permission granted"
              :counter ===2 ?"Say to shalem to book ticket"
              :counter ===3 ?"going to clg on wednesday"
              :counter ===4 ?"completed the review"
              :counter ===5 ?"Shalem will see you from far like this ,enough for me amma "
              :counter ===6 ?"Shalem will come back safely":null
          }

        </button>
        {/* <button disabled={currentPage === totalPages} onClick={handleNextPage}>
         {
            counter === 0 ? " please proceed"
              :counter ===1 ?"permission granted"
              :counter ===2 ?"Say to shalem to book ticket"
              :counter ===3 ?"go to clg on wednesday"
              :counter ===4 ?"complete the review"
              :counter ===5 ?"Shalem will see you from far"
              :counter ===6 ?"Shalem will come back safely":null
          }
        </button> */}
      </div> 
    </>
  )
}

export default Button