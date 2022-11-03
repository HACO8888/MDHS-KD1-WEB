import React from "react"
import axios from "axios";

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
            <div className="flex flex-col my-auto items-center bgimg bg-cover">
                <audio className='text-2xl items-center align-center' controls>
                    <source src="/voices/吳孟熹做愛.mp3" type="audio/mpeg" />
                    您的瀏覽器不支援播放聲音!
                </audio>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}