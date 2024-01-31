import Header from "../components/header";

export default function Candidats() {
  return (
    <div>
      <Header></Header>
      <div className="min-h-[calc(100vh-60px)]">
        <div className="w-full flex justify-center">
          <div className="container lg:min-w-[1024px]">
            <div className="overflow-y-hidden rounded-lg border my-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#007fa3] text-left text-xs font-semibold uppercase tracking-widest text-white">
                      <th className="px-5 pr-3 text-center w-[240px]">Имя</th>
                      <th className="px-5 py-3 text-center w-[180px]">Роль</th>
                      <th className="px-5 py-3 text-center">Предвыборная речь</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-500">
                    <tr>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-full w-full rounded-full" 
                            src="https://t4.ftcdn.net/jpg/00/64/67/27/240_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg" alt="user" />
                          </div>
                          <div className="ml-3">
                            <p className="whitespace-no-wrap">Horfaralice</p>
                          </div>
                        </div>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">Глава ФБР</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <span className="rounded-full px-3 py-1 text-xs font-semibold">Yoo, chill, guys</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-full w-full rounded-full" 
                            src="https://t4.ftcdn.net/jpg/00/64/67/27/240_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg" alt="user" />
                          </div>
                          <div className="ml-3">
                            <p className="whitespace-no-wrap">Calsyfer</p>
                          </div>
                        </div>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">Министр экономики</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <span className="rounded-full px-3 py-1 text-xs font-semibold">Но это не точно</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-full w-full rounded-full" 
                            src="https://t4.ftcdn.net/jpg/00/64/67/27/240_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg" alt="user" />
                          </div>
                          <div className="ml-3">
                            <p className="whitespace-no-wrap">Без понятия кто</p>
                          </div>
                        </div>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">Судья</p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <span className="rounded-full px-3 py-1 text-xs font-semibold">Кота мне в дом, пж</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-white px-5 py-5 text-sm">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-full w-full rounded-full" 
                            src="https://t4.ftcdn.net/jpg/00/64/67/27/240_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg" alt="user" />
                          </div>
                          <div className="ml-3">
                            <p className="whitespace-no-wrap">LuckyBibo</p>
                          </div>
                        </div>
                      </td>
                      <td className="bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap">Глава спавна</p>
                      </td>
                      <td className="bg-white px-5 py-5 text-sm">
                        <span className="rounded-full px-3 py-1 text-xs font-semibold">Бам-бам на**й</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}