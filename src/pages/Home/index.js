import './index.css'
import 'react-slideshow-image/dist/styles.css'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div>
            <br />
            <br />
            <h1 className='title1'>很明顯這是個首頁</h1>
            <br />
            <Button variant="primary" href="/course" size="lg">點我查看課表</Button>{' '}
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3><Badge bg="warning">建議您使用電腦瀏覽網站</Badge></h3>
            <br />
            <h3><Badge bg="info">如果您使用手機建議您轉為橫向瀏覽網站</Badge></h3>
        </div>
    )
}

export default Home