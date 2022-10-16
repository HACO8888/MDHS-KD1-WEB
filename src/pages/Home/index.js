import './index.css'
import 'react-slideshow-image/dist/styles.css'
// import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div>
            <br />
            <br />
            <h1 className='title1'>很明顯這是個首頁</h1>
            <br />
            <Button className='text-lg text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-3 text-center mr-2 mb-2' href="/course">點我查看課表</Button>{' '}
            <Button className='text-lg text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-3 text-center mr-2 mb-2' href="/people">點我查看人物</Button>{' '}
            <br />
            <Button className='text-lg text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-3 text-center mr-2 mb-2' href="/note">點我查看筆記</Button>{' '}
            <Button className='text-lg text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-3 text-center mr-2 mb-2' href="/test">點我查看測試</Button>{' '}
        </div>
    )
}

export default Home