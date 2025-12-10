import React from 'react'

const Modal = ({closeModal,startQuiz}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{background:'rgba(2,6,23,0.85)'}}>
      <div className="p-8 md:p-12 rounded-2xl w-full max-w-lg shadow-2xl border-4 border-sky-300 mx-4 theme-card" style={{background:'linear-gradient(135deg,var(--card-from),var(--card-to))'}}>
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-center text-sky-100 drop-shadow">Quiz Instructions</h2>
        <ul className="list-decimal pl-6 text-base md:text-lg space-y-2 text-sky-100 mb-6">
          <li>Each quiz consists of 20 multiple-choice questions.</li>
          <li>Each question has a short timer; try to answer promptly.</li>
          <li>Select the answer you believe is correct for each question.</li>
          <li>You can skip questions and return to them later.</li>
          <li>Your score will be displayed at the end of the quiz.</li>
          <li>Try to answer as many questions correctly as possible!</li>
        </ul>
        <p className="text-center mt-3 text-lg font-semibold text-sky-200">All the best!</p>
        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
          <button onClick={closeModal} className="bg-gray-700 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-gray-600 transition w-full sm:w-auto">Cancel</button>
          <button onClick={startQuiz} className="theme-cta font-bold py-2 px-6 rounded-full shadow transition w-full sm:w-auto" style={{background:'linear-gradient(90deg,var(--cta-from),var(--cta-to))'}}>Are You Ready? Start Quiz</button>
        </div>
        <p className="text-lg text-center mt-6 text-sky-100">
          <span className='underline'>Note:</span> You can only attempt the quiz once per session.
        </p>
      </div>
    </div>
  )
}

export default Modal