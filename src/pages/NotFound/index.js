/* eslint-disable jsx-a11y/anchor-has-content */
import './index.css'

function NotFound() {
    return (
        <div>
            <div>
                <div className="starsec"></div>
                <div className="starthird"></div>
                <div className="starfourth"></div>
                <div className="starfifth"></div>
            </div>


            <div className="lamp__wrap">
                <div className="lamp">
                    <div className="cable"></div>
                    <div className="cover"></div>
                    <div className="in-cover">
                        <div className="bulb"></div>
                    </div>
                    <div className="light"></div>
                </div>
            </div>
            <section className="error">
                <div className="error__content">
                    <div className="error__message message">
                        <h1 className="message__title">404 不存在的頁面</h1>
                        <p className="message__text">很遺憾你跑到了不存在的頁面<br />希望這盞在飄來飄去的燈給已帶給你一絲絲的溫暖</p>
                        <div className="error__nav e-nav">
                        <a href="/" target="_blanck" className="e-nav__link"></a>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default NotFound