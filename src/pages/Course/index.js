import axios from "axios";
import React from "react"
import './index.css';


export default function Course() {

  const [isBigScreen, setIsBigScreen] = React.useState(getWindowDimensions().width > 930);
  const [post, setPost] = React.useState(null);
  const [modalShow, setModalShow] = React.useState(false);
  const [table, setTable] = React.useState(
    {
      "classname": "X",
      "teacher": "X",
      "classroom": "X",
      "meet": "X"
    }
  );

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  const shortenData = (data) => {
    var dataString = JSON.stringify(data);
    const replacements = [
      // ["-", " "],
      ["A", ""],
      ["B", ""],
      ["技高課內社團", "課內社團"],
      ["Javascript", "JS"],
      ["\\(輔\\)", ""],
      ["全民國防教育", "國防"],
      ["健康與護理", "健康"],
      ["生涯規劃", "輔導"],
      ["國語文", "國文"],
      ["英語文", "英文"],
      ["英語會話", "ESL"],
      ["基本電學", "電學"],
      ["基礎電子", "電子"],
      ["電腦繪圖", "電繪"],
      ["程式語言", "程式"],
      ["團體活動\\(班會\\)", "班會"]
    ];

    for (let replacement of replacements) {
      dataString = dataString.replace(new RegExp(replacement[0], "gm"), replacement[1]);
    };

    return JSON.parse(dataString);
  }

  React.useEffect(() => {
    axios.get("https://cloud.newmd.eu.org/database/read",
      {
        headers: {
          "access-control-expose-headers": "Authorization",
          "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJRMTI0NzUxNTcxIiwidXNlclBXRCI6ImFhYWFAbmV3bWQiLCJyZW1lbWJlck1lIjoidHJ1ZSIsImlhdCI6MTY2NDc1Njc2MSwiZXhwIjozMjUwMzY4MTU2MX0.Ove9KKE23qt6ubrm_H-HXUZktbwTsOxxfWSpd4M5lrk",
          "Content-Type": "application/json",
          "Bypass-Tunnel-Reminder": "true"
        },
      }
    ).then((response) => {
      // console.log("API Response:" + response.status + " => " + response.statusText)
      setPost(shortenData(response.data));
      // console.log(JSON.stringify(post))
    });

    function handleResize() {
      setIsBigScreen(getWindowDimensions().width > 768);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  if (!post) return setPost(Read());

  return (
    <>
      <br />
      <br />
      <h1 className="text-5xl select-none">本週期課表</h1>
      <br />
      <br />
      <div className="overflow-x-auto relative sm:rounded-lg w-full md:w-[60%] md:ml-[20%] select-none ">
        <table className="w-[100%] text-sm text-center text-gray-400">
          <thead className="text-xs text-gray-400 uppercase bg-cyan-800">
            <tr>
              <th colSpan={isBigScreen ? "2" : "1"} scope="col" className="py-3 px-3 border-white border-r border-b w-auto align-middle">
                <p className="text-lg md:inline hidden">節數/時間</p>
                <p className="text-lg inline md:hidden">時間</p>
              </th>
              <th scope="col" className="py-3 px-3 border-r border-b border-l w-auto align-middle">
                <div className="flex items-center justify-center">
                  <p className="text-lg md:inline hidden">星期一</p>
                  <p className="text-lg inline md:hidden">一</p>
                </div>
              </th>
              <th scope="col" className="py-3 px-3 border-r border-b border-l w-auto align-middle">
                <div className="flex items-center justify-center">
                  <p className="text-lg md:inline hidden">星期二</p>
                  <p className="text-lg inline md:hidden">二</p>
                </div>
              </th>
              <th scope="col" className="py-3 px-3 border-r border-b border-l w-auto align-middle">
                <div className="flex items-center justify-center">
                  <p className="text-lg md:inline hidden">星期三</p>
                  <p className="text-lg inline md:hidden">三</p>
                </div>
              </th>
              <th scope="col" className="py-3 px-3 border-r border-b border-l w-auto align-middle">
                <div className="flex items-center justify-center">
                  <p className="text-lg md:inline hidden">星期四</p>
                  <p className="text-lg inline md:hidden">四</p>
                </div>
              </th>
              <th scope="col" className="py-3 px-3 border-b border-l w-auto align-middle">
                <div className="flex items-center justify-center">
                  <p className="text-lg md:inline hidden">星期五</p>
                  <p className="text-lg inline md:hidden">五</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-cyan-500">
              <th scope="row" className={"py-4 px-3 font-medium text-white border-white border-r border-b align-middle w-[5%] text-lg" + (isBigScreen ? "" : " hidden")}>1</th>
              <th scope="row" className="py-4 px-3 border-white border-r border-b align-middle w-[5%]">08:15<br />｜<br />09:05</th>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day1[1]) }}>
                <p className="text-lg">{post.table.day1[1].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day2[1]) }}>
                <p className="text-lg">{post.table.day2[1].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day3[1]) }}>
                <p className="text-lg">{post.table.day3[1].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day4[1]) }}>
                <p className="text-lg">{post.table.day4[1].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day5[1]) }}>
                <p className="text-lg">{post.table.day5[1].classname}</p>
              </td>
            </tr>
            <tr className="bg-cyan-500">
              <th scope="row" className={"py-4 px-3 font-medium text-white border-white border-r border-b align-middle w-[5%] text-lg" + (isBigScreen ? "" : " hidden")}>2</th>
              <th scope="row" className="py-4 px-3 border-white border-r border-b align-middle w-[5%]">09:15<br />｜<br />10:05</th>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day1[2]) }}>
                <p className="text-lg">{post.table.day1[2].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day2[2]) }}>
                <p className="text-lg">{post.table.day2[2].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day3[2]) }}>
                <p className="text-lg">{post.table.day3[2].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day4[2]) }}>
                <p className="text-lg">{post.table.day4[2].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day5[2]) }}>
                <p className="text-lg">{post.table.day5[2].classname}</p>
              </td>
            </tr>
            <tr className="bg-cyan-500">
              <th scope="row" className={"py-4 px-3 font-medium text-white border-white border-r border-b align-middle w-[5%] text-lg" + (isBigScreen ? "" : " hidden")}>3</th>
              <th scope="row" className="py-4 px-3 border-white border-r border-b align-middle w-[5%]">10:15<br />｜<br />11:05</th>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day1[3]) }}>
                <p className="text-lg">{post.table.day1[3].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day2[3]) }}>
                <p className="text-lg">{post.table.day2[3].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day3[3]) }}>
                <p className="text-lg">{post.table.day3[3].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day7[3]) }}>
                <p className="text-lg">{post.table.day4[3].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day5[3]) }}>
                <p className="text-lg">{post.table.day5[3].classname}</p>
              </td>
            </tr>
            <tr className="bg-cyan-500">
              <th scope="row" className={"py-4 px-3 font-medium text-white border-white border-r border-b align-middle w-[5%] text-lg" + (isBigScreen ? "" : " hidden")}>4</th>
              <th scope="row" className="py-4 px-3 border-white border-r border-b align-middle w-[5%]">11:15<br />｜<br />12:05</th>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day1[4]) }}>
                <p className="text-lg">{post.table.day1[4].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day2[4]) }}>
                <p className="text-lg">{post.table.day2[4].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day3[4]) }}>
                <p className="text-lg">{post.table.day3[4].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day4[4]) }}>
                <p className="text-lg">{post.table.day4[4].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day5[4]) }}>
                <p className="text-lg">{post.table.day5[4].classname}</p>
              </td>
            </tr>
            <tr className="bg-cyan-500">
              <th scope="row" className={"py-4 px-3 font-medium text-white border-white border-r border-b align-middle w-[5%] text-lg" + (isBigScreen ? "" : " hidden")}>午</th>
              <th scope="row" className="py-4 px-3 border-white border-r border-b align-middle w-[5%]">12:45<br />｜<br />13:15</th>
              <td colSpan="5" className="py-4 px-3 border-white border-b align-middle w-[18%]">
                <p className="text-lg">午休</p>
              </td>
            </tr>
            <tr className="bg-cyan-500">
              <th scope="row" className={"py-4 px-3 font-medium text-white border-white border-r border-b align-middle w-[5%] text-lg" + (isBigScreen ? "" : " hidden")}>5</th>
              <th scope="row" className="py-4 px-3 border-white border-r border-b align-middle w-[5%]">13:20<br />｜<br />14:10</th>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day1[5]) }}>
                <p className="text-lg">{post.table.day1[5].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day2[5]) }}>
                <p className="text-lg">{post.table.day2[5].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day3[5]) }}>
                <p className="text-lg">{post.table.day3[5].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day4[5]) }}>
                <p className="text-lg">{post.table.day4[5].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-b align-middle w-[18%]">
                <p className="text-lg">X</p>{ /* {post.table.day5[5].classname} */}
              </td>
            </tr>
            <tr className="bg-cyan-500">
              <th scope="row" className={"py-4 px-3 font-medium text-white border-white border-r border-b align-middle w-[5%] text-lg" + (isBigScreen ? "" : " hidden")}>6</th>
              <th scope="row" className="py-4 px-3 border-white border-r border-b align-middle w-[5%]">14:20<br />｜<br />15:10</th>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day1[6]) }}>
                <p className="text-lg">{post.table.day1[6].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day2[6]) }}>
                <p className="text-lg">{post.table.day2[6].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day3[6]) }}>
                <p className="text-lg">{post.table.day3[6].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day4[6]) }}>
                <p className="text-lg">{post.table.day4[6].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-b align-middle w-[18%]">
                <p className="text-lg">X</p> { /* {post.table.day5[6].classname} */}
              </td>
            </tr>
            <tr className="bg-cyan-500">
              <th scope="row" className={"py-4 px-3 font-medium text-white border-white border-r border-b align-middle w-[5%] text-lg" + (isBigScreen ? "" : " hidden")}>7</th>
              <th scope="row" className="py-4 px-3 border-white border-r border-b align-middle w-[5%]">15:20<br />｜<br />16:10</th>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day1[7]) }}>
                <p className="text-lg">{post.table.day1[7].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day2[7]) }}>
                <p className="text-lg">{post.table.day2[7].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day3[7]) }}>
                <p className="text-lg">{post.table.day3[7].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day4[7]) }}>
                <p className="text-lg">{post.table.day4[7].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-b align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day5[7]) }}>
                <p className="text-lg">{post.table.day5[7].classname}</p>
              </td>
            </tr>
            <tr className="bg-cyan-500">
              <th scope="row" className={"py-4 px-3 font-medium text-white border-white border-r align-middle w-[5%] text-lg" + (isBigScreen ? "" : " hidden")}>8</th>
              <th scope="row" className="py-4 px-3 border-white border-r align-middle w-[5%]">16:20<br />｜<br />17:10</th>
              <td className="py-4 px-3 border-white border-r align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day1[8]) }}>
                <p className="text-lg">{post.table.day1[8].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day2[8]) }}>
                <p className="text-lg">{post.table.day2[8].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day3[8]) }}>
                <p className="text-lg">{post.table.day3[8].classname}</p>
              </td>
              <td className="py-4 px-3 border-white border-r align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day4[8]) }}>
                <p className="text-lg">{post.table.day4[8].classname}</p>
              </td>
              <td className="py-4 px-3 border-white align-middle w-[18%]" onClick={() => { setModalShow(!modalShow); setTable(post.table.day5[8]) }}>
                <p className="text-lg">{post.table.day5[8].classname}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <div id="medium-modal" tabIndex="-1" className={"modal fixed w-full h-full top-0 left-0 flex items-center justify-center" + (modalShow ? "" : " hidden")}>
        <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
        <div className="modal-container w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="relative rounded-lg shadow-2xl bg-slate-900">
            <div className="flex justify-between items-center p-5 rounded-t border-b border-gray-600 select-none">
              <h3 className="text-xl font-medium text-white">
                課程資訊 – {table.classname}
              </h3>
              <button type="button" className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white" data-modal-toggle="medium-modal" onClick={() => { setModalShow(!modalShow); setTable(post.table.day1[1]) }}>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">關閉</span>
              </button>
            </div>
            <div className="p-6 space-y-5">
              <p className="text-left text-xl select-none">任課教師：</p>
              <p className="bg-slate-700 h-[40px] align-middle text-[25px] rounded text-left pl-[10px]">{table.teacher}</p>
              <br className="select-none" />
              <p className="text-left text-xl select-none">MEET連結：</p>
              <a href={table.meet} target="_blanket"><p className="bg-slate-700 h-[80px] align-middle text-[25px] rounded text-left pl-[10px] break-words">{table.meet}&emsp;(點擊跳轉)</p></a>
              <br className="select-none" />
              <p className="text-left text-xl select-none">GC課程代碼：</p>
              <p className="bg-slate-700 h-[40px] align-middle text-[25px] rounded text-left pl-[10px]">{table.classroom}</p>
            </div>
            <div className="p-6 space-x-2 rounded-b border-t border-gray-600 select-none">
              <button data-modal-toggle="medium-modal" type="button" className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-cyan-600 hover:bg-cyan-700" onClick={() => { setModalShow(!modalShow); setTable(post.table.day1[1]) }}>關閉</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



function Read() {
  return (
    {
      "table": { "day1": { "1": { "classname": "體育", "teacher": "黃俊嘉", "classID": "2041958", "meet": "https://meet.google.com/ckg-sxmp-dnb", "classroom": "srf4pzg" }, "2": { "classname": "體育", "teacher": "黃俊嘉", "classID": "2041975", "meet": "https://meet.google.com/ckg-sxmp-dnb", "classroom": "srf4pzg" }, "3": { "classname": "國防", "teacher": "沈文偉", "classID": "2016212", "meet": "https://meet.google.com/yzg-vowh-xqj", "classroom": "nsbz4ge" }, "4": { "classname": "數學", "teacher": "邱立璿", "classID": "1982527", "meet": "https://meet.google.com/znm-hbjm-tba", "classroom": "yiafrez" }, "5": { "classname": "音樂", "teacher": "劉孟穎", "classID": "2071904", "meet": "https://meet.google.com/vxv-foax-aof", "classroom": "ualpcwx" }, "6": { "classname": "電子實習", "teacher": "黃凱威", "classID": "2017461", "meet": "https://meet.google.com/obr-jvhx-owr", "classroom": "n5sz7dd" }, "7": { "classname": "電子實習", "teacher": "黃凱威", "classID": "2017478", "meet": "https://meet.google.com/obr-jvhx-owr", "classroom": "n5sz7dd" }, "8": { "classname": "電子實習", "teacher": "黃凱威", "classID": "2017495", "meet": "https://meet.google.com/obr-jvhx-owr", "classroom": "n5sz7dd" } }, "day2": { "1": { "classname": "國文", "teacher": "陳聯華", "classID": "1945532", "meet": "https://meet.google.com/jhn-oghj-vqn", "classroom": "lsbr6d2" }, "2": { "classname": "電學實習", "teacher": "柯尚仁", "classID": "2016891", "meet": "https://meet.google.com/opn-ubpu-faj", "classroom": "64znh35" }, "3": { "classname": "電學實習", "teacher": "柯尚仁", "classID": "2016912", "meet": "https://meet.google.com/opn-ubpu-faj", "classroom": "64znh35" }, "4": { "classname": "電學實習", "teacher": "柯尚仁", "classID": "2016933", "meet": "https://meet.google.com/opn-ubpu-faj", "classroom": "64znh35" }, "5": { "classname": "數學", "teacher": "邱立璿", "classID": "1982547", "meet": "https://meet.google.com/znm-hbjm-tba", "classroom": "yiafrez" }, "6": { "classname": "歷史", "teacher": "蘇博群", "classID": "1996272", "meet": "https://meet.google.com/thg-danj-ban", "classroom": "ut3fppi" }, "7": { "classname": "物理", "teacher": "陳永富", "classID": "2004034", "meet": "https://meet.google.com/tyy-nvyn-yoh", "classroom": "eknfkc4" }, "8": { "classname": "英文", "teacher": "楊右銘", "classID": "2071886", "meet": "https://meet.google.com/zgx-ervc-ocz", "classroom": "2jdhkzl" } }, "day3": { "1": { "classname": "電繪實習", "teacher": "蔡椿華", "classID": "2017203", "meet": "https://meet.google.com/bfo-bghy-uqk", "classroom": "3ibn6al" }, "2": { "classname": "電繪實習", "teacher": "蔡椿華", "classID": "2017224", "meet": "https://meet.google.com/bfo-bghy-uqk", "classroom": "3ibn6al" }, "3": { "classname": "物理", "teacher": "陳永富", "classID": "2004013", "meet": "https://meet.google.com/tyy-nvyn-yoh", "classroom": "eknfkc4" }, "4": { "classname": "彈性學習", "teacher": "楊右銘", "classID": "2071924", "meet": "https://meet.google.com/zgx-ervc-ocz", "classroom": "2jdhkzl" }, "5": { "classname": "美術", "teacher": "馮天文", "classID": "1932311", "meet": "https://meet.google.com/uku-sbpi-zai", "classroom": "nkqeua4" }, "6": { "classname": "電學", "teacher": "林順進", "classID": "2016789", "meet": "https://meet.google.com/bjn-jzxn-wtn", "classroom": "vgxtrvn" }, "7": { "classname": "電學", "teacher": "林順進", "classID": "2016810", "meet": "https://meet.google.com/bjn-jzxn-wtn", "classroom": "vgxtrvn" }, "8": { "classname": "國文", "teacher": "陳聯華", "classID": "1945553", "meet": "https://meet.google.com/jhn-oghj-vqn", "classroom": "lsbr6d2" } }, "day4": { "1": { "classname": "歷史", "teacher": "蘇博群", "classID": "1996293", "meet": "https://meet.google.com/thg-danj-ban", "classroom": "ut3fppi" }, "2": { "classname": "生活科技", "teacher": "茆育詠", "classID": "2049965", "meet": "https://meet.google.com/kra-hrye-kgt", "classroom": "xmclnio" }, "3": { "classname": "國文", "teacher": "陳聯華", "classID": "1945574", "meet": "https://meet.google.com/jhn-oghj-vqn", "classroom": "lsbr6d2" }, "4": { "classname": "輔導", "teacher": "余文壇", "classID": "2048549", "meet": "https://meet.google.com/rjj-xtjj-xda", "classroom": "s3qrkmc" }, "5": { "classname": "數學", "teacher": "邱立璿", "classID": "1982568", "meet": "https://meet.google.com/znm-hbjm-tba", "classroom": "yiafrez" }, "6": { "classname": "英文", "teacher": "楊右銘", "classID": "1964395", "meet": "https://meet.google.com/zgx-ervc-ocz", "classroom": "2jdhkzl" }, "7": { "classname": "程式", "teacher": "呂信寬", "classID": "2017005", "meet": "https://meet.google.com/ktt-zbey-sno", "classroom": "2by5qbn" }, "8": { "classname": "程式", "teacher": "呂信寬", "classID": "2017026", "meet": "https://meet.google.com/ktt-zbey-sno", "classroom": "2by5qbn" } }, "day5": { "1": { "classname": "數學", "teacher": "邱立璿", "classID": "1982588", "meet": "https://meet.google.com/znm-hbjm-tba", "classroom": "yiafrez" }, "2": { "classname": "英文", "teacher": "楊右銘", "classID": "1964374", "meet": "https://meet.google.com/zgx-ervc-ocz", "classroom": "2jdhkzl" }, "3": { "classname": "電學", "teacher": "林順進", "classID": "2016769", "meet": "https://meet.google.com/bjn-jzxn-wtn", "classroom": "vgxtrvn" }, "4": { "classname": "健康", "teacher": "陳怡如", "classID": "2047444", "meet": "https://meet.google.com/poz-mtpj-nuy", "classroom": "s4c22uy" }, "5": { "classname": "課內社團-JS起步走", "teacher": "周祜民", "classID": "2058424", "meet": "", "classroom": "" }, "6": { "classname": "課內社團-JS起步走", "teacher": "周祜民", "classID": "2058433", "meet": "", "classroom": "" }, "7": { "classname": "班會", "teacher": "呂信寬", "classID": "1929471", "meet": "https://meet.google.com/gey-yzmu-hrj", "classroom": "gjblb6j" }, "8": { "classname": "ESL", "teacher": "Paul", "classID": "1965277", "meet": "https://meet.google.com/vta-jmmk-wcn", "classroom": "3udljmv" } }, "day6": { "1": { "classname": "", "teacher": "", "classID": "", "meet": "", "classroom": "" }, "2": { "classname": "", "teacher": "", "classID": "", "meet": "", "classroom": "" }, "3": { "classname": "", "teacher": "", "classID": "", "meet": "", "classroom": "" }, "4": { "classname": "", "teacher": "", "classID": "", "meet": "", "classroom": "" }, "5": { "classname": "", "teacher": "", "classID": "", "meet": "", "classroom": "" }, "6": { "classname": "", "teacher": "", "classID": "", "meet": "", "classroom": "" }, "7": { "classname": "", "teacher": "", "classID": "", "meet": "", "classroom": "" }, "8": { "classname": "", "teacher": "", "classID": "", "meet": "", "classroom": "" } } }
    }
  )
}