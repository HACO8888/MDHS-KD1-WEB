import React from "react"
import axios from "axios";


export default function Home() {

    const [anns, setAnns] = React.useState();

    React.useEffect(() => {
        axios
            .get('https://api.kd1.haco.tw/announcementss')
            .then((response) => {
                if (response.data !== undefined) {
                    setAnns(response.data);
                }
            });
    }, []);


    return (
        <div className="select-none text-left">
            {JSON.stringify(anns)}
        </div>
    )
}