import axios from "axios";
import React from "react"
import './index.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
// import * as Icon from 'react-bootstrap-icons';

const post3 =
{
  "table": {
    "1": {
      "classname": "國語文",
      "teacher": "陳聯華",
      "classID": "1945528",
      "meet": "https://meet.google.com/jhn-oghj-vqn",
      "classroom": "lsbr6d2"
    },
    "2": {
      "classname": "基本電學實習",
      "meet": "https://meet.google.com/opn-ubpu-faj、vtp-xurj-cgh",
      "classroom": "64znh35 (柯尚仁)、5v4an56 (尤振輝)"
    },
    "3": {
      "classname": "基礎電子實習",
      "meet": "https://meet.google.com/awr-ddyu-cgd、obr-jvhx-owr",
      "classroom": "hrn5wf5 (林順進)、n5sz7dd (黃凱威)"
    },
    "day1": {
      "1": {
        "classname": "",
        "teacher": "",
        "classID": "",
        "meet": "",
        "classroom": ""
      }
    }
  }
}


export default function Course() {

  const [post, setPost] = React.useState(null);

  const [modalShow, setModalShow] = React.useState(false);

  const [table, setTable] = React.useState(post3.table.day1[1]);

  React.useEffect(() => {
    axios.get("http://aaaa.zapto.org/cloud/database/read",
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
      setPost(response.data);
    });
  }, []);

  if (!post) return setPost(Read());;

  return (
    <div className="TablePage_background noSelect">
      <br />
      <br />
      <h1 className="title">本學期課表</h1>
      <br />
      <p className="info">如圖片有被拉伸的狀況是故意所為</p>
      <br />
      <div className="table-wrap">
        <table className="table">
          <thead className="thead-primary">
            <tr>
              <th colSpan="2" className="half">節數/時間</th>
              <th className="day">星期一</th>
              <th className="day">星期二</th>
              <th className="day">星期三</th>
              <th className="day">星期四</th>
              <th className="day">星期五</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th >第<br />一<br />節</th>
              <th>08:15<br />｜<br />09:05</th>
              <td className="pic pe" onClick={() => { setModalShow(true); setTable(post.table.day1[1]) }}><p>{post.table.day1[1].classname}</p></td>
              <td className="pic chinese" onClick={() => { setModalShow(true); setTable(post.table.day2[1]) }}><p>{post.table.day2[1].classname}</p></td>
              <td onClick={() => { setModalShow(true); setTable(post.table.day3[1]) }}>{post.table.day3[1].classname}</td>
              <td onClick={() => { setModalShow(true); setTable(post.table.day4[1]) }}>{post.table.day4[1].classname}</td>
              <td className="pic math" onClick={() => { setModalShow(true); setTable(post.table.day5[1]) }}><p>{post.table.day5[1].classname}</p></td>
            </tr>
            <tr>
              <th >第<br />二<br />節</th>
              <th>09:15<br />｜<br />10:05</th>
              <td className="pic pe" onClick={() => { setModalShow(true); setTable(post.table.day1[2]) }}><p>{post.table.day1[2].classname}</p></td>
              <td className="pic basic-electricity-study" onClick={() => { setModalShow(true); setTable(post3.table[2]) }}><p>{post.table.day2[2].classname}</p></td>
              <td onClick={() => { setModalShow(true); setTable(post.table.day3[2]) }}>{post.table.day3[2].classname}</td>
              <td onClick={() => { setModalShow(true); setTable(post.table.day4[2]) }}>{post.table.day4[2].classname}</td>
              <td className="pic english" onClick={() => { setModalShow(true); setTable(post.table.day5[2]) }}><p>{post.table.day5[2].classname}</p></td>
            </tr>
            <tr>
              <th >第<br />三<br />節</th>
              <th >10:15<br />｜<br />11:05</th>
              <td className="pic basic-electricity" onClick={() => { setModalShow(true); setTable(post.table.day1[3]) }}><p>{post.table.day1[3].classname}</p></td>
              <td className="pic basic-electricity-study" onClick={() => { setModalShow(true); setTable(post3.table[2]) }}><p>{post.table.day2[3].classname}</p></td>
              <td onClick={() => { setModalShow(true); setTable(post.table.day3[3]) }}>{post.table.day3[3].classname}</td>
              <td className="pic chinese" onClick={() => { setModalShow(true); setTable(post.table.day4[3]) }}><p>{post.table.day4[3].classname}</p></td>
              <td className="pic instructor" onClick={() => { setModalShow(true); setTable(post.table.day5[3]) }}><p>{post.table.day5[3].classname}</p></td>
            </tr>
            <tr>
              <th >第<br />四<br />節</th>
              <th >11:15<br />｜<br />12:05</th>
              <td className="pic math" onClick={() => { setModalShow(true); setTable(post.table.day1[4]) }}><p>{post.table.day1[4].classname}</p></td>
              <td className="pic basic-electricity-study" onClick={() => { setModalShow(true); setTable(post3.table[2]) }}><p>{post.table.day2[4].classname}</p></td>
              <td className="pic english" onClick={() => { setModalShow(true); setTable(post.table.day3[4]) }}><p>{post.table.day3[4].classname}</p></td>
              <td onClick={() => { setModalShow(true); setTable(post.table.day4[4]) }}>{post.table.day4[4].classname}</td>
              <td onClick={() => { setModalShow(true); setTable(post.table.day5[4]) }}>{post.table.day5[4].classname}</td>
            </tr>
            <tr>
              <th >第<br />五<br />節</th>
              <th>13:20<br />｜<br />14:10</th>
              <td className="pic music" onClick={() => { setModalShow(true); setTable(post.table.day1[5]) }}><p>{post.table.day1[5].classname}</p></td>
              <td className="pic math" onClick={() => { setModalShow(true); setTable(post.table.day2[5]) }}><p>{post.table.day2[5].classname}</p></td>
              <td onClick={() => { setModalShow(true); setTable(post.table.day3[5]) }}>{post.table.day3[5].classname}</td>
              <td className="pic math" onClick={() => { setModalShow(true); setTable(post.table.day4[5]) }}><p>{post.table.day4[5].classname}</p></td>
              <td className="pic chinese" onClick={() => { setModalShow(true); setTable(post3.table[1]) }}><p className="week-title">單周</p><p>國語文</p><br /><p className="week-title">雙周</p><p>課內社團</p></td>
            </tr>
            <tr>
              <th >第<br />六<br />節</th>
              <th>14:20<br />｜<br />15:10</th>
              <td className="pic basic-electronics-study" onClick={() => { setModalShow(true); setTable(post3.table[3]) }}><p>{post.table.day1[6].classname}</p></td>
              <td onClick={() => { setModalShow(true); setTable(post.table.day2[6]) }}>{post.table.day2[6].classname}</td>
              <td className="pic basic-electricity" onClick={() => { setModalShow(true); setTable(post.table.day3[6]) }}><p>{post.table.day3[6].classname}</p></td>
              <td className="pic english" onClick={() => { setModalShow(true); setTable(post.table.day4[6]) }}><p>{post.table.day4[6].classname}</p></td>
              <td className="pic chinese" onClick={() => { setModalShow(true); setTable(post3.table[1]) }}><p className="week-title">單周</p><p>國語文</p><br /><p className="week-title">雙周</p><p>課內社團</p></td>
            </tr>
            <tr>
              <th >第<br />七<br />節</th>
              <th>15:20<br />｜<br />16:10</th>
              <td className="pic basic-electronics-study" onClick={() => { setModalShow(true); setTable(post3.table[3]) }}><p>{post.table.day1[7].classname}</p></td>
              <td onClick={() => { setModalShow(true); setTable(post.table.day2[7]) }}>{post.table.day2[7].classname}</td>
              <td className="pic basic-electricity" onClick={() => { setModalShow(true); setTable(post.table.day3[7]) }}><p>{post.table.day3[7].classname}</p></td>
              <td className="pic leader" onClick={() => { setModalShow(true); setTable(post.table.day4[7]) }}><p>{post.table.day4[7].classname}</p></td>
              <td className="pic leader" onClick={() => { setModalShow(true); setTable(post.table.day5[7]) }}><p>{post.table.day5[7].classname}</p></td>
            </tr>
            <tr>
              <th >第<br />八<br />節</th>
              <th>16:20<br />｜<br />17:10</th>
              <td className="pic basic-electronics-study" onClick={() => { setModalShow(true); setTable(post3.table[3]) }}><p>{post.table.day1[8].classname}</p></td>
              <td className="pic english" onClick={() => { setModalShow(true); setTable(post.table.day2[8]) }}><p>{post.table.day2[8].classname}</p></td>
              <td className="pic chinese" onClick={() => { setModalShow(true); setTable(post.table.day3[8]) }}><p>{post.table.day3[8].classname}</p></td>
              <td className="pic leader" onClick={() => { setModalShow(true); setTable(post.table.day4[8]) }}><p>{post.table.day4[8].classname}</p></td>
              <td className="pic esl" onClick={() => { setModalShow(true); setTable(post.table.day5[8]) }}><p>英語會話A(輔)</p><br /><p>英語會話B(輔)</p></td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <Show
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )

  function Show(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        className="modal-control"
        centered
      >
        <Modal.Header className="modal-dark noSelect">
          <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
            課程資訊 - {table.classname}
          </Modal.Title>
          <CloseButton variant="white" aria-label="Hide" onClick={props.onHide} />
        </Modal.Header>
        <Modal.Body className="modal-dark">
          <p className="modal-body-title noSelect">MEET連結:</p>
          <p className="modal-body-meet-link">{table.meet}{/*<i className="copy" onclick={ navigator.clipboard.writeText(table.meet) }><Icon.Clipboard /></i>*/}</p>
          <br />
          <p className="modal-body-title noSelect">GC課程代碼:</p>
          <p className="modal-body-gc-code">{table.classroom}</p>
          <br />
        </Modal.Body>
        <Modal.Footer className="modal-dark noSelect">
          <Button variant="false" onClick={props.onHide} className="modal-button"><p className="modal-button-text">關閉</p></Button>
        </Modal.Footer>
      </Modal>
    );
  }
}



function Read() {
  const post2 = {
    "table": {
      "day1": {
        "1": {
          "classname": "體育",
          "teacher": "林筠棋",
          "classID": "2041956",
          "meet": "https://meet.google.com/ckg-sxmp-dnb",
          "classroom": "srf4pzg"
        },
        "2": {
          "classname": "體育",
          "teacher": "林筠棋",
          "classID": "2041973",
          "meet": "https://meet.google.com/ckg-sxmp-dnb",
          "classroom": "srf4pzg"
        },
        "3": {
          "classname": "基本電學",
          "teacher": "林順進",
          "classID": "2016767",
          "meet": "https://meet.google.com/bjn-jzxn-wtn",
          "classroom": "vgxtrvn"
        },
        "4": {
          "classname": "數學",
          "teacher": "邱立璿",
          "classID": "1982525",
          "meet": "https://meet.google.com/znm-hbjm-tba",
          "classroom": "yiafrez"
        },
        "5": {
          "classname": "音樂",
          "teacher": "劉孟穎",
          "classID": "2071902",
          "meet": "https://meet.google.com/vxv-foax-aof",
          "classroom": "ualpcwx"
        },
        "6": {
          "classname": "基礎電子實習",
          "teacher": "黃凱威",
          "classID": "2017459",
          "meet": "https://meet.google.com/obr-jvhx-owr",
          "classroom": "n5sz7dd"
        },
        "7": {
          "classname": "基礎電子實習",
          "teacher": "黃凱威",
          "classID": "2017476",
          "meet": "https://meet.google.com/obr-jvhx-owr",
          "classroom": "n5sz7dd"
        },
        "8": {
          "classname": "基礎電子實習(輔)",
          "teacher": "黃凱威",
          "classID": "2017493",
          "meet": "https://meet.google.com/obr-jvhx-owr",
          "classroom": "n5sz7dd"
        }
      },
      "day2": {
        "1": {
          "classname": "國語文",
          "teacher": "賴佩琳",
          "classID": "1945528",
          "meet": "https://meet.google.com/jhn-oghj-vqn",
          "classroom": "lsbr6d2"
        },
        "2": {
          "classname": "基本電學實習",
          "teacher": "柯尚仁",
          "classID": "2016887",
          "meet": "https://meet.google.com/opn-ubpu-faj",
          "classroom": "64znh35"
        },
        "3": {
          "classname": "基本電學實習",
          "teacher": "柯尚仁",
          "classID": "2016908",
          "meet": "https://meet.google.com/opn-ubpu-faj",
          "classroom": "64znh35"
        },
        "4": {
          "classname": "基本電學實習",
          "teacher": "柯尚仁",
          "classID": "2016929",
          "meet": "https://meet.google.com/opn-ubpu-faj",
          "classroom": "64znh35"
        },
        "5": {
          "classname": "數學",
          "teacher": "邱立璿",
          "classID": "1982543",
          "meet": "https://meet.google.com/znm-hbjm-tba",
          "classroom": "yiafrez"
        },
        "6": {
          "classname": "歷史",
          "teacher": "蘇博群",
          "classID": "1996268",
          "meet": "https://meet.google.com/thg-danj-ban",
          "classroom": "ut3fppi"
        },
        "7": {
          "classname": "物理B",
          "teacher": "陳永富",
          "classID": "2004030",
          "meet": "https://meet.google.com/tyy-nvyn-yoh",
          "classroom": "eknfkc4"
        },
        "8": {
          "classname": "英語文(輔)",
          "teacher": "楊右銘",
          "classID": "2071882",
          "meet": "https://meet.google.com/zgx-ervc-ocz?authuser=0",
          "classroom": "2jdhkzl"
        }
      },
      "day3": {
        "1": {
          "classname": "電腦繪圖實習",
          "teacher": "蔡椿華",
          "classID": "2017199",
          "meet": "https://meet.google.com/bfo-bghy-uqk",
          "classroom": "3ibn6al"
        },
        "2": {
          "classname": "電腦繪圖實習",
          "teacher": "蔡椿華",
          "classID": "2017220",
          "meet": "https://meet.google.com/bfo-bghy-uqk",
          "classroom": "3ibn6al"
        },
        "3": {
          "classname": "物理B",
          "teacher": "陳永富",
          "classID": "2004009",
          "meet": "https://meet.google.com/tyy-nvyn-yoh",
          "classroom": "eknfkc4"
        },
        "4": {
          "classname": "彈性學習",
          "teacher": "楊右銘",
          "classID": "2071920",
          "meet": "https://meet.google.com/zgx-ervc-ocz?authuser=0",
          "classroom": "2jdhkzl"
        },
        "5": {
          "classname": "美術",
          "teacher": "施正堂",
          "classID": "1932307",
          "meet": "https://meet.google.com/uku-sbpi-zai",
          "classroom": "nkqeua4"
        },
        "6": {
          "classname": "基本電學",
          "teacher": "林順進",
          "classID": "2016785",
          "meet": "https://meet.google.com/bjn-jzxn-wtn",
          "classroom": "vgxtrvn"
        },
        "7": {
          "classname": "基本電學",
          "teacher": "林順進",
          "classID": "2016806",
          "meet": "https://meet.google.com/bjn-jzxn-wtn",
          "classroom": "vgxtrvn"
        },
        "8": {
          "classname": "國語文(輔)",
          "teacher": "賴佩琳",
          "classID": "1945549",
          "meet": "https://meet.google.com/jhn-oghj-vqn",
          "classroom": "lsbr6d2"
        }
      },
      "day4": {
        "1": {
          "classname": "歷史",
          "teacher": "蘇博群",
          "classID": "1996289",
          "meet": "https://meet.google.com/thg-danj-ban",
          "classroom": "ut3fppi"
        },
        "2": {
          "classname": "生活科技",
          "teacher": "茆育詠",
          "classID": "2049961",
          "meet": "https://meet.google.com/kra-hrye-kgt",
          "classroom": "xmclnio"
        },
        "3": {
          "classname": "國語文",
          "teacher": "賴佩琳",
          "classID": "1945570",
          "meet": "https://meet.google.com/jhn-oghj-vqn",
          "classroom": "lsbr6d2"
        },
        "4": {
          "classname": "生涯規劃",
          "teacher": "余文壇",
          "classID": "2048545",
          "meet": "https://meet.google.com/rjj-xtjj-xda?authuser=0",
          "classroom": "s3qrkmc"
        },
        "5": {
          "classname": "數學",
          "teacher": "邱立璿",
          "classID": "1982564",
          "meet": "https://meet.google.com/znm-hbjm-tba",
          "classroom": "yiafrez"
        },
        "6": {
          "classname": "英語文",
          "teacher": "楊右銘",
          "classID": "1964391",
          "meet": "https://meet.google.com/zgx-ervc-ocz?authuser=0",
          "classroom": "2jdhkzl"
        },
        "7": {
          "classname": "程式語言",
          "teacher": "呂信寬",
          "classID": "2017001",
          "meet": "https://meet.google.com/ktt-zbey-sno",
          "classroom": "2by5qbn"
        },
        "8": {
          "classname": "程式語言(輔)",
          "teacher": "呂信寬",
          "classID": "2017022",
          "meet": "https://meet.google.com/ktt-zbey-sno",
          "classroom": "2by5qbn"
        }
      },
      "day5": {
        "1": {
          "classname": "數學",
          "teacher": "邱立璿",
          "classID": "1982584",
          "meet": "https://meet.google.com/znm-hbjm-tba",
          "classroom": "yiafrez"
        },
        "2": {
          "classname": "英語文",
          "teacher": "楊右銘",
          "classID": "1964370",
          "meet": "https://meet.google.com/zgx-ervc-ocz?authuser=0",
          "classroom": "2jdhkzl"
        },
        "3": {
          "classname": "全民國防教育",
          "teacher": "沈文偉",
          "classID": "2016208",
          "meet": "https://meet.google.com/yzg-vowh-xqj",
          "classroom": "nsbz4ge"
        },
        "4": {
          "classname": "健康與護理",
          "teacher": "陳怡如",
          "classID": "2047440",
          "meet": "https://meet.google.com/poz-mtpj-nuy",
          "classroom": "s4c22uy"
        },
        "5": {
          "classname": "技高課內社團-Javascript起步走",
          "teacher": "周祜民",
          "classID": "2058422",
          "meet": "",
          "classroom": ""
        },
        "6": {
          "classname": "技高課內社團-Javascript起步走",
          "teacher": "周祜民",
          "classID": "2058431",
          "meet": "",
          "classroom": ""
        },
        "7": {
          "classname": "團體活動(班會)",
          "teacher": "呂信寬",
          "classID": "1929467",
          "meet": "https://meet.google.com/gey-yzmu-hrj",
          "classroom": "gjblb6j"
        },
        "8": {
          "classname": "英語會話A(輔)",
          "teacher": "Paul",
          "classID": "1965273",
          "meet": "https://meet.google.com/vta-jmmk-wcn",
          "classroom": "3udljmv"
        }
      },
      "day6": {
        "1": {
          "classname": "",
          "teacher": "",
          "classID": "",
          "meet": "",
          "classroom": ""
        },
        "2": {
          "classname": "",
          "teacher": "",
          "classID": "",
          "meet": "",
          "classroom": ""
        },
        "3": {
          "classname": "",
          "teacher": "",
          "classID": "",
          "meet": "",
          "classroom": ""
        },
        "4": {
          "classname": "",
          "teacher": "",
          "classID": "",
          "meet": "",
          "classroom": ""
        },
        "5": {
          "classname": "",
          "teacher": "",
          "classID": "",
          "meet": "",
          "classroom": ""
        },
        "6": {
          "classname": "",
          "teacher": "",
          "classID": "",
          "meet": "",
          "classroom": ""
        },
        "7": {
          "classname": "",
          "teacher": "",
          "classID": "",
          "meet": "",
          "classroom": ""
        },
        "8": {
          "classname": "",
          "teacher": "",
          "classID": "",
          "meet": "",
          "classroom": ""
        }
      }
    }
  }
  return post2
}