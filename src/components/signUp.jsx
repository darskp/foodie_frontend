import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
//axios - to manage the http request
import axios from "axios"
const Signup = () => {
    let navigate = useNavigate();
    let [name, setName] = useState('');
    let [phonenumber, setPhonenumber] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [confirmpassword, setConfirmpassword] = useState('');
    let handlesubmit = (e) => {
        e.preventDefault();
        let data = { name, phonenumber, email, password, confirmpassword };
        //using fetch
        // if (name && phonenumber && email && (password === confirmpassword)) {
        //     let fetching = async () => {
        //         try {
        //             let response = await fetch('http://localhost:4000/signup', {
        //                 method: 'POST',
        //                 headers: {
        //                     'Content-Type': 'application/json'
        //                 },
        //                 body: JSON.stringify(data)
        //             });
        //             let res = await response.json();
        //            alert(res.message);
        //             navigate('/')
        //         }
        //         catch (err) {
        //             alert(err);
        //         }
        //     }
        //     fetching();
        // } else {
        //     alert('Invalid credentials')
        // }

        //using axios
        if (name && phonenumber && email && (password === confirmpassword)) {
            axios.post('http://localhost:4000/signup', data)
                .then((res) => {
                    alert(res.data.message);
                    navigate('/')
                })
        } else {
            alert('Invalid credentials')
        }
    }
    return (
        <div className="mt-5">
            {/* <Navbar /> */}
            <div className="container p-4 text-center">
                <div className="row">
                    <div className="col-sm-12 col-lg-6" style={{ float: 'none', margin: 'auto' }}>
                        <div className="card mx-auto my-2 shadow">
                            <div className="card-body">
                                <div className="signup">
                                    <h1>Sign Up</h1>
                                    <div className="signup_form">
                                        <form action="" onSubmit={handlesubmit}>
                                            <div className="Name my-4">
                                                <input type="text" className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} name="name" placeholder="Enter your name" />
                                            </div>
                                            <div className="mobile_number my-4">
                                                <input type="text" className="form-control" value={phonenumber} onChange={(e) => { setPhonenumber(e.target.value) }} name="number" placeholder="Enter your Mobile Number" />
                                            </div>
                                            <div className="email my-4">
                                                <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder="Enter your email" />
                                            </div>
                                            <div className="password my-4">
                                                <input type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="Enter your password" />
                                            </div>
                                            <div className="confirm_password my-4">
                                                <input type="password" className="form-control" value={confirmpassword} onChange={(e) => { setConfirmpassword(e.target.value) }} name="confirm_password" placeholder="Enter your confirm-password" />
                                            </div>
                                            <div className="sign_button my-2">
                                                <button className="btn btn-primary">Signup</button>
                                            </div>
                                            <div className="login_button">
                                                <div className="row">
                                                    <div className="col-md-12"><p>Already a user?</p>
                                                        <Link to="/" className="btn btn-outline-primary">Login</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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

export default Signup;