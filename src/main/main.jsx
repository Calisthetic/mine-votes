import { Link } from "react-router-dom"
import background from "./../background.jpg"

export default function Main() {
  return (
    <>
      <div className="relative">
        <img src={background} alt="background" className="-mx-[50vw] sm:-mx-[25vw] md:mx-0 min-w-[200vw] sm:min-w-[150vw] md:min-w-[100vw]"></img>
        <div className=" absolute top-0 left-0 bg-black/50 w-full h-full flex items-center justify-center
        text-white font-bold text-xl sm:text-3xl flex-col">
          <div>
            <p className="flex flex-col text-centers mb-2">
              <span>Март 2024 года -</span>
              <span>выборы на должности:</span>
            </p>
            <ul className=" list-disc underline text-left text-base ml-8 
            text-gray-200 child-hover:text-white child:transition-colors child:max-w-min child:whitespace-nowrap">
              <li>
                <a href="https://docs.google.com/forms/d/1HSrsHqX_mM6ZRQubwx3KwBZDwwIG8wLr9XGe5ibZLo0/edit">Глава ФБР</a>
              </li>
              <li>
                <a href="https://docs.google.com/forms/d/12egkBI1460tNWkxZUzu2j6lrXQAxTc6BglMraVoxliQ/edit">Министр экономики</a>
              </li>
              <li>
                <a href="https://docs.google.com/forms/d/1dPbDziCU6-5WO9xJwPj64AOIyj1IRmVM85ADspIVM2w/edit">Судья х2</a>
              </li>
              <li>
                <a href="https://docs.google.com/forms/d/1NYRcSbfL8jF-yu6aVlqksRGZs2JV-tTH_-R7KUn3NG4/edit">Глава спавна</a>
              </li>
            </ul>
            <Link to="candidats" className=" bg-red-500 text-white px-6 sm:px-8 py-2 text-base mt-4 hover:bg-red-400 transition-colors">
              Найти кандидата
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <div className="my-6 container text-left">
          <p className=" font-bold text-xl pl-2 sm:text-2xl md:text-3xl">Предстоящие этапы</p>
          <ol className="relative text-gray-500 ml-2 border-s mt-4 border-gray-200 child:text-left">                  
            {/* <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white">
                <svg className="w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
              </span>
              <h3 className="font-medium leading-tight">Personal Info</h3>
              <p className="text-sm">Любой желающий сможет подать заявку на интересующую должность</p>
            </li> */}
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white">
                <svg className="w-3.5 h-3.5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
                </svg>
              </span>
              <h3 className="font-medium leading-tight">1 ЭТАП</h3>
              <p className="text-sm">Любой желающий сможет подать заявку на интересующую должность</p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white">
                <svg className="w-3.5 h-3.5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>
              </span>
              <h3 className="font-medium leading-tight">2 ЭТАП</h3>
              <p className="text-sm">Все кандидаты смогут составить свои предвыборные компании</p>
            </li>
            <li className="ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white">
                <svg className="w-3.5 h-3.5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
                </svg>
              </span>
              <h3 className="font-medium leading-tight">3 ЭТАП</h3>
              <p className="text-sm">День проведения дебатов и голосования</p>
            </li>
          </ol>
          <p className="mt-6 text-xl font-bold">
            <span className=" text-red-600 mr-2 text-2xl">!!!</span>
            <span>После первого этапа будут выложены рекомендации</span>
          </p>
          <Link to="/questions" type="button" className="bg-red-500 text-white transition-all flex
          fill-white hover:bg-red-400 mt-4 px-4 py-2 max-w-fit font-semibold">
            <svg viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"><g>
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 
              0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 
              0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z"/></g>
            </svg>
            <span className="text-base ml-2">Остались вопросы?</span>
          </Link>
        </div>
      </div>
      <div className="bg-[#e7f6fa] w-full mt-4 font-bold text-xl sm:text-2xl md:text-3xl flex justify-center">
        <div className="py-4 px-2 flex flex-col container items-start">
          <p>Распространите</p>
          <p>
            <span className=" text-red-600">Без</span>
            <span>умное</span>
            <span className="ml-1 md:ml-2 text-[#007fa3]">голосование</span>
          </p>
          <div className="child:flex child:justify-center flex flex-col md:flex-row md:gap-x-2 child:py-2 child:px-6 text-nowrap">
            <button type="button" className="border-2 border-[#007fa3] text-[#007fa3] transition-all flex hover:text-white
            hover:stroke-white stroke-[#007fa3] bg-inherit hover:bg-[#007fa3] mt-2">
              <svg width="18" height="20" fill="none" className="" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.496 8.542l2.5-1.459 2.5-1.458m-5 5.833l2.5 1.459 2.5 1.458" strokeWidth="2"></path>
                <circle cx="3.997" cy="9.997" r="2.333" strokeWidth="2"></circle>
                <circle cx="13.997" cy="4.165" r="2.333" strokeWidth="2"></circle>
                <circle cx="13.997" cy="15.833" r="2.333" strokeWidth="2"></circle>
              </svg>
              <span className="text-base ml-2">Рассказать про Безумное голосование</span>
            </button>
            <a href="https://discord.com/channels/@me" target="_blank" rel="noreferrer"
            className="border-2 border-[#4d5af0] text-[#4d5af0] transition-all flex hover:text-white
            hover:fill-white fill-[#4d5af0] py-2 px-6 bg-inherit hover:bg-[#4d5af0] mt-2">
              <svg viewBox="0 0 640 512" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,
                0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,
                0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,
                0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,
                0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,
                321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,
                1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,
                4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,
                2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,
                1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,
                0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,
                310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,
                219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>
              </svg>
              <span className="text-base ml-2">Поделиться в дискорд</span>
            </a>
          </div>
          <p className=" text-base font-normal text-slate-600 mt-2 mb-1">Ⓒ Created by myself</p>
        </div>
      </div>
    </>
  )
}