import Header from "../components/header";

export default function Questions() {
  const questions = [
    {
      question: "Кто это сделал",
      answer: "Я"
    },
    {
      question: "Нафига?",
      answer: "Потому что котики очень милые"
    },
    {
      question: "Какая цель у этого сайта?",
      answer: "Предложить крутых кандидатов на голосование"
    },
    {
      question: "Сколько было заплачено за этот сайт?",
      answer: "Работал за ничего"
    },
    {
      question: "Ты больной?",
      answer: "Yeah, sure"
    },
    {
      question: "Где можно задать больше вопросов?",
      answer: "В личку maskumau"
    }
  ]

  return (
    <div>
      <Header></Header>
      <div className="min-h-[calc(100vh-60px)]">
        <div className="w-full flex justify-center">
          <div className="container  items-center flex flex-col gap-y-2 my-8">
            {questions.map((item, index) => (
              <div key={index} className="w-full rounded-md flex overflow-hidden border border-slate-200">
                <div className="w-[4px]"></div>
                <div className="w-[calc(100%-4px)]">
                  <button className="peer group w-full flex justify-between items-center px-2 sm:px-4 py-2">
                    <span className="text-left text-base sm:text-lg font-semibold mr-1">{item.question}</span>
                    <div>
                      <svg className="w-3 h-3 transition-transform group-focus:-rotate-180" aria-hidden="true" 
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path className="stroke-black" strokeLinecap="round" 
                        strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                      </svg>
                    </div>
                  </button>
                  <div className="grid grid-rows-[0fr] peer-focus:grid-rows-[1fr] peer-focus:pb-2 
                  focus-within:grid-rows-[1fr] focus-within:pb-2 hover:grid-rows-[1fr] hover:pb-2" 
                  style={{
                    transitionDuration: "0.25s",
                    transitionProperty: "grid-template-rows"
                  }}>
                    <div className="ml-2 overflow-hidden text-base text-left">- {item.answer}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}