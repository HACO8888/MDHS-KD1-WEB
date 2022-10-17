import './index.css'
import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-bootstrap-icons'
// import Badge from 'react-bootstrap/Badge';
// import Button from 'react-bootstrap/Button';

const Home = () => {

    return (
        <div className="select-none">
            <br />
            <br />
            <h1 className='text-4xl'>很明顯這是個首頁</h1>
            <br />
            <br />
            <a href='/course'><button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:w-[25%] w-[80%] h-20">點我查看課表</button></a>
            <a href='/people'><button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:w-[25%] w-[80%] h-20">點我查看人物</button></a>
            <br />
            <a href='/note'><button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:w-[25%] w-[80%] h-20">點我查看筆記</button></a>
            <a href='/test'><button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:w-[25%] w-[80%] h-20">點我查看測試</button></a>
        </div>
    )
}

export default Home