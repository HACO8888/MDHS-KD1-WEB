import './index.css';
import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


export default function People() {
    const [key, setKey] = useState('37');
    return (
        <div className='select-none'>
            <br />
            <h1 className='text-5xl'>人物趣事</h1>
            <br />
            <br />
            <Tabs fill id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                <Tab eventKey="37" title="37 潘彥均">
                    <br />
                    <br />
                    <div className='container'>
                        <div className='md:flex'>
                            <div className='flex-1'>
                                <img src="/pictures/潘彥均.jpg" alt='37' className='w-[80%] ml-[10%]' />
                            </div>
                            <div className='flex-1 w-[100%] text-center ml-[auto]'>
                                <br />
                                <h1 className='text-3xl md:text-5xl text-center'>37 潘彥均 日常追思文</h1>
                                <p className='text-white text-2xl text-center align-middle'>
                                    <br />
                                    <br />
                                    我們摯愛的潘彥均先生，於民國111年8月31日晚上9點23分，悄悄的離開訊一1，我們痛徹心扉，就僅僅一眨眼的時間，天人永隔。潘彥均安祥的走完了數年的睡覺旅程，他彷彿在沉睡中做了一個美夢，夢醒了，留下陪伴我們成長過程中的點點滴滴，留下我們永恆的追思與感恩。
                                    <br />
                                    <br />
                                    <br />
                                    近期有多名新聞記者採訪到訊一一多位同學，其中內容多次提到此人多次上課睡覺唯獨某代課國文的課會精力滿滿端正地坐在位置上安分守己的抄筆記，對於這類行為本班班長、副班長、風紀股長、資訊股長、事務股長、垃圾股長、廢物股長僅代表全體同學強烈譴責這位潘同學！
                                    <br />
                                    <br />
                                    <br />
                                    經過爆料公設多次採證後證實潘同學在遭到譴責後並無悔改之心並且選擇繼續爛繼續睡覺，此類行為將會受到眾多同學之討厭！
                                </p>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="22" title="22 渣庭瑞">
                    <br />
                    <br />
                    <div className='container'>
                        <div className='md:flex'>
                            <div className='flex-1'>
                                <img src="/logo.png" alt='22' className='w-[90%] ml-[5%]' />
                            </div>
                            <div className='flex-1 w-[90%] text-center ml-[5%]'>
                                <br />
                                <h1 className='text-3xl md:text-5xl text-center'>標題</h1>
                                <p className='text-white text-2xl text-center align-middle'>
                                    <br />
                                    <br />
                                    內容準備中
                                </p>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="" title="尚未開發" disabled>
                    <br />
                    <br />
                    <div className='container'>
                        <div className='md:flex'>
                            <div className='flex-1'>
                                <img src="/logo.png" alt='-1' className='w-[90%] ml-[5%]' />
                            </div>
                            <div className='flex-1 w-[90%] text-center ml-[5%]'>
                                <br />
                                <h1 className='text-3xl md:text-5xl text-center'>標題</h1>
                                <p className='text-white text-2xl text-center align-middle'>
                                    <br />
                                    <br />
                                    內容準備中
                                </p>
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
            <br />
            <br />
        </div>
    )
}
