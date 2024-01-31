import { Link } from "react-router-dom"
import logo from "./../logo.png"

export default function Header() {
  return (
    <header className="xl:p-0 flex h-15 text-base items-center font-bold shadow-md justify-center">
      <div className="flex w-full container items-center justify-between lg:min-w-[1024px]">
        <div className="flex items-center gap-x-2">
          <Link to="/">
            <img src={logo} alt="logo" className="w-10"></img>
          </Link>
          <Link to="/questions" className="flex gap-x-2 hover:bg-slate-100 py-1 px-2 rounded transition-colors">
            Вопросы и ответы
          </Link>
        </div>
        <button className="flex gap-x-2 hover:bg-slate-100 py-1 px-2 rounded transition-colors">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.496 10.542l2.5-1.459 2.5-1.458m-5 5.833l2.5 1.459 2.5 1.458" stroke="#000" strokeWidth="2"></path>
            <circle cx="6.997" cy="11.997" r="2.333" stroke="#000" strokeWidth="2"></circle>
            <circle cx="16.997" cy="6.165" r="2.333" stroke="#000" strokeWidth="2"></circle>
            <circle cx="16.997" cy="17.833" r="2.333" stroke="#000" strokeWidth="2"></circle>
          </svg>
          <span>Поделиться</span>
        </button>
      </div>
    </header>
  )
}