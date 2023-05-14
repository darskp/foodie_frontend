import { Routes, Route } from 'react-router-dom'
import Foodiehome from "./foodiehome";
import Navbar from './navbar';
import About from "./about";
import AddPost from './addpost';
import Food from './food';
import SinglePost from './Singlepost';
import Footer from './footer';

const HomePortal = () => {
    return (
        <div className='HomePortal'>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Foodiehome />} />
                <Route path='/about' element={<About/>} />
                <Route path='/add-post' element={<AddPost/>} />
                <Route path='/food' element={<Food/>} />
                <Route path='/food/:id' element={<SinglePost/>} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default HomePortal;