import background from "./../background.jpg"
import { useEffect, useState } from "react"
import Header from "../components/header"
import { AnimatePresence } from "framer-motion"
import imgAstromen from "./../candidats/astromen.png"
import imgCalsyfer from "./../candidats/calsyfer.png"
import imgNes from "./../candidats/nes.png"
import imgLuckyBibo from "./../candidats/luckybibo.png"
import "./main.css"

export default function Main() {
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

  const [isHeaderVisible, setIsHeaderVisible] = useState(false)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setIsHeaderVisible(window.scrollY > 10)
    });

    return () => {
      document.removeEventListener("scroll", () => {
        setIsHeaderVisible(window.scrollY > 10)
      });
    }
  })
  
  const questions = [
    {
      question: "Кто это сделал?",
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
      answer: "Работал за еду"
    },
    {
      question: "Сколько стоит место в этом списке?",
      answer: "Бесценно... Только лучшие кандидаты из возможных"
    },
    {
      question: "Где можно задать больше вопросов?",
      answer: "Мне в личку"
    }
  ]

  const candidats = [
    // FBR
    {
      image: imgAstromen,
      nick: "ASTR0men",
      role: (<p className="whitespace-no-wrap text-[#0728e9]">Глава ФБР</p>),
      speech: (
        <div className=" truncated-speech group-focus:block">
          <p>Небольшое вступление - Я являюсь членом фбр уже на протяжении около 4 месяцев и знаю что и как там устроенно и что там нужно менять
          так что говном меня закидывать не надо😜</p>

          <p>Я ASTR0men хочу выступить с своей предвыборной речью и пройтись в ней по таким темам как:</p>

          <p>1)    Достижения правильной выплаты зарплат сотрудникам, а именно регулярной выплаты за заслуги.</p>

          <p>2)    поставка предметов таких как: комплекты фбр, бафы и оружия.</p>

          <p>3)    проведение регулярных тренировок по обучению фбр.</p>

          <p>4)    набор ПОЛЕЗНЫХ для фбр людей. Что бы не получилось как с Ronnpigg или Enarioo.</p>

          <p>Я обещаю что все сказанное в предвыборной речи будет исполнено в том или ином виде.</p>

          <p>С любовью ASTR0men</p>
        </div>
      )
    },
    // Minister
    {
      image: imgCalsyfer,
      nick: "Calsyfer",
      role: (<p className="whitespace-no-wrap text-[#f500a6]">Министр экономики</p>),
      speech: (
        <div className=" truncated-speech group-focus:block">
          <p>Уважаемые игроки нашего сервера!</p>

          <p>Хочу выразить благодарность Maskumau за возможность стать кандидатом на пост министра экономики. </p>

          <p>Приступим к идеям:</p>
          <p>- Во-первых, сбалансировал экономику так ,чтобы у всех игроков были равные возможности на улучшение материального положения. </p>
          <p>- Во-вторых, буду стремиться создать условия для открытия новых стартапов, создания торговых операций и инвестиционных проектов. </p>
          <p>- В-третьих, хочу обратить внимание на налоги, так как некоторые уже имеющиеся, по моему мнению, некорректны. </p>
          <p>- В-четвертых, буду прислушиваться к замечаниям, и постараюсь учитывать ваши предложения. В дополнении, будут созданы собрания для обсуждения, это в свою очередь, помощь в сплочении игроков сервера для решения проблем. </p>

          <p>Всë выше написанное, лишь основы которые дадут толчок в дальнейшее развитие экономики.</p>

          <p>Теперь, немного, обо мне. </p>
          <p>Мне 18 лет. Амбициозный взрослый парень который хочет добиться процветания сервера. Считаю себя адекватным и ответственным человеком, ценю доверие людей. </p>
          <p>Так же, имеется свой город TRELOS, которому отдаю много времени и сил. Онлайн стабильно хороший. </p>
          <p>Имею опыт в этой сфере (управлял экономикой 2-х городов, а также уже играл на подобных серверах). </p>
          <p>А так же, имеется Twich канал "fayzmm", где часто провожу стримы по серверу. </p>

          <p>Хочу сказать заранее спасибо, если вы решите отдать свой голос за меня.</p>
          <p>На все имеющиеся ко мне вопросы отвечу на голосовании в воскресенье.</p>
          <p>Надеюсь на вашу поддержку и доверие. </p>

          <p>С уважением ваш Calsyfer!</p>
        </div>
      )
    },
    // Spawn
    {
      image: imgLuckyBibo,
      nick: "LuckyBibo",
      role: (<p className="whitespace-no-wrap text-[#db984a]">Глава спавна</p>),
      speech: (
        <div className=" truncated-speech group-focus:block !">
          <p>Беседа из ни от куда </p>

          <p>-- Привет, чел! - окликнул Игрок неизвестного.</p>
          <p>-- Привет. - ответил некто.</p>
          <p>-- Слушай, я первый раз зашёл, можешь показать тут всё? - спросил Игрок человека.</p>
          <p>-- Да, не вопрос, пошли - ответил он Игроку.</p>

          <p>~ Гуляют и неизвестный показывает спавн ~</p>

          <p>-- Слушай, прикольно тут у вас, поиграть стоит, а как тебя звать?</p>
          <p>-- А.... Я, LuckyBibo, можешь звать меня Лаки(Lucky), Бибо(Bibo) или Лакибибо(LuckyBibo). - сказал Лаки, но спросил, - А тебя как звать?</p>
          <p>-- Приятно познакомиться. А меня, Игрок. Слушай, а кто ты тут и чем занимаешься? - задал он вопрос, Лаки.</p>
          <p>-- А, сейчас расскажу....</p>

          <p>...Я - кандидат в главу главу спавна, в настоящий момент являющийся, главой "Пиратского Района", так же участник и официальное лицо содружества "Морские Угодья". Также в данный момент со-владелец одноимённого магазина на Аллее. </p>

          <p>В каком-то роде преступник, который вместе с командой устраивал строительные набеги на главное здание "ФБР"(2 раза дракона, на крыше), а так же перекрасил здание администрации в розовый. Без разрешения вышестоящей власти начал и закончил строительство, наверное, одного из самых больших проектов на сервере "OldMemories" и начал строительство нового строения, вблизи спавна. </p>

          <p>Занимаюсь строительством, очень много времени провожу на спавне, стараюсь во благо красоты!</p>

          <p>-- Хорошо. А что хочешь сделать, если победишь на выборах на главу спавна? - спросил Игрок.</p>

          <p>-- Ох... Тут труднее, но мысли есть. Вообще, на мой взгляд, замысел спавна у нас с начала сезона получился на "Ура!", но всё же в связи с уходом "Светка" (бывший глава спавна), развитие главного и всех остальных районов замедлилось. </p>

          <p>Как я уже говорил ранее, что всё что я делаю, во благо красоты! Поэтому, займусь восстановлением всего что было разрушено, в связи с буйствами других игроков сервера и буду заниматься декорированием всех районов, помогать в их развитии главам, а так же частично </p>

          <p>или в полной мере выдавать ресурсы игрокам на постройку того или иного строения. Своевременно выплачивать рабочим их ЗП, за проделанную работу. Творить полную строительную "ахинею", во славу красоте и котикам. Та и в целом, заниматься спавном, доводя его до ума. </p>

          <p>Кстати если у тебя есть идеи по поводу спавна и построек на нём, пиши мне, обсудим! - сказал Лаки.</p>

          <p>-- Офигеть, хорошо, спасибо, если будут идеи, напишу обязательно! Удачи, ЛакиБибо!  - сказал он, а Лаки же ответил - Спасибо и тебе удачи!</p>

          <p>Спасибо за прочтение!</p>
        </div>
      )
    },
    // Sud
    {
      image: "https://cdn.discordapp.com/avatars/550620637266182164/8782d1b3135adba56bfb2e6a7069d982.webp?size=80",
      nick: "DagenhardRash",
      role: (<p className="whitespace-no-wrap text-[#9b1b51]">Судья</p>),
      speech: (
        <div className=" truncated-speech group-focus:block">
          <p>На сервере я совсем неизвестная личность по простой причине — я недавний игрок. Однако, также не успевший никому досадить, думаю, это уже чего-то да стоит.</p>

          <p>— Наверное частый онлайн это один из важных факторов, в игре я почти каждый день по часу, иногда больше. В Дискорде же практически все сутки.</p>

          <p>— Что касается отношения к игрокам, будучи недавним игроком, я не могу быть предвзятым человеком... да вообще ни к кому. Наверное тот факт, что мы с вами не знакомы — это даже хорошо. </p>

          <p>— Хотелось бы сделать некоторые моменты строже, но при этом с грамотным объяснением наказаний. Кто участвовал в недавнем ивенте, наверное помнят все конфликты и пару всплывших проблем с непониманием друг друга (или некоторые любят прикидываться, что не понимают вторую сторону).</p>

          <p>В общем, я человек спокойный, но когда придётся — строгий; умеющий слушать, а так же игнорировать, когда это требуется; умеющий спорить, анализировать и дискуссировать, если границы правил и морали размываются.</p>

          <p>Если говорить о правилах, мне никогда не понять фразы "Я не знал, что этого делать нельзя", первое и последнее  правило сервера номер 13 — "В первую очередь сервер строится на взаимоуважении...".
          Это правило УЖЕ включает в себя остальные, как: не гриферить, не воровать, не разглашать информацию и т.д. незачем перечислять остальной список.
          А всё что касается именно этого канал-дискорда, это отдельная сеть правил. И на все правила нужно опираться перед заявлением вердикта.</p>

          <p>Я не думаю, что могу влиять на атмосферу сервера, на его внутренние дела, я лишь могу разрешать конфликты, выслушивая аргументы. Единственное, хотелось бы добавить строгости. Я хочу, просто сделать всё грамотно. За организованность сервера, всё же должны быть ответственными ФБР. Это не значит, что всё нужно взвалить на них, суду с ними нужно сотрудничать.</p>

          <p>Это можно расписывать очень долго, считайте, текст сокращён. Моя позиция ясна, и если кто-то согласен, прошу подарить голос. Спасибо за прочтение, если вообще дочитали до конца.</p>
        </div>
      )
    },
    {
      image: "https://cdn.discordapp.com/avatars/927515106370269195/d791e90063d842d7936537253ed53835.webp?size=80",
      nick: "Begulo4ka",
      role: (<p className="whitespace-no-wrap text-[#9b1b51]">Судья</p>),
      speech: (
        <div className=" truncated-speech group-focus:block">
          <p>Я хочу сделать сервер чуть-чуть строже в плане правил чтобы всем игрокам (а также стримерам)было комфортно играть на данном проекте.</p>
          <p>1) Наверняка многие заметили что на сервере довольно часто творится беспорядок,грабежи у игроков,гриферсво и т.д.Я направляю свои усилия на решение этих проблем и создание справедливой и независимой системы правосудия</p>
          <p>2) В жалобы будет запрещено отправлять рофл или же тупые жалобы(тупые в плане: меня ударили рукой теперь я обижен(а) пусть платит миллиард аров)</p>
          <p>3) Справедливость должна быть доступной для всех, независимо от их положения в обществе, дохода или социального статуса. При рассмотрении дел, я буду придерживаться независимости, непредвзятости и объективности.</p>
          <p>4) Сделать определённое значение мута/бана за нарушение правил,если меня выберут судьёй, то за практическое любое нарушение правил будет 100% выдан мут/штраф в зависимости от степени нарушения</p>

          <p>Благодарю вас за внимание и надеюсь на вашу поддержку!</p>
        </div>
      )
    }
  ]

  return (
    <>
      <AnimatePresence>
        {isHeaderVisible && (<Header></Header>)}
      </AnimatePresence>
      <div className="relative">
        <img src={background} alt="background" 
        className="-mx-[50vw] opacity-0 sm:-mx-[25vw] md:mx-0 min-w-[200vw] sm:min-w-[150vw] md:min-w-[100vw]"></img>
        <img src={background} alt="background" 
        className="fixed -z-10 top-0 left-0 -mx-[50vw] sm:-mx-[25vw] md:mx-0 min-w-[200vw] sm:min-w-[150vw] md:min-w-[100vw]"></img>
        <div className=" absolute top-0 left-0 bg-black/50 w-full h-full flex items-center justify-center
        text-white font-bold text-xl sm:text-3xl flex-col">
          <div className="flex flex-col gap-y-1.5">
            <p className="flex flex-col text-centers">
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
            <a href="#candidats" className=" bg-red-500 text-white px-6 sm:px-8 py-2 text-base hover:bg-red-400 transition-colors">
              Найти кандидата
            </a>
          </div>
        </div>
      </div>
      <div id="candidats" className="bg-white w-full py-2 font-bold text-xl sm:text-2xl md:text-3xl flex items-center flex-col">
        <div className="container flex justify-start">
          <p className=" font-bold text-xl pl-2 sm:text-2xl md:text-3xl mt-4">
            <span>Голосуйте за наших</span>
            <span className="text-red-500 ml-1 sm:ml-2">кандидатов</span>
          </p>
        </div>
        <div className="container lg:min-w-[900px]">
          <div className="overflow-y-hidden sm:rounded-lg border my-2">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#007fa3] text-left text-xs font-semibold uppercase tracking-widest text-white">
                    <th className="px-5 pr-3 text-center w-[160px]">Ник</th>
                    <th className="px-5 py-3 text-center w-[120px]">Роль</th>
                    <th className="px-5 py-3 text-center min-w-[320px]">Предвыборная речь</th>
                  </tr>
                </thead>
                <tbody className="text-gray-500">
                  {candidats.map((item, index) => (
                    <tr key={index}>
                      <td className="border-b border-gray-200 bg-white px-2 py-2 text-sm align-top">
                        <div className="flex items-center">
                          <div className="h-12 w-12 flex-shrink-0">
                            <img className="h-full w-full rounded-full" src={item.image} alt={item.nick} />
                          </div>
                          <div className="ml-2">
                            <p className="whitespace-no-wrap">{item.nick}</p>
                          </div>
                        </div>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-2 py-2 text-sm align-top">
                        <div className="h-12 flex items-center justify-center">
                          {item.role}
                        </div>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-4 py-2 text-sm">
                        <button className="px-3 py-1 text-xs group font-semibold text-justify indent-4 hover:underline 
                        child:pointer-events-none focus:no-underline" 
                        title="Нажмите, чтобы раскрыть">
                          {item.speech}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="container flex justify-start mb-4 mt-2">
          <div className=" font-normal text-sm px-2 indent-4 text-justify">
            <p>
              Дорогие участники сервера Old Memories, сегодня предоставилась уникальная возможность 
              представить вам несколько изумительных кандидатов, за которых вы можете отдать свой голос.
            </p>
            <p>
              За кого голосовать решать только Вам, однако по мнению редакции именно эти кандидаты являются наиболее подходящими для выбранных должностей.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col bg-[#e7f6fa]">
        <div className="my-6 container text-left">
          <p className=" font-bold text-xl pl-2 sm:text-2xl md:text-3xl">Этапы голосования</p>
          <ol className="relative text-gray-500 ml-6 sm:ml-2 border-s mt-4 border-gray-200 child:text-left">                  
            {/* <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white">
                <svg className="w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
              </span>
              <h3 className="font-medium leading-tight">Personal Info</h3>
              <p className="text-sm">Любой желающий сможет подать заявку на интересующую должность</p>
            </li> */}
            <li className="mb-10 ms-6">
              {/* <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white">
                <svg className="w-3.5 h-3.5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
                </svg>
              </span> */}
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-[#e7f6fa]">
                <svg className="w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
              </span>
              <h3 className="font-medium leading-tight">1 ЭТАП</h3>
              <p className="text-sm">Любой желающий сможет подать заявку на интересующую должность</p>
            </li>
            <li className="mb-10 ms-6">
              {/* <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white">
                <svg className="w-3.5 h-3.5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>
              </span> */}
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-[#e7f6fa]">
                <svg className="w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
              </span>
              <h3 className="font-medium leading-tight">2 ЭТАП</h3>
              <p className="text-sm">Все кандидаты смогут составить свои предвыборные компании</p>
            </li>
            <li className="ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-slate-200 rounded-full -start-4 ring-4 ring-[#e7f6fa]">
                <svg className="w-3.5 h-3.5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
                </svg>
              </span>
              <h3 className="font-medium leading-tight">3 ЭТАП</h3>
              <p className="text-sm">День проведения дебатов и голосования</p>
            </li>
          </ol>
        </div>
      </div>
      <div id="questions" className="bg-white w-full py-2 font-bold text-xl sm:text-2xl md:text-3xl flex justify-center">
        <div className="flex flex-col container px-2 sm:px-0 items-start gap-y-2 my-4">
          <p className=" font-bold text-xl sm:text-2xl md:text-3xl">Остались вопросы?</p>
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
                  <div className="ml-2 overflow-hidden text-base text-left font-normal">- {item.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#e7f6fa] w-full py-2 font-bold text-xl sm:text-2xl md:text-3xl flex justify-center">
        <div className="py-4 px-2 flex flex-col container items-start">
          <p>Распространите</p>
          <p>
            <span className=" text-red-600">Без</span>
            <span>умное</span>
            <span className="ml-1 md:ml-2 text-[#007fa3]">голосование</span>
          </p>
          <div className="child:flex child:justify-center flex flex-col sm:flex-row sm:gap-x-2 child:py-2 
          child:px-2 sm:child:px-4 text-nowrap">
            <button type="button" className="border-2 border-[#007fa3] text-[#007fa3] transition-all flex hover:text-white
            hover:strokeWhite stroke-[#007fa3] bg-inherit hover:bg-[#007fa3] mt-2 justify-center 
            hover:child:fill-white child:fill-[#007fa3] group"
            onClick={CopyClick}>
              <div className="overflow-hidden h-6 flex flex-col">
                <div className="h-12 transition-transform" 
                style={{transform: "translate(" + (isCopied ? "0px, 0px" : "0px, -24px") + ")"}}>
                  <svg version="1.1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title/><desc/><defs/>
                    <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                    <g transform="translate(-128.000000, -86.000000)">
                    <g className=" group-hover:fill-white fill-[#007fa3]" transform="translate(128.000000, 86.000000)">
                    <path d="M5.9,8.1 L4.5,9.5 L9,14 L19,4 L17.6,2.6 L9,11.2 L5.9,8.1 L5.9,8.1 Z M18,10 C18,14.4 14.4,18 10,18 C5.6,
                    18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C10.8,2 11.5,2.1 12.2,2.3 L13.8,0.7 C12.6,0.3 11.3,0 10,0 C4.5,0 0,4.5 0,10 C0,
                    15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 L18,10 L18,10 Z"/></g></g></g>
                  </svg>
                  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.496 10.542l2.5-1.459 2.5-1.458m-5 5.833l2.5 1.459 2.5 1.458" strokeWidth="2"></path>
                    <circle cx="6.997" cy="11.997" r="2.333" strokeWidth="2"></circle>
                    <circle cx="16.997" cy="6.165" r="2.333" strokeWidth="2"></circle>
                    <circle cx="16.997" cy="17.833" r="2.333" strokeWidth="2"></circle>
                  </svg>
                </div>
              </div>
              <span className="text-base ml-1 sm:ml-2 text-wrap sm:text-nowrap">Рассказать про Безумное голосование</span>
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