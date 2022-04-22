import {Link} from "react-router-dom";
import './userprofile.css'
import LetterAvatars from "../../EditProfile/letterAvatars";
import React from "react";
const UserCard = ({profile}) => {
    return(
        <>
            <div className="user-card user-card-flex">
                <div className="m-5">
                    <div className="avatar-position-profile">
                        <LetterAvatars name={profile.name}/>
                    </div>
                    <h3 className="user-card-name text-white">Alice <button type="button" className="btn btn-primary">Follow</button></h3>
                    <p className="text-white">I love eatting!</p>

                    <ul className="list-group mb-4">
                        <li className="list-group-item"><Link to="#">Follower</Link></li>
                        <li className="list-group-item"><Link to="#">Following</Link></li>
                        {/*<li className="list-group-item"><Link to="#">Reviews</Link></li>*/}
                        {/*<li className="list-group-item"><Link to="#">Favourite restaurants</Link></li>*/}
                    </ul>
                    <Link to="/tootasty/edit">
                        <button type="reset" className="btn btn-outline-white">Edit Profile</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default UserCard;