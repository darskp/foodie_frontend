import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";
const Food = () => {
    let title = "All Posts"
    let [posts, setPosts] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get("http://localhost:4000/posts")
            let data = await res.data;
            setPosts(data)
        }
        fetchData()
    })
    return (
        <div className="Food">
            <Banner data={title} />
            <div className="post_list d-flex flex-wrap my-5 mx-5 justify-content-evenly">
                {posts.map((post) => {
                    return (
                        <div className="post mt-3 mx-4 border border-dark px-4 pt-3 pb-2 rounded" key={post._id}>
                            <Link to={`/food/${post._id}`}><img src={post.image} className="rounded-2 homePostImage" width="300" height="350" alt="" /></Link>
                            <div className="info mt-3">
                                <h3 style={{ fontFamily: "inherit" }}>{post.title}</h3>
                                <p className="text-secondary">- Uploaded by {post.author}</p>
                                <Link to={`/home/food/${post._id}`} className="btn btn-dark mb-3 rounded-1 homeBtn">Read more 🡲</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Food;