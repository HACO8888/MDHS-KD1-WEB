import './index.css'
import 'react-slideshow-image/dist/styles.css'
import React from "react"


export default function Home() {

    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        if (window.location.href.indexOf("k1d1.haco.tw") > -1) {
            setShow(!show)
        } else if (window.location.href.indexOf("test.haco.tw") > -1) {
            setShow(!show)
        } else if (window.location.href.indexOf("localhost") > -1) {
            setShow(!show)
        }
    }, []);


    return (
        <div className="select-none">
            <br />
            <div id="toast-warning" className={"m-[auto] flex items-center p-4 w-full max-w-[25rem] text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" + (show ? "" : " hidden")} role="alert">
                <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">警告標誌</span>
                </div>
                <div className="ml-3 text-sm font-normal">本網站已移至 kd1.haco.tw&emsp;&emsp;&emsp;&emsp;<a className="text-blue-200" href='https://kd1.haco.tw'>點擊前往</a></div>
                <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-warning" aria-label="Close" onClick={() => setShow(!show)}>
                    <span className="sr-only">關閉</span>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <br />
            <br />
            <h1 className='text-4xl'>很明顯這是個首頁</h1>
            <br />
            <br />
            <a href='/course'><button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:w-[25%] w-[80%] h-20">點我查看課表</button></a>
            <a href='/people'><button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:w-[25%] w-[80%] h-20">點我查看人物</button></a>
            <br />
            <a href='/note'><button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:w-[25%] w-[80%] h-20">點我查看筆記</button></a>
            <a href='/test'><button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:w-[25%] w-[80%] h-20">點我查看測試</button></a>
        </div>
    )
}