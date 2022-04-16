import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Searchbar from "../Searchbar/searchbar";
import TopLikedRes from "../HomeScreen/topLikedRes";
import RecentReviewedRes from "../HomeScreen/recentReviewedRes";

const Register = () => {
    return (
        <>
            <div className="">
                <section className="header">
                    {Navbar()}
                    <div className="flex height-100vh">
                        <div className="log-in-form-box height-50vh">
                            <h3 className="text-white mt-2">Sign up</h3>
                            <button type="button" className="btn btn-outline-primary hero-btn"><Link to="/register/privacy">Review Privacy Policy</Link></button>
                            <input className="m-2" type="text" placeholder="username"/>
                            <input className="m-2"type="password" placeholder="password"/>
                            <input className="m-2"type="password" placeholder="email"/>
                            <input className="m-2" type="text" placeholder="location"/>
                            <input className="m-2"type="date" placeholder="birthday"/>
                            <button type="button" className="btn btn-outline-primary hero-btn">Sign up</button>
                            <span className="text-white m-1">Already have an account? <Link to="/login">Log in</Link></span>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Register;