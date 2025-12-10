import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuizContext } from '../context/QuizContext.jsx'
import pngwing from '../assets/pngwing.com.png'
import Steps from './Steps'
import Modal from './Modal.jsx'

const Header = () => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { handleRestartQuiz } = useContext(QuizContext)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const startQuiz = () => {
    handleRestartQuiz();
    setIsModalOpen(false);
    navigate('/quiz');
  }

  return (
    <>
      <div className="w-full min-h-[60vh] flex flex-col lg:flex-row justify-center items-center px-4 md:px-12 py-10 md:py-20 theme-hero rounded-b-3xl shadow-2xl">
        <div className="w-full flex flex-col justify-center items-center lg:items-start p-4 md:p-12 text-center lg:text-left">
          <p className="font-extrabold text-3xl md:text-5xl lg:text-7xl leading-tight text-blue-200 drop-shadow mb-6">
            Experience the Ultimate Quiz Challenge
            <span className="block text-transparent bg-clip-text">Play and Learn!</span>
          </p>
          <p className="mt-2 mb-6 text-lg md:text-2xl lg:text-3xl font-light text-blue-100">
            Challenge your knowledge across various topics and see how much you know!
          </p>
          <div className="flex justify-center lg:justify-start items-center mb-8">
            <button
              onClick={openModal}
              className="theme-cta font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all duration-200 text-xl"
              style={{background: 'linear-gradient(90deg,var(--cta-from),var(--cta-to))'}}
            >
              Start Quiz
            </button>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <p className="uppercase font-semibold text-lg md:text-2xl lg:text-3xl tracking-wider text-green-200 mb-2">
              Join thousands of quiz enthusiasts and test your knowledge today!
            </p>
            <div className="flex flex-row justify-center lg:justify-start items-center">
              <p className="font-bold text-2xl md:text-4xl lg:text-5xl mt-2 text-pink-400 drop-shadow">
                20,000+
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
          <img src={pngwing} alt="HeaderImg" className="w-4/5 md:w-2/3 lg:w-full max-w-xl rounded-2xl shadow-2xl border-4 border-blue-300" />
        </div>
      </div>

      <Steps />

      {isModalOpen && (
        <Modal closeModal={closeModal} startQuiz={startQuiz} />
      )}
    </>
  )
}

export default Header
