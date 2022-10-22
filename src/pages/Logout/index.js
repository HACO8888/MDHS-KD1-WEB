import React from "react";
import { Cookies } from 'react-cookie';

export default function Login() {
    const cookies = new Cookies();
    cookies.remove('discord')
    window.location.replace('/');
    return <></>;
}

