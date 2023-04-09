import React, { createContext, useState,useEffect } from 'react';
import RoadMap from './components/RoadMap';
import {Route, BrowserRouter as Router, Routes, useNavigate} from 'react-router-dom'
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';
import Six from './components/Six';
import Home from './components/Home';
import happySound from './components/wow.mp3';
import sadSound from './components/cry.mp3';
// import boyImage from '../assets/boy.png';
// import './RoadMap.css';
 import thinking from './components/thinking.jpg'
 import happyImage from './components/happyImage.png'
import Button from './components/Button';


export const store = createContext()

function App() {
  const navigate = useNavigate();
  const totalPages = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const [counter, setCounter] = useState(0);
  const [completedPages, setCompletedPages] = useState([]);
  const [isJumping, setIsJumping] = useState(false);
  const [isHappy, setIsHappy] = useState(true);
  const jumpDuration = 800;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCounter((count) => {
       return ( count + 1
        
        )
      });
      navigate(`${counter+1}`);
      console.log(counter,'next')
      setCurrentPage( (prev) => prev + 1);
      setCompletedPages([...completedPages, currentPage]);
      setIsJumping(true);
      setIsHappy(true);
      playSound(happySound, jumpDuration);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCounter(count => count - 1);
      console.log(counter,'prev')
      setCurrentPage( (prev) => prev - 1);
      setCompletedPages(completedPages.filter((page) => page !== currentPage - 1));
      setIsJumping(true);
      setIsHappy(false);
      playSound(sadSound, jumpDuration);
      if(counter >1 ){
        console.log(counter,'prev')
        navigate(`${counter-1 }`);
      }
      else{
        navigate(`/`);
      }
    }
  };

  const isPageCompleted = (pageNumber) => {
    return completedPages.includes(pageNumber);
  };

  const playSound = (sound, delay) => {
    setTimeout(() => {
      const audio = new Audio(sound);
      audio.play();
    }, delay);
  };

  const handleJumpEnd = () => {
    setIsJumping(false);
  };
  useEffect(()=>{
  },[currentPage,counter])
  return (
    <store.Provider value={{
      totalPages,currentPage, setCurrentPage,
    counter, setCounter,
    completedPages, setCompletedPages,
    isJumping, setIsJumping,
    isHappy, setIsHappy,
    jumpDuration,
    handleNextPage,
    handlePrevPage,
    isPageCompleted,
    playSound,
    handleJumpEnd
    }}>
    <RoadMap />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/1' element={<One />} />
        <Route path='/2' element={<Two />} />
        <Route path='/3' element={<Three />} />
        <Route path='/4' element={<Four />} />
        <Route path='/5' element={<Five />} />
        <Route path='/6' element={<Six />} />
      </Routes>
      <Button />
    </store.Provider>
  );
}

export default App;
