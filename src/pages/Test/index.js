import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom"

export default function Home() {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const [get, setGet] = React.useState({ "testID": "No Data", "testTitle": "No Data", "testContent": "No Data" });
    const db_id = params.get("id")
    React.useEffect(() => {
        axios
            .get('https://api.kd1.haco.tw/test?id=' + db_id)
            .then((response) => {
                if (!response.data.message && db_id) {
                    setGet(response.data);
                }
            });
    }, [db_id]);

    return (
        <div className='text-5xl'>
            <br />
            <p className='text-3xl'>DB Test Area</p>
            <br />
            <div className="flex w-[70%] ml-[15%]">
                <div className="flex-1">
                    <p className='text-2xl'>Test ID</p>
                    <p className='text-xl'>{get.testID.toString()}</p>
                </div>
                <div className="flex-1">
                    <p className='text-2xl'>Test Title</p>
                    <p className='text-xl'>{get.testTitle.toString()}</p>
                </div>
                <div className="flex-1">
                    <p className='text-2xl'>Test Content</p>
                    <p className='text-xl'>{get.testContent.toString()}</p>
                </div>
            </div>
            <br />
            <div className="flex w-[30%] ml-[35%]">
                <div className="flex-1">
                    <a href="/test?id=1"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xl">增加Param</button></a>
                </div>
                <div className="flex-1">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xl" onClick={Submit}>測試</button>
                </div>
            </div>

        </div>
    )

    function Submit() {
        if (!db_id) {
            axios
                .post('https://api.kd1.haco.tw/test?id=')
                .then((response) => {
                    console.log(response.data)
                    alert(response.data.message)
                });
        } else {
            axios
                .post('https://api.kd1.haco.tw/test?id=' + db_id)
                .then((response) => {
                    console.log(response.data)
                    alert(response.data.message)
                });
        }
    }
}