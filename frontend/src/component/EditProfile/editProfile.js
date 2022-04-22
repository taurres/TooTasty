import Navbar from "../Navbar/navbar";
import React from "react";
import UserCard from "../ProfileScreen/userCard";
import EditProfileItem from "./editProfileItem";
import "./editProfile.css";

const EditProfile = () => {
    return(
        <>
            <div>
                <Navbar />
                <section className="header height-auto">
                    <div className="row">
                        <div className="col-4">
                            <UserCard />
                        </div>
                        <div className="col-8">
                            <EditProfileItem />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default EditProfile;