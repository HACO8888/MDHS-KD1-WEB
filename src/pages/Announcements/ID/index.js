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
            {JSON.stringify(ann)}
        </div>
    )
}