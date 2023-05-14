import { Link, useNavigate } from "react-router-dom";
import Banner from "./Banner";
import { useState } from "react";
import axios from "axios"
const AddPost = () => {
    let [author, setAuthor] = useState('');
    let [title, setTitle] = useState('');
    let [summary, setSummary] = useState('');
    let [image, setImage] = useState('');
    let [location, setLocation] = useState('');
    let naviagate=useNavigate()
    let addPosthandle = (e) => {
        e.preventDefault();
        let data = { author, title, summary, image, location }
        console.log(data);
        if (author && title && summary && image && location) {
            axios.post('http://localhost:4000/add-post', data)
                .then((res) => {
                    alert(res.data.message);
                    naviagate('/home')
                }).catch(res => {
                    alert(res.data.message);
                })
        } else {
            alert('Please fill all the details')
        }
    }
    return (
        <div className="addPost" >
            <Banner data="Add Your Post" />
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 mb-5">
                        <img src="../images/bg_1.jpg.webp" height="700px" width="100%" className="rounded-1" alt="Responsive image" />
                    </div>
                    <div className="col-lg-6 col-sm-12 px-lg-4">
                        <h2>Add Post</h2>
                        <span className="hr mb-lg-4 mb-sm-3 bg-dark"></span>
                        <div className="container">
                            <div className="form">
                                <form action="" onSubmit={addPosthandle}>
                                    <div className="author form-group my-4">
                                        <label htmlFor="author" className="mb-2">Author</label>
                                        <input type="text" className="form-control" value={author} onChange={(e) => { setAuthor(e.target.value) }} name="author" placeholder="Author" />
                                    </div>
                                    <div className="title form-group my-4">
                                        <label htmlFor="title" className="mb-2">Title</label>
                                        <input type="text" className="form-control" value={title} onChange={(e) => { setTitle(e.target.value) }} name="title" placeholder="Title of the post" />
                                    </div>
                                    <div className="Summary form-group my-4">
                                        <label htmlFor="Summary" className="mb-2">Summary</label>
                                        <textarea id="" cols="30" rows="5" value={summary} onChange={(e) => { setSummary(e.target.value) }} className="form-control" name="summary" placeholder="Summary of the post"></textarea>
                                    </div>
                                    <div className="image form-group my-4">
                                        <label htmlFor="image" className="mb-2">Image</label>
                                        <input type="text" className="form-control" value={image} onChange={(e) => { setImage(e.target.value) }} name="image" placeholder="image of the post" />
                                    </div>
                                    <div className="Location form-group my-4">
                                        <label htmlFor="Location" className="mb-2">Location</label>
                                        <input type="text" className="form-control" value={location} onChange={(e) => { setLocation(e.target.value) }} name="location" placeholder="Location of the post" />
                                    </div>
                                    <div className="my-4">
                                        {/* <Link to="/" className="btn btn-success">Add Post</Link> */}
                                        <button className="btn btn-success">Add Post</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AddPost;