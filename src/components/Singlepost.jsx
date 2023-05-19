import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Banner from "./Banner";

const SinglePost = () => {
    let [x, setPost] = useState([])
    let params = useParams()
    useEffect(() => {
        let fetchData = async () => {
            const res = await axios.get(`http://localhost:4000/posts/${params.id}`)
            const data = await res.data;
            console.log(data);
            setPost(data);
        }
        fetchData()
    }, [params])
    let title = "Single Post";
    return (
        <div className="sp">
            <Banner data={title} />
            <div className="card mb-3 mx-auto my-5 px-4 py-2" style={{ maxWidth: '540px' }}>
                <div className="row g-0  text-center">
                    <div className="col-md-4">
                        <img className="img-fluid rounded-start" src={x.image} height="300" width="250" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{x.title}</h4>
                            <p className="card-text"><small className="text-muted">Author: {x.author}</small></p>
                            <p className="card-text mx-auto">{x.summary}</p>
                        </div>
                    </div>
                </div>
                <div className="row my-3 mx-auto">
                    <div className="col-12">
                        {/* <iframe src={x.location} width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePost;