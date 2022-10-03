import './index.css'
import 'react-slideshow-image/dist/styles.css'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <br />
            <br />
            <h1 className='title1'>很明顯這是個首頁</h1>
            <br />
            {/* <Button variant="primary" size="lg" onClick={course}>查看課表</Button>{' '} */}
            <Link to="/course">
                查看課表
            </Link>
        </div>
    )
}

export default Home