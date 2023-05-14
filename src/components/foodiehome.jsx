import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Foodiehome = () => {
    let [posts, setPosts] = useState([])
    useEffect(() => {
        let fetchData1 = async () => {
            let res = await axios.get("http://localhost:4000/posts")
            let data = await res.data;
            console.log(data);
            setPosts(data);
        }
        fetchData1()
    }, [])
    let summaryLength=(summary)=>{
        if(summary.length){
    return `${summary.substring(0,50)}.....`
        }else{
            return `${summary.substring(0, 50)}`
        }
    }
    
    return (
        <div className="homepage">
            <div className="container homepage-hero">
                <div className="row">
                    <div className="col-lg-8 col-sm-12 p-0 customimage">
                    </div>
                    <div className="text-lg-start text-sm-center col-lg-4 col-sm-12 p-5 pe-lg-4" style={{ backgroundColor: '#FFD617' }}>
                        <p className="fs-6 text-uppercase mt-3" style={{ color: 'rgba(0, 0, 0, 0.5)', letterSpacing: '3px' }}>Featured Posts</p>
                        <h2 className="mb-lg-2 mb-sm-4 mt-lg-2 addInfo fw-bold">Love the Delicious & Tasty Foods</h2>
                        <span className="hr mb-lg-4 mb-sm-3 bg-dark"></span>
                        <p className="fs-5" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                        {/* <a href="#" className="fs-sm-6 fs-lg-5 mt-4 btn rounded-1 px-4 py-3 caddbtn" >Add a Post<span className="ms-4"><img src="images/icons8-arrow-24.png" height="18px" alt="" /></span></a> */}
                        <Link to='/home/add-post' className="fs-sm-6 fs-lg-5 mt-4 btn rounded-1 px-4 py-3 caddbtn">Add a Post<span className="ms-4"><img src="images/icons8-arrow-24.png" height="18px" alt="" /></span></Link>
                    </div>
                </div>
                {/* recent-stories-section */}
                <div className="container my-3 recent-stories-section">
                    <div className="row title">
                        <h2 className="clogo text-left py-4 px-0">Recent Stories<span>.</span></h2>
                    </div>
                    <div className="row">

                        <div className="col-lg-7 col-sm-12">
                            <div className="d-flex flex-wrap justify-content-evenly">
                                {
                                    posts.map(post => {
                                        return (
                                            <div className="card my-2" style={{ width: '18rem' }} key={post._id}>
                                                <img src={post.image} className="card-img-top" alt={post.title} width="300" height="350" />
                                                <div className="card-body">
                                                    <h5 className="card-title fs-4">{post.title}</h5>
                                                    <div className="py-2">
                                                        <p className="card-text mx-auto">{summaryLength(post.summary)}</p>
                                                    </div>

                                                    <Link to={`/home/food/${post._id}`} className="mt-4 text-decoration-none readmorebtn" >Read More<span className="ms-4"><img src="images/go-to.png" className="text-danger" height="20px" alt="" /></span></Link>
                                                    {/* <a href="#" className="mt-4 text-decoration-none readmorebtn" >Read More<span className="ms-4"><img src="images/go-to.png" className="text-danger" height="20px" alt="" /></span></a> */}
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                        <div className="storiesImg col-lg-5 col-sm-12 p-5 position-relative">
                            <div className="ps-4 position-absolute bottom-0 mb-5 start-0">
                                <span style={{ color: '#FFD617', display: 'block' }}>FOODS</span>
                                <a href="#" className="fw-bld fs-1 btn ps-0 text-light">Tasty & Delicious Foods</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Foodiehome;