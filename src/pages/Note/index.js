import './index.css';
import axios from "axios";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function Note() {
    const [publicShow, setPublicShow] = useState(false);
    // const [privateShow, setPrivateShow] = useState(false);
    const [isBigScreen, setIsBigScreen] = React.useState(getWindowDimensions().width > 930);
    const [notes, setNotes] = React.useState([{ "ID": "No Data", "Title": "No Data", "Content": "No Data", "Type": "No Data" }]);
    const [notes2, setNotes2] = React.useState(null);

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    React.useEffect(() => {
        axios
            .get('https://api.kd1.haco.tw/public-note?r=count')
            .then((response) => {
                if (response.data !== undefined) {
                    if (response.data % 3 === 0) {
                        axios
                            .get('https://api.kd1.haco.tw/public-notes')
                            .then((response2) => {
                                setNotes(response2.data)
                                setNotes2(null)
                            });
                    } else if (response.data % 3 === 1) {
                        axios
                            .get('https://api.kd1.haco.tw/public-note?r=limit&limit=' + (response.data - 1))
                            .then((response2) => {
                                setNotes(response2.data.note1)
                                setNotes2(response2.data.note2)
                            });
                    } else if (response.data % 3 === 2) {
                        axios
                            .get('https://api.kd1.haco.tw/public-note?r=limit&limit=' + (response.data - 2))
                            .then((response2) => {
                                setNotes(response2.data.note1)
                                setNotes2(response2.data.note2)
                            });
                    }
                }
            });
        function handleResize() {
            setIsBigScreen(getWindowDimensions().width > 1024);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const Html = [];
    if (notes2 === null) {
        for (var i = 1; i < notes.length; i += 3) {
            Html.push(
                <>
                    <div className={'md:flex align-middle text-center' + (isBigScreen ? ' md:w-[70%] md:ml-[15%]' : ' md:w-[95%] md:ml-[2.5%]')}>
                        <div className="rounded-lg border shadow-md bg-gray-800 border-gray-700 md:flex-auto md:max-w-[32%] ">
                            <img className="rounded-t-lg" src="/pictures/920x613.jpg" alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{notes[i - 1].Title.slice(0, 11)}</h5>
                                <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400 h-[100px] break-all overflow-ellipsis overflow-hidden text-left">{notes[i - 1].Content}</p>
                                <div className="p-2 border-gray-600 select-none w-[100%]">
                                    <a><button className="w-full text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg text-base px-5 py-2.5 text-center disabled:opacity-40 disabled:bg-cyan-600 disabled:hover:bg-cyan-600" disabled={((notes[i - 1].Content.length > 110) ? false : true)}>繼續閱讀</button></a>
                                </div>
                            </div>
                        </div>
                        <br className='md:hidden' />
                        <div className="rounded-lg border shadow-md bg-gray-800 border-gray-700 md:flex-auto md:ml-[2%] md:mr-[2%] md:max-w-[32%]">
                            <img className="rounded-t-lg" src="/pictures/920x613.jpg" alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{notes[i].Title.slice(0, 11)}</h5>
                                <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400 h-[100px] break-all overflow-ellipsis overflow-hidden text-left">{notes[i].Content}</p>
                                <div className="p-2 border-gray-600 select-none w-[100%]">
                                    <a><button className="w-full text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg text-base px-5 py-2.5 text-center disabled:opacity-40 disabled:bg-cyan-600 disabled:hover:bg-cyan-600" disabled={((notes[i].Content.length > 110) ? false : true)}>繼續閱讀</button></a>
                                </div>
                            </div>
                        </div>
                        <br className='md:hidden' />
                        <div className="rounded-lg border shadow-md bg-gray-800 border-gray-700 md:flex-auto md:max-w-[32%]">
                            <img className="rounded-t-lg" src="/pictures/920x613.jpg" alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{notes[i + 1].Title.slice(0, 11)}</h5>
                                <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400 h-[100px] break-all overflow-ellipsis overflow-hidden text-left">{notes[i + 1].Content}</p>
                                <div className="p-2 border-gray-600 select-none w-[100%]">
                                    <a><button className="w-full text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg text-base px-5 py-2.5 text-center disabled:opacity-40 disabled:bg-cyan-600 disabled:hover:bg-cyan-600" disabled={((notes[i + 1].Content.length > 110) ? false : true)}>繼續閱讀</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </>
            );
        }
    } else {
        for (var i = 0; i < notes.length; i += 3) {
            Html.push(
                <>
                    <div className={'md:flex align-middle text-center' + (isBigScreen ? ' md:w-[70%] md:ml-[15%]' : ' md:w-[95%] md:ml-[2.5%]')}>
                        <div className="rounded-lg border shadow-md bg-gray-800 border-gray-700 md:flex-auto md:max-w-[32%] ">
                            <img className="rounded-t-lg" src="/pictures/920x613.jpg" alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{notes[i].Title.slice(0, 11)}</h5>
                                <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400 h-[100px] break-all overflow-ellipsis overflow-hidden text-left">{notes[i].Content}</p>
                                <div className="p-2 border-gray-600 select-none w-[100%]">
                                    <a><button className="w-full text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg text-base px-5 py-2.5 text-center disabled:opacity-40 disabled:bg-cyan-600 disabled:hover:bg-cyan-600" disabled={((notes[i].Content.length > 110) ? false : true)}>繼續閱讀</button></a>
                                </div>
                            </div>
                        </div>
                        <br className='md:hidden' />
                        <div className="rounded-lg border shadow-md bg-gray-800 border-gray-700 md:flex-auto md:ml-[2%] md:mr-[2%] md:max-w-[32%]">
                            <img className="rounded-t-lg" src="/pictures/920x613.jpg" alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{notes[i + 1].Title.slice(0, 11)}</h5>
                                <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400 h-[100px] break-all overflow-ellipsis overflow-hidden text-left">{notes[i + 1].Content}</p>
                                <div className="p-2 border-gray-600 select-none w-[100%]">
                                    <a><button className="w-full text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg text-base px-5 py-2.5 text-center disabled:opacity-40 disabled:bg-cyan-600 disabled:hover:bg-cyan-600" disabled={((notes[i + 1].Content.length > 110) ? false : true)}>繼續閱讀</button></a>
                                </div>
                            </div>
                        </div>
                        <br className='md:hidden' />
                        <div className="rounded-lg border shadow-md bg-gray-800 border-gray-700 md:flex-auto md:max-w-[32%]">
                            <img className="rounded-t-lg" src="/pictures/920x613.jpg" alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{notes[i + 2].Title.slice(0, 11)}</h5>
                                <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400 h-[100px] break-all overflow-ellipsis overflow-hidden text-left">{notes[i + 2].Content}</p>
                                <div className="p-2 border-gray-600 select-none w-[100%]">
                                    <a><button className="w-full text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg text-base px-5 py-2.5 text-center disabled:opacity-40 disabled:bg-cyan-600 disabled:hover:bg-cyan-600" disabled={((notes[i + 2].Content.length > 110) ? false : true)}>繼續閱讀</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </>
            );
        }
        if (notes2.length === 1) {
            Html.push(
                <>
                    <div className={'md:flex align-middle text-center' + (isBigScreen ? ' md:w-[70%] md:ml-[15%]' : ' md:w-[95%] md:ml-[2.5%]')}>
                        <div className="rounded-lg border shadow-md bg-gray-800 border-gray-700 md:flex-auto md:max-w-[32%] ">
                            <img className="rounded-t-lg" src="/pictures/920x613.jpg" alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{notes2[0].Title.slice(0, 11)}</h5>
                                <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400 h-[100px] break-all overflow-ellipsis overflow-hidden text-left">{notes2[0].Content}</p>
                                <div className="p-2 border-gray-600 select-none w-[100%]">
                                    <a><button className="w-full text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg text-base px-5 py-2.5 text-center disabled:opacity-40 disabled:bg-cyan-600 disabled:hover:bg-cyan-600" disabled={((notes2[0].Content.length > 110) ? false : true)}>繼續閱讀</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </>
            )
        } else if (notes2.length === 2) {
            Html.push(
                <>
                    <div className={'md:flex align-middle text-center' + (isBigScreen ? ' md:w-[70%] md:ml-[15%]' : ' md:w-[95%] md:ml-[2.5%]')}>
                        <div className="rounded-lg border shadow-md bg-gray-800 border-gray-700 md:flex-auto md:max-w-[32%] ">
                            <img className="rounded-t-lg" src="/pictures/920x613.jpg" alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{notes2[1].Title.slice(0, 11)}</h5>
                                <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400 h-[100px] break-all overflow-ellipsis overflow-hidden text-left">{notes2[1].Content}</p>
                                <div className="p-2 border-gray-600 select-none w-[100%]">
                                    <a><button className="w-full text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg text-base px-5 py-2.5 text-center disabled:opacity-40 disabled:bg-cyan-600 disabled:hover:bg-cyan-600" disabled={((notes2[1].Content.length > 110) ? false : true)}>繼續閱讀</button></a>
                                </div>
                            </div>
                        </div>
                        <br className='md:hidden' />
                        <div className="rounded-lg border shadow-md bg-gray-800 border-gray-700 md:flex-auto md:ml-[2%] md:mr-[2%] md:max-w-[32%]">
                            <img className="rounded-t-lg" src="/pictures/920x613.jpg" alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{notes2[0].Title.slice(0, 11)}</h5>
                                <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400 h-[100px] break-all overflow-ellipsis overflow-hidden text-left">{notes2[0].Content}</p>
                                <div className="p-2 border-gray-600 select-none w-[100%]">
                                    <a><button className="w-full text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg text-base px-5 py-2.5 text-center disabled:opacity-40 disabled:bg-cyan-600 disabled:hover:bg-cyan-600" disabled={((notes2[0].Content.length > 110) ? false : true)}>繼續閱讀</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </>
            )
        }
    }

    return (
        <div className="select-none">
            <br />
            <h1 className='text-5xl'>班級記事</h1>
            <br />
            <Button className="text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 w-[auto] h-15" onClick={() => setPublicShow(!publicShow)}>
                新增共享筆記
            </Button>
            <Button className="text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 w-[auto] h-15 disabled:opacity-50 disabled:hover:bg-cyan-600" onClick={NotReady} disabled>
                新增私人筆記
            </Button>
            <br />
            <br />
            { /* Cards Here Start*/}

            {Html}
            <br />
            { /* Cards Here End*/}
            <div tabIndex="-1" aria-hidden="true" className={"modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-30" + (publicShow ? "" : " hidden")}>
                <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                <div className="modal-container w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                    <div className="relative bg-slate-900 rounded-lg shadow">
                        <div className="flex justify-between items-center p-5 rounded-t border-b select-none">
                            <h3 className="text-xl font-medium text-white">
                                感謝您新增本班共享筆記內容
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white" data-modal-toggle="medium-modal" onClick={() => setPublicShow(!publicShow)}>
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">關閉</span>
                            </button>
                        </div>
                        <div className="space-y-5">
                            <form action="https://api.kd1.haco.tw/public-note" method='post'>
                                <div className="p-6 space-y-5" >
                                    <div>
                                        <label htmlFor="type" className="text-xl block mb-2 font-medium ext-white">筆記類型</label>
                                        <select name="type" id="type" className="border text-lg rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 text-white appearance-none ">
                                            <option value="none" defaultValue className="bg-gray-700">請選擇類型</option>
                                            <option value="learn" className="bg-gray-700">學習</option>
                                            <option value="meme" className="bg-gray-700">迷因</option>
                                            <option value="monkey" className="bg-gray-700">猴子</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="title" className="text-xl block mb-2 font-medium ext-white">筆記標題</label>
                                        <input name="title" id="title" className="text-left border text-lg rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="請輸入您要提交的標題" maxLength="11" required />
                                    </div>
                                    <div>
                                        <label htmlFor="content" className="block mb-2 text-xl font-medium text-white">筆記內容</label>
                                        <textarea name="content" id="content" placeholder="請輸入您要提交的內容" className="text-left resize-none h-[150px] border text-lg rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" required />
                                    </div>
                                    <br />
                                </div>
                                <div className="p-6 space-x-4 rounded-b border-t border-gray-600 select-none w-[100%]">
                                    <button type="submit" className="w-full text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg text-base px-5 py-2.5 text-center">提交筆記</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

function NotReady() {
    alert("功能開發中尚不可使用")
}