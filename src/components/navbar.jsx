import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-white bg-white py-4">
                <div className="container">
                    <a className="navbar-brand" href="/home"><h2 className="clogo fw-bold">Stories<span>.</span></h2></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse cnav" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-flex-start">
                            <li className="nav-item">
                                <Link className="btn text-dark" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn text-dark" to="/home/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn text-dark" to="/home/food">Posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn text-dark" to="/home/add-post">Add Post</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn text-dark" to="/">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;