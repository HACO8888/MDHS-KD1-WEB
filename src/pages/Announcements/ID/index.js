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
            <p className='text-3xl'>公告編號</p>
            <br />
            <p className='text-2xl'>{ann.ID}</p>
            <br />
            <br />
            <p className='text-3xl'>公告標題</p>
            <br />
            <p className='text-2xl'>{ann.Title}</p>
            <br />
            <br />
            <p className='text-3xl'>公告內容</p>
            <br />
            <p className='text-2xl w-[80%] ml-[10%]'>{ann.Content}</p>
            <br />
            <br />
        </div>
    )
}