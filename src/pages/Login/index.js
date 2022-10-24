import React from "react";
import axios from "axios";
import { Cookies } from 'react-cookie';

export default function Login() {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const cookies = new Cookies();
    const [user, setUser] = React.useState([]);
    const getUserDetails = React.useCallback(async (accessToken, tokenType) => {
        try {
            const response = await axios.get("https://discord.com/api/users/@me", {
                headers: {
                    authorization: `${tokenType} ${accessToken}`
                }
            });
            const { username, discriminator, id, avatar } = response.data;
            console.log(response.data);
            setUser([username, discriminator, id, avatar]);
        } catch {
            console.log("Can't Get User");
        }
    }, []);

    React.useEffect(() => {
        const fragment = new URLSearchParams(window.location.hash.slice(1));
        const [accessToken, tokenType] = [
            fragment.get("access_token"),
            fragment.get("token_type")
        ];
        getUserDetails(accessToken, tokenType);
        cookies.set('discord', user)

    }, [cookies, getUserDetails, user]);

    setTimeout(function() {
       window.location.replace('/');
    }, 1000);
    // return <div className="mt-[75%] md:mt-[25%]"><h1 className="text-4xl md:text-4x">資料讀取中 . . . </h1></div>;
    return <></>
}

