const stepsData = [
  {
    step: "Step 1",
    title: "Choose Your Quiz",
    description:
      "Browse through a variety of quiz topics and select the one that interests you the most.",
  },
  {
    step: "Step 2",
    title: "Read Instructions",
    description:
      "Carefully read the quiz instructions to understand the rules and time limits before starting.",
  },
  {
    step: "Step 3",
    title: "Start the Quiz",
    description:
      "Click the 'Start Quiz' button to begin answering questions and test your knowledge!",
  },
  {
    step: "Step 4",
    title: "Review Results",
    description:
      "After completing the quiz, review your answers and see your score to track your progress.",
  },
  {
    step: "Step 5",
    title: "Share & Compete",
    description:
      "Share your results with friends and challenge them to beat your score for some friendly competition!",
  },
];

const Steps = () => {
  return (
    <section className="w-full py-14 border-t border-sky-300 mb-8" style={{background:'linear-gradient(180deg,var(--bg-900),var(--bg-700))'}}>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-sky-100 drop-shadow underline">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {stepsData.map((step, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl shadow-xl flex flex-col items-center border-2 border-sky-300 theme-card"
              style={{background:'linear-gradient(90deg,var(--card-from),var(--card-to))'}}
              >
              <div className="bg-white text-sky-700 border-2 border-sky-300 rounded-full w-14 h-14 flex items-center justify-center mb-6 font-extrabold text-2xl shadow-lg">
                {index + 1}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-sky-100 mb-2">{step.title}</h3>
              <p className="text-sky-100 text-center text-lg md:text-xl">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
