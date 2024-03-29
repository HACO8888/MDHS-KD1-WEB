import React from "react";
import './index.css';
import { Cookies } from 'react-cookie';

function NavBar() {
    const cookies = new Cookies();
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [loginMenu, setLoginMenu] = React.useState(false);
    const [colorMenu, setColorMenu] = React.useState(false);

    function ChangeColor(color) {
        if (!localStorage.getItem('theme-color')) {
            // console.log('No Theme Cookie, Color:' + color)
            localStorage.setItem('theme-color', color)
        } else {
            localStorage.removeItem('theme-color')
            localStorage.setItem('theme-color', color)
        }
    }

    // const ChangeColor = (color) => {
    //     localStorage.setItem('theme-color', color)
    // }

    return (
        <>
            <nav className="bg-gray-800 px-4 py-3 select-none max-w-[100%]">
                <div className="flex justify-between item-center">
                    <a href="/" className="flex items-center flex-shrink-0 text-white noSelect">
                        {/* <img width="50PX" src='/logo.png' alt="logo" /> */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-robot h-8 w-8 mr-2" width="50" height="50" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z"></path>
                            <path d="M10 16h4"></path>
                            <circle cx="8.5" cy="11.5" r=".5" fill="currentColor"></circle>
                            <circle cx="15.5" cy="11.5" r=".5" fill="currentColor"></circle>
                            <path d="M9 7l-1 -4"></path>
                            <path d="M15 7l1 -4"></path>
                        </svg> */}
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
                        {/* <a href="/test" className="text-white px-5 py-3 rounded-md flex hover:bg-white/5 noSelect">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <polyline points="7 8 3 12 7 16"></polyline>
                                <polyline points="17 8 21 12 17 16"></polyline>
                                <line x1="14" y1="4" x2="10" y2="20"></line>
                            </svg>
                            測試頁面
                        </a> */}
                    </div>
                    <div className="flex gap-2">
                        {/* <div>
                            <button className={"text-white font-medium rounded-full text-sm px-3 py-3 text-center flex bg-" + (!localStorage.getItem('theme-color') ? "cyan" : localStorage.getItem('theme-color')) + "-600 hover:bg-" + (!localStorage.getItem('theme-color') ? "cyan" : localStorage.getItem('theme-color')) + "-600 md:hover:bg-" + (!localStorage.getItem('theme-color') ? "cyan" : localStorage.getItem('theme-color')) + "-700"} onClick={() => setColorMenu(!colorMenu)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-palette" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"></path>
                                    <circle cx="7.5" cy="10.5" r=".5" fill="currentColor"></circle>
                                    <circle cx="12" cy="7.5" r=".5" fill="currentColor"></circle>
                                    <circle cx="16.5" cy="10.5" r=".5" fill="currentColor"></circle>
                                </svg>
                            </button>
                            <div className={"m-[auto] absolute right-0 mt-[5px] mr-[165px] md:mr-[105px] w-52 rounded-lg shadow-2xl z-50 bg-" + (!localStorage.getItem('theme-color') ? "cyan" : localStorage.getItem('theme-color')) + "-500" + (colorMenu ? "" : " hidden")}>
                                <br />
                                <div className="flex">
                                    <div className="hover:cursor-pointer mb-[10px] ml-[10%] w-12 h-12 rounded-lg flex-initial align-center bg-red-600" onClick={() => ChangeColor('red')}></div>
                                    <div className="hover:cursor-pointer mb-[10px] ml-[5%] w-12 h-12 rounded-lg flex-initial align-center bg-orange-400" onClick={() => ChangeColor('orange')}></div>
                                    <div className="hover:cursor-pointer mb-[10px] ml-[5%] w-12 h-12 rounded-lg flex-initial align-center bg-yellow-400" onClick={() => ChangeColor('yellow')}></div>
                                </div>
                                <div className="flex">
                                    <div className="hover:cursor-pointer mb-[10px] ml-[10%] w-12 h-12 rounded-lg flex-initial align-center bg-lime-400" onClick={() => ChangeColor('lime')}></div>
                                    <div className="hover:cursor-pointer mb-[10px] ml-[5%] w-12 h-12 rounded-lg flex-initial align-center bg-green-400" onClick={() => ChangeColor('green')}></div>
                                    <div className="hover:cursor-pointer mb-[10px] ml-[5%] w-12 h-12 rounded-lg flex-initial align-center bg-cyan-400" onClick={() => ChangeColor('cyan')}></div>
                                </div>
                                <div className="flex">
                                    <div className="hover:cursor-pointer mb-[20px] ml-[10%] w-12 h-12 rounded-lg flex-initial align-center bg-blue-600" onClick={() => ChangeColor('blue')}></div>
                                    <div className="hover:cursor-pointer mb-[20px] ml-[5%] w-12 h-12 rounded-lg flex-initial align-center bg-indigo-800" onClick={() => ChangeColor('indigo')}></div>
                                    <div className="hover:cursor-pointer mb-[20px] ml-[5%] w-12 h-12 rounded-lg flex-initial align-center bg-purple-700" onClick={() => ChangeColor('purple')}></div>
                                </div>
                            </div>
                        </div> */}
                        <button className="text-white bg-cyan-600 font-medium rounded-full text-sm px-3 py-3 text-center flex md:hidden" onClick={() => setNavbarOpen(!navbarOpen)}>
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
                            <button className={"text-white bg-cyan-600 hover:bg-cyan-600 md:hover:bg-cyan-700 font-medium rounded-full text-sm px-5 py-3 text-center flex" + (!cookies.get('discord') ? "" : " hidden")} type="button" onClick={(e) => window.open("https://discord.com/api/oauth2/authorize?client_id=1033339136028979330&redirect_uri=" + (window.location.protocol) + "//" + (window.location.hostname + (window.location.port ? ':' + window.location.port : '')) + "/login&response_type=token&scope=identify", "_parent")}>
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
                            <button className={"items-center text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-full text-xl px-3 py-3 text-center flex w-[auto]" + (cookies.get('discord') ? "" : " hidden")} type="button" onClick={() => setLoginMenu(!loginMenu)}>
                                <img className="align-center rounded-full flex-none w-[25px] h-[25px] m-[auto] mr-[3px]" src={(!cookies.get('discord') ? "" : "https://cdn.discordapp.com/avatars/" + (!cookies.get('discord') ? "" : cookies.get('discord')[2]) + "/" + (!cookies.get('discord') ? "" : cookies.get('discord')[3]) + ".webp")} alt="user-img" />
                                <svg className="ml-2 w-5 h-5 flex-1" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div className={"w-[75px] m-[auto] absolute mt-[5px] mr-[10px] z-5 block bg-cyan-500 rounded-lg" + (loginMenu ? "" : " hidden")}>
                                <ul className="py-1 text-smtext-gray-200 ml-[5px] mr-[5px]">
                                    <li>
                                        <a href="#/admin" className="block py-2 px-4 w-[100%] mt-[5px] rounded-lg hover:bg-cyan-500 md:hover:bg-cyan-400 text-white">管理</a>
                                    </li>
                                    <li>
                                        <a href="/logout" className="block py-2 px-4 w-[100%] mb-[5px] rounded-lg hover:bg-cyan-500 md:hover:bg-cyan-400 text-white">登出</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div >
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
                        {/* <a href="/test" className="hover:text-gray-300 text-gray-300 hover:bg-white/5 px-3 py-2 rounded-md flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <polyline points="7 8 3 12 7 16"></polyline>
                                <polyline points="17 8 21 12 17 16"></polyline>
                                <line x1="14" y1="4" x2="10" y2="20"></line>
                            </svg>
                            測試頁面
                        </a> */}
                    </div>
                </div>
            </nav >
        </>
    )
}

export default NavBar;