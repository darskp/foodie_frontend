import Banner from "./Banner";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const About = () => {
    let title = 'About Us';
    let [posts, setPosts] = useState([])
    let [users, setUsers] = useState([])
    useEffect(() => {
        let fetchData1 = async () => {
            let res = await axios.get("http://localhost:4000/posts")
            let data = await res.data;
            setPosts(data);
        }
        fetchData1()
    }, [])

    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get("http://localhost:4000/users");
            let data = await res.data;
            setUsers(data);
        }
        fetchData()
    }, [])


    return (
        <div className="about">
            <Banner data={title} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 mb-5">
                        <img src="../images/bg_1.jpg.webp" height="700px" width="100%" alt="Responsive" />
                    </div>
                    <div className="col-lg-6 col-sm-12 px-lg-4 my-lg-4 my-sm-2">
                        <div className="">
                            <div className="card-body px-2">
                                <h2 className="clogo text-left py-4">About Stories<span>.</span></h2>
                                <p className="fs-5" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                                <div class="container my-5 text-center">
                                    <div class="row g-4">
                                        <div class="col-lg-6 col-sm-12">
                                            <div class="px-4 py-4 bg-light">
                                                <h2 className="fw-bold">10</h2>
                                                <p>Years of Experienced</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-sm-12">
                                            <div class="px-4 py-4 bg-light">
                                                <h2 className="fw-bold">{posts.length}</h2>
                                                <p>Foods</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-sm-12">
                                            <div class="px-4 py-4 bg-light">
                                                <h2 className="fw-bold">300</h2>
                                                <p>LifeStyle</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-sm-12">
                                            <div class="px-4 py-4 bg-light">
                                                <h2 className="fw-bold">{users.length}</h2>
                                                <p>Happy Customers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;