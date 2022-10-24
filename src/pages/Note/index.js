import './index.css';
import axios from "axios";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function Note() {
    const [publicShow, setPublicShow] = useState(false);
    const [privateShow, setPrivateShow] = useState(false);
    const [notes, setNotes] = React.useState([{ "ID": "No Data", "Title": "No Data", "Content": "No Data", "Type": "No Data" }]);

    React.useEffect(() => {
        axios
            .get('https://api.kd1.haco.tw/public-note')
            .then((response) => {
                if (response.data !== undefined) {
                    setNotes(response.data);
                }
            });
    }, []);

    const Html = [];
    Html.push(
        <div className='flex'>
            {/* <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mr-5">
                <a href="#">
                    <img class="rounded-t-lg" src="/pictures/920x613.jpg" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src="/pictures/920x613.jpg" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ml-5">
                <a href="#">
                    <img class="rounded-t-lg" src="/pictures/920x613.jpg" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div> 
            </div>*/}
            {/* <div className="max-w-sm rounded overflow-hidden shadow-lg flex-1">
                <img className="w-full" src="/pictures/800x487.jpg" alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg flex-1">
                <img className="w-full" src="/pictures/800x487.jpg" alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg flex-1">
                <img className="w-full" src="/pictures/800x487.jpg" alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div> */}
        </div>
    );

    return (
        <div className="select-none">
            <br />
            <h1 className='text-5xl'>班級記事</h1>
            <br />
            <Button className="text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 w-[auto] h-15" onClick={() => setPublicShow(!publicShow)}>
                新增共享筆記
            </Button>
            <Button className="text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 w-[auto] h-15 disabled:opacity-50 disabled:hover:bg-indigo-600" onClick={NotReady} disabled>
                新增私人筆記
            </Button>
            <br />
            <br />
            { /* Cards Here Start*/}
            {Html}
            { /* Cards Here End*/}
            <div tabIndex="-1" aria-hidden="true" className={"modal fixed w-full h-full top-0 left-0 flex items-center justify-center" + (publicShow ? "" : " hidden")}>
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
                                        <input name="title" id="title" className="text-left border text-lg rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="吳孟熹幹你媽" required />
                                    </div>
                                    <div>
                                        <label htmlFor="content" className="block mb-2 text-xl font-medium text-white">筆記內容</label>
                                        <textarea name="content" id="content" placeholder="吳孟熙跟你媽做愛是怎么回事呢？吳孟熙相信大家都很熟悉，但是吳孟熙跟你媽做愛是怎么回事呢，下面就让小编带大家一起了解吧。吳孟熙跟你媽做愛，其实就是幹妳媽，大家可能会很惊讶吳孟熙怎么会跟你媽做愛呢？但事实就是这样，小编也感到非常惊讶。这就是关于吳孟熙跟你媽做愛的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！" className="text-left resize-none h-[150px] border text-lg rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" required />
                                    </div>
                                    <br />
                                </div>
                                <div className="p-6 space-x-4 rounded-b border-t border-gray-600 select-none w-[100%]">
                                    <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-base px-5 py-2.5 text-center">送出筆記</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="modal-control"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Form className='note-form' onSubmit={HandleNoteSubmit}>
                    <Modal.Header className="modal-dark noSelect">
                        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
                            感謝您新增本班共享筆記內容
                        </Modal.Title>
                        <CloseButton variant="white" aria-label="Hide" onClick={handleClose} />
                    </Modal.Header>
                    <Modal.Body className="modal-dark">
                        <Alert key="warning" variant="warning">
                            請按照表格填寫所有資訊以便後續資料處裡！
                        </Alert>

                        <p className="modal-body-title noSelect">請選擇記事類別:</p>
                        <Form.Select className="modal-body-select" disabled>
                            <option>此功能尚未開放</option>
                            <option>廢文</option>
                            <option>筆記</option>
                            <option>迷因</option>
                        </Form.Select>
                        <p className="modal-body-title paddingtop noSelect">請輸入記事標題:</p>
                        <Form.Group
                            className="mb-3"
                            controlId="NoteSubmitForm.Title"
                        >
                            <Form.Control className="modal-body-input-short" as="textarea" rows={3} maxLength="20" />
                        </Form.Group>
                        <p className="modal-body-title noSelect">請輸入記事內容:</p>
                        <Form.Group
                            className="mb-3"
                            controlId="NoteSubmitForm.Content"
                        >
                            <Form.Control className="modal-body-input-long" as="textarea" rows={3} maxLength="1000" />
                        </Form.Group>


                        <br />
                    </Modal.Body>
                    <Modal.Footer className="modal-dark noSelect">
                        <Button variant="false" className="cancle-button" aria-label="Hide" onClick={handleClose}><p className="modal-cancle-button-text">取消</p></Button>
                        <Button variant="false" className="modal-button" type="submit"><p className="modal-button-text">送出</p></Button>
                    </Modal.Footer>
                </Form>
            </Modal> */}

        </div >
    )
}

function NotReady() {
    alert("功能開發中尚不可使用")
}