import './index.css'
import 'react-slideshow-image/dist/styles.css'
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
    <div>
        <br />
        <br />
        <h1 className='title1'>很明顯這是個首頁</h1>
        <br />
        <Button variant="primary" href="/course" size="lg">查看課表</Button>{' '}
    </div>
    )
}

export default Home