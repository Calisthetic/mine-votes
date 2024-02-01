import { Link } from "react-router-dom"
import logo from "./../logo.png"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Header() {
  const [isCopied, setIsCopied] = useState(false)

  function CopyClick() {
    navigator.clipboard.writeText("https://mine-votes.vercel.app/")
    if (!isCopied) {
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 2000);
    }
  }

  return (
    <motion.header initial={{opacity: 0, marginTop: -40}} animate={{opacity: 1, marginTop: 0}} 
    exit={{opacity: 0, marginTop: -40}} transition={{duration: 0.2}}
    className="xl:p-0 flex h-[54px] text-base items-center font-bold shadow-md justify-center fixed w-full z-40 bg-white">
      <div className="flex w-full container items-center justify-center sm:justify-between">
        <div className="flex items-center gap-x-1 sm:gap-x-4">
          <Link to="/" className="hover:bg-slate-100 transition-colors">
            <img src={logo} alt="logo" className="w-10"></img>
          </Link>
          <a href="#questions" className="flex gap-x-2 hover:bg-slate-100 py-2 px-1 sm:px-2 rounded transition-colors">
            Вопросы и ответы
          </a>
          <a href="#candidats" className="flex gap-x-2 hover:bg-red-400 bg-red-500 py-2 px-2 sm:px-4 transition-colors
          text-white font-semibold">
            Кандидаты
          </a>
        </div>
        <button onClick={CopyClick} className=" hidden sm:flex gap-x-2 hover:bg-slate-100 py-2 px-2 rounded transition-colors">
          <div className="overflow-hidden h-6 flex flex-col">
            <div className="h-12 transition-transform" 
            style={{transform: "translate(" + (isCopied ? "0px, 0px" : "0px, -24px") + ")"}}>
              <svg version="1.1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title/><desc/><defs/>
                <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                <g fill="#000000" className=" fill-[#007fa3]" transform="translate(-128.000000, -86.000000)">
                <g transform="translate(128.000000, 86.000000)">
                <path d="M5.9,8.1 L4.5,9.5 L9,14 L19,4 L17.6,2.6 L9,11.2 L5.9,8.1 L5.9,8.1 Z M18,10 C18,14.4 14.4,18 10,18 C5.6,
                18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C10.8,2 11.5,2.1 12.2,2.3 L13.8,0.7 C12.6,0.3 11.3,0 10,0 C4.5,0 0,4.5 0,10 C0,
                15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 L18,10 L18,10 Z"/></g></g></g>
              </svg>
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.496 10.542l2.5-1.459 2.5-1.458m-5 5.833l2.5 1.459 2.5 1.458" stroke="#000" strokeWidth="2"></path>
                <circle cx="6.997" cy="11.997" r="2.333" stroke="#000" strokeWidth="2"></circle>
                <circle cx="16.997" cy="6.165" r="2.333" stroke="#000" strokeWidth="2"></circle>
                <circle cx="16.997" cy="17.833" r="2.333" stroke="#000" strokeWidth="2"></circle>
              </svg>
            </div>
          </div>
          <span>Поделиться</span>
        </button>
      </div>
    </motion.header>
  )
}