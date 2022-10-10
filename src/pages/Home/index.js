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
            &emsp;
            <Button variant="primary" href="/people" size="lg">點我查看人物</Button>{' '}
            <br />
            <br />
            <Button variant="primary" href="/note" size="lg">點我查看筆記</Button>{' '}
            &emsp;
            <Button variant="primary" href="/test" size="lg">點我查看測試</Button>{' '}
        </div>
    )
}

export default Home