import React from "react";
import './index.css';
import { Cookies } from 'react-cookie';

function NavBar() {
    const cookies = new Cookies();
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [loginMenu, setLoginMenu] = React.useState(false);
    // console.log(cookies.get('discord'));
    return (
        <>
            <nav className="bg-gray-800 px-4 py-3 select-none">
                <div className="flex justify-between item-center">
                    <a href="/" className="flex items-center flex-shrink-0 text-white mr-6 noSelect">
                        {/* <img width="50PX" src='/logo.png' alt="logo" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-robot h-8 w-8 mr-2" width="50" height="50" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z"></path>
                            <path d="M10 16h4"></path>
                            <circle cx="8.5" cy="11.5" r=".5" fill="currentColor"></circle>
                            <circle cx="15.5" cy="11.5" r=".5" fill="currentColor"></circle>
                            <path d="M9 7l-1 -4"></path>
                            <path d="M15 7l1 -4"></path>
                        </svg>
                        <span className="font-semibold text-xl tracking-tight">MDHS K1D1</span>
                    </a>
                    <div className="hidden md:flex gap-2">
                        <a href="/" className="text-white px-5 py-3 rounded-md flex hover:bg-white/5 noSelect">{ /* bg-gray-900 text-white px-5 py-3 rounded-md */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                            </svg>
                            網站首頁
                        </a>
                        <a href="/course" className="text-white px-5 py-3 rounded-md flex hover:bg-white/5 noSelect">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                                <line x1="16" y1="3" x2="16" y2="7"></line>
                                <line x1="8" y1="3" x2="8" y2="7"></line>
                                <line x1="4" y1="11" x2="20" y2="11"></line>
                                <rect x="8" y="15" width="2" height="2"></rect>
                            </svg>
                            班級課表
                        </a>
                        <a href="/people" className="text-white px-5 py-3 rounded-md flex hover:bg-white/5 noSelect">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                            </svg>
                            人物趣事
                        </a>
                        <a href="/note" className="text-white px-5 py-3 rounded-md flex hover:bg-white/5 noSelect">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-notes" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="5" y="3" width="14" height="18" rx="2"></rect>
                                <line x1="9" y1="7" x2="15" y2="7"></line>
                                <line x1="9" y1="11" x2="15" y2="11"></line>
                                <line x1="9" y1="15" x2="13" y2="15"></line>
                            </svg>
                            班級記事
                        </a>
                        <a href="/test" className="text-white px-5 py-3 rounded-md flex hover:bg-white/5 noSelect">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <polyline points="7 8 3 12 7 16"></polyline>
                                <polyline points="17 8 21 12 17 16"></polyline>
                                <line x1="14" y1="4" x2="10" y2="20"></line>
                            </svg>
                            測試頁面
                        </a>
                    </div>
                    <div className="flex gap-4">
                        {/* <a href="#" className="text-gray-400 py-3 px-2 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24"
                                height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="10" cy="10" r="7"></circle>
                                <line x1="21" y1="21" x2="15" y2="15"></line>
                            </svg>
                        </a> */}
                        {/* <a href="#" className="text-gray-400 py-3 px-2 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width="24"
                                height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6">
                                </path>
                                <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                            </svg>
                        </a> */}
                        <button className="text-gray-400 py-3 px-2 hover:text-gray-200 block md:hidden" onClick={() => setNavbarOpen(!navbarOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24"
                                height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="4" y1="6" x2="20" y2="6"></line>
                                <line x1="4" y1="12" x2="20" y2="12"></line>
                                <line x1="4" y1="18" x2="20" y2="18"></line>
                            </svg>
                        </button>

                        <div>
                            <button className={"text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-3 text-center flex" + (!cookies.get('discord') ? "" : " hidden")} type="button" onClick={(e) => window.open("https://discord.com/api/oauth2/authorize?client_id=1033339136028979330&redirect_uri=" + (window.location.protocol) + "//" + (window.location.hostname + (window.location.port ? ':' + window.location.port : '')) + "/login&response_type=token&scope=identify", "_parent")}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-discord flex-1 align-center" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <circle cx="9" cy="12" r="1"></circle>
                                    <circle cx="15" cy="12" r="1"></circle>
                                    <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"></path>
                                    <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
                                    <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"></path>
                                    <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"></path>
                                </svg>
                                <p className="flex-2 ml-[5px] align-center">登入</p>
                            </button>
                            <button className={"items-center text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-4 py-3 text-center flex" + (cookies.get('discord') ? "" : " hidden")} type="button" onClick={() => setLoginMenu(!loginMenu)}>
                                <img className="flex-1 align-center rounded-full w-[25px] m-[auto]" src={(!cookies.get('discord') ? "" : "https://cdn.discordapp.com/avatars/" + (!cookies.get('discord') ? "" : cookies.get('discord')[2]) + "/" + (!cookies.get('discord') ? "" : cookies.get('discord')[3]) + ".png")} />
                                <p className="flex-2 m-[auto] ml-[5px] mr-[5px] md:mr-[0px] align-center">{!cookies.get('discord') ? "" : cookies.get('discord')[0]}#{!cookies.get('discord') ? "" : cookies.get('discord')[1]}</p>
                                <svg className="ml-2 w-4 h-4 hidden md:inline" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div className={"absolute mt-[5px] z-10 w-36 md:w-40 bg-indigo-500 rounded-lg" + (loginMenu ? "" : " hidden")}>
                                <ul className="py-1 text-smtext-gray-200">
                                    <li>
                                        <a href="#/admin" className="block py-2 px-4 w-[90%] ml-[5%] mt-[5px] rounded-lg hover:bg-indigo-500 md:hover:bg-indigo-400 text-white">管理後臺</a>
                                    </li>
                                    <li>
                                        <a href="/logout" className="block py-2 px-4 w-[90%] ml-[5%] mb-[5px] rounded-lg hover:bg-indigo-500 md:hover:bg-indigo-400 text-white">登出帳號</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={(navbarOpen ? "" : " hidden")}>
                    <div className="flex flex-col gap-1 py-3">
                        <a href="/" className="hover:text-gray-300 text-gray-300 hover:bg-white/5 px-3 py-2 rounded-md flex md:py-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                            </svg>
                            網站首頁
                        </a>
                        <a href="/course" className="hover:text-gray-300 text-gray-300 hover:bg-white/5 px-3 py-2 rounded-md flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                                <line x1="16" y1="3" x2="16" y2="7"></line>
                                <line x1="8" y1="3" x2="8" y2="7"></line>
                                <line x1="4" y1="11" x2="20" y2="11"></line>
                                <rect x="8" y="15" width="2" height="2"></rect>
                            </svg>
                            班級課表
                        </a>
                        <a href="/people" className="hover:text-gray-300 text-gray-300 hover:bg-white/5 px-3 py-2 rounded-md flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                            </svg>
                            人物趣事
                        </a>
                        <a href="/note" className="hover:text-gray-300 text-gray-300 hover:bg-white/5 px-3 py-2 rounded-md flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-notes" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <rect x="5" y="3" width="14" height="18" rx="2"></rect>
                                <line x1="9" y1="7" x2="15" y2="7"></line>
                                <line x1="9" y1="11" x2="15" y2="11"></line>
                                <line x1="9" y1="15" x2="13" y2="15"></line>
                            </svg>
                            班級記事
                        </a>
                        <a href="/test" className="hover:text-gray-300 text-gray-300 hover:bg-white/5 px-3 py-2 rounded-md flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <polyline points="7 8 3 12 7 16"></polyline>
                                <polyline points="17 8 21 12 17 16"></polyline>
                                <line x1="14" y1="4" x2="10" y2="20"></line>
                            </svg>
                            測試頁面
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;