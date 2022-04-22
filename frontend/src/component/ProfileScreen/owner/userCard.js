import {Link} from "react-router-dom";
import './userprofile.css'
const UserCard = () => {
    return(
        <>
            <div className="user-card user-card-flex">
                <div className="m-5">
                    <img src="./img/top-liked-1.jpg" alt=""/>
                    <h3 className="user-card-name text-white">Alice <button type="button" className="btn btn-primary">Follow</button></h3>
                    <p className="text-white">I love eatting!</p>

                    <ul className="list-group mb-4">
                        <li className="list-group-item"><Link to="#">Follower</Link></li>
                        <li className="list-group-item"><Link to="#">Following</Link></li>
                        {/*<li className="list-group-item"><Link to="#">Reviews</Link></li>*/}
                        {/*<li className="list-group-item"><Link to="#">Favourite restaurants</Link></li>*/}
                    </ul>
                    <Link to="/edit">
                        <button type="reset" className="btn btn-outline-white">Edit Profile</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default UserCard;