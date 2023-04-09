// import React, { useContext, useEffect, useState } from 'react';
// import { store } from '../App';
// import { useNavigate } from 'react-router-dom';
// import thinking from './thinking.jpg'
// import happyImage from './happyImage.png'


// function RoadMap() {
//   const navigate = useNavigate()
//   const {totalPages} = useContext(store)
//   const [currentPage, setCurrentPage] = useState(1);
//   const [completedPages, setCompletedPages] = useState([]);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//       setCompletedPages([...completedPages, currentPage]);
//     }
// console.log(currentPage,'nextpage')
// navigate(`${currentPage}`)
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       navigate(`${currentPage-1}`)
//       setCurrentPage(currentPage - 1);
//       console.log(currentPage,"prevpage")
//       setCompletedPages(completedPages.filter(page => page !== currentPage - 1));
//     }
//   };

//   const isPageCompleted = (pageNumber) => {
//     return completedPages.includes(pageNumber);
//   };
//   useEffect(()=>{

//   },[currentPage])
//   return (
//     // <div>
//     //   <h2>Roadmap</h2>
//     //   <ol>
//     //     {[...Array(totalPages).keys()].map(pageNumber => (
//     //       <li key={pageNumber}>
//     //         <span style={{ textDecoration: isPageCompleted(pageNumber + 1) ? 'line-through' : 'none' }}>
//     //           Page {pageNumber + 1}
//     //         </span>
//     //       </li>
//     //     ))}
//     //   </ol>
//     //   <div>
//     //     <button disabled={currentPage === 1} onClick={handlePrevPage}>Back</button>
//     //     <button disabled={currentPage === totalPages} onClick={handleNextPage}>Next</button>
//     //   </div>
//     // </div>
//     <>
//       <div className="roadmap-container">
//       <h2>Roadmap</h2>
//       <ol className="roadmap-list">
//         {[...Array(totalPages).keys()].map(pageNumber => (
//           <li key={pageNumber} className={isPageCompleted(pageNumber + 1) ? 'completed' : ''}>
//           <div className='rounded-roadmap'>
//             {/* <span>Page {pageNumber + 1}</span> */}
//             {
//               currentPage<10?<>
//               {currentPage === pageNumber + 1 && <img src={thinking} className="current-icon" />}
//               </>:<>
//               {currentPage === pageNumber + 1 && <img src={happyImage} className="current-icon" />}
//               </>
//             }

//           </div>
//           </li>
//         ))}
//       </ol>
//       <div className="roadmap-buttons">
//         <button disabled={currentPage === 1} onClick={handlePrevPage}>Back</button>
//         <button disabled={currentPage === totalPages} onClick={handleNextPage}>Next</button>
//       </div>
//     </div>
//     </>
//   );
// }

// export default RoadMap;








import React, { useContext, useEffect, useState } from 'react';
import { store } from '../App';
import { useNavigate } from 'react-router-dom';
import happySound from './wow.mp3';
import sadSound from './cry.mp3';
// import boyImage from '../assets/boy.png';
// import './RoadMap.css';
 import thinking from './thinking.jpg'
 import happyImage from './happyImage.png'


function RoadMap() {
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
  // const [currentPage, setCurrentPage] = useState(1);
  // const [counter, setCounter] = useState(0);
  // const [completedPages, setCompletedPages] = useState([]);
  // const [isJumping, setIsJumping] = useState(false);
  // const [isHappy, setIsHappy] = useState(true);
  // const jumpDuration = 800;

  // const handleNextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCounter((count) => {
  //      return ( count + 1
        
  //       )
  //     });
  //     navigate(`${counter+1}`);
  //     console.log(counter,'next')
  //     setCurrentPage( (prev) => prev + 1);
  //     setCompletedPages([...completedPages, currentPage]);
  //     setIsJumping(true);
  //     setIsHappy(true);
  //     playSound(happySound, jumpDuration);
  //   }
  // };

  // const handlePrevPage = () => {
  //   if (currentPage > 1) {
  //     setCounter(count => count - 1);
  //     console.log(counter,'prev')
  //     setCurrentPage( (prev) => prev - 1);
  //     setCompletedPages(completedPages.filter((page) => page !== currentPage - 1));
  //     setIsJumping(true);
  //     setIsHappy(false);
  //     playSound(sadSound, jumpDuration);
  //     if(counter >1 ){
  //       navigate(`${counter-1 }`);
  //     }
  //     else{
  //       navigate(`/`);
  //     }
  //   }
  // };

  // const isPageCompleted = (pageNumber) => {
  //   return completedPages.includes(pageNumber);
  // };

  // const playSound = (sound, delay) => {
  //   setTimeout(() => {
  //     const audio = new Audio(sound);
  //     audio.play();
  //   }, delay);
  // };

  // const handleJumpEnd = () => {
  //   setIsJumping(false);
  // };


  useEffect(()=>{
  },[currentPage,counter])
  return (
    <div className="roadmap-container">
      <h2>Roadmap</h2>
      <div className="boy-container">
       
      </div>
      <ol className="roadmap-list">
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <li key={pageNumber} className={isPageCompleted(pageNumber + 1) ? 'completed' : 'pending'}>
          <div className={isPageCompleted(pageNumber + 1) ? 'rounded-roadmap-completed' : 'rounded-roadmap-pending'}>
              {
              currentPage<7?<>
              {currentPage === pageNumber + 1 && <img src={thinking} className="current-icon" />}
              </>:<>
              {currentPage === pageNumber + 1 && <img src={happyImage} className="current-icon" />}
              </>
            }
          </div>
            
            <span>{pageNumber + 1} step success</span>
            
          </li>
        ))}
      </ol>
      {
        counter
      }
    
    </div>
  );
}

export default RoadMap;
