/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react"
import axios from "axios";
import { Base64 } from 'js-base64';

export default function Home() {

    const [ann, setAnn] = React.useState({ 'message': 'No Data' });

    React.useEffect(() => {
        axios
            .get('https://api.kd1.haco.tw/announcements/' + window.location.pathname.slice(15))
            .then((response) => {
                if (response.data !== undefined) {
                    setAnn(response.data);
                }
            });
        // eslint-disable-next-line
    }, []);



    return (
        <div className="select-none">
            {/* {JSON.stringify(ann)} */}
            <br />
            <br />
            <a href="/" className="text-red-500 text-4xl">返回首頁</a>
            <br />
            <br />
            <br />
            <br />
            <p className='text-3xl text-cyan-300'>公告編號</p>
            <br />
            <p className='text-2xl'>{ann.ID}</p>
            <br />
            <br />
            <br />
            <p className='text-3xl text-cyan-300'>公告標題</p>
            <br />
            <p className='text-2xl'>{ann.Title}</p>
            <br />
            <br />
            <br />
            <p className='text-3xl text-cyan-300'>公告內容</p>
            <br />
            <p className='text-2xl w-[60%] ml-[20%]'>{ann.Content}</p>
            <br />
            <br />
            <br />
            <p className='text-3xl text-cyan-300'>播放公告</p>
            <br />
            <div className="w-auto ml-auto md:w-1/2 md:ml-[25%]">
                <iframe src={"https://api.kd1.haco.tw/tts/" + (Base64.encode(ann.Content, true))} className="w-[100%]"></iframe>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}