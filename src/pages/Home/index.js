import './index.css'
import React from "react"
import axios from "axios";


export default function Home() {


    const [show, setShow] = React.useState(false);
    const [anns, setAnns] = React.useState([{ 'ID': 'No Data', 'Title': 'No Data', 'Content': 'No Data' }]);

    React.useEffect(() => {
        if (window.location.href.indexOf("k1d1.haco.tw") > -1) {
            setShow(!show)
        } else if (window.location.href.indexOf("test.haco.tw") > -1) {
            setShow(!show)
        } else if (window.location.href.indexOf("localhost") > -1) {
            setShow(!show)
        }
        axios
            .get('https://api.kd1.haco.tw/announcements')
            .then((response) => {
                if (response.data !== undefined) {
                    setAnns(response.data);
                }
            });
        // eslint-disable-next-line
    }, []);

    const Html = [];
    for (var i = 0; i < anns.length; i++) {
        Html.push(
            <tr className="bg-cyan-500">
                {/* <th scope="row" className="py-5 px-6">
                    {anns[i].ID}
                </th> */}
                <td className="py-5 px-6">
                    {anns[i].Title}
                </td>
                <td className="py-7 px-6 hidden md:inline-flex align-center">
                    {anns[i].Content.slice(0, 20)}
                </td>
                <td className="py-5 px-6">
                    <a href={"#/announcement/" + anns[i].ID} className="font-medium text-white underline">
                        <button className='bg-cyan-600 hover:bg-cyan-700 rounded-lg px-2 py-2'>
                            完整內容
                        </button>
                    </a>
                </td>
            </tr>
        );
    }

    return (
        <div className="select-none">
            <div className={"bg-cyan-600" + (show ? "" : " hidden")}>
                <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex w-0 flex-1 items-center">
                            <span className="flex rounded-lg bg-cyan-800 p-2">
                                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                                </svg>
                            </span>
                            <p className="ml-3 truncate font-medium text-white">
                                <span className="md:hidden">本站已移至 kd1.haco.tw，將於10/31移除！</span>
                                <span className="hidden md:inline text-xl ">本站已移至 kd1.haco.tw，預計於民國111年10月31日移除本站！</span>
                            </p>
                        </div>
                        <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                            <a href="https://kd1.haco.tw/" className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-cyan-50 text-black">移至新站</a>
                        </div>
                        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                            <button type="button" className="-mr-1 flex rounded-md p-2 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2" onClick={() => setShow(!show)}>
                                <span className="sr-only">關閉</span>
                                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <h1 className='text-4xl'>最新公告</h1>
            <br />
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-[100%] md:w-[60%] ml-[0%] md:ml-[20%]">
                <table className="w-full text-sm text-left text-white">
                    <thead className="text-xs uppercase bg-cyan-800 text-white">
                        <tr>
                            {/* <th scope="col" className="py-3 px-6">
                                ID
                            </th> */}
                            <th scope="col" className="py-3 px-6">
                                標題
                            </th>
                            <th scope="col" className="py-3 px-6 hidden md:inline-flex">
                                內容
                            </th>
                            <th scope="col" className="py-3 px-6">
                                查看
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Html}
                    </tbody>
                </table>
            </div>
            <br />
            <br />
            <br />
            <h1 className='text-4xl'>常用連結</h1>
            <br />
            <a href='/course'><button type="button" className="text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:w-[15%] w-[40%] h-20">課表</button></a>
            <a href='/people'><button type="button" className="text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:w-[15%] w-[40%] h-20">人物</button></a>
            <a href='/note'><button type="button" className="text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:w-[15%] w-[40%] h-20">筆記</button></a>
            <a href='/test'><button type="button" className="text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:w-[15%] w-[40%] h-20">測試</button></a>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}