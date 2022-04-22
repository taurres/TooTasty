import * as React from 'react';
import {Link} from "react-router-dom";


const EditProfileItem = () => {
    return (
        <>

        <form className="pt-5 form-width">
            <div className="form-group my-2 ">
                <label htmlFor="name" className="form-label mx-3 font-white"> First Name</label>
                <input
                    required
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="name"
                    //value={name}
                    //onChange={(event) => setProfileName(event.target.value)}
                />
            </div>

            <div className="form-group my-2 ">
                <label htmlFor="name" className="form-label mx-3 font-white"> Last Name</label>
                <input
                    required
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="name"
                    //value={name}
                    //onChange={(event) => setProfileName(event.target.value)}
                />
            </div>

            <div className="form-group my-2 ">
                <label htmlFor="bio" className="form-label mx-3 font-white">Bio</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="bio"
                    //value={bio}
                    //onChange={(event) => setProfileBio(event.target.value)}
                />
            </div>

            <div className="form-group my-2 ">
                <label htmlFor="location" className="form-label mx-3 font-white">Location</label>
                <input
                    type="text"
                    className="form-control "
                    placeholder="location"
                    // value={location}
                    //onChange={(event) => setProfileLocation(event.target.value)}
                />
            </div>

            <div className="form-group my-2">
                <label htmlFor="dateOfBirth" className="form-label mx-3 font-white">Date of birth</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="birth"
                    value=""
                    // onChange={(event) => setProfileDateOfBirth(event.target.value)}
                />
            </div>
        </form>

            <div className="position-relative btn-pos align-self-center my-2 pt-2">
                <Link to="/profile">
                    <button //onClick={()=>editProfileClickHandler(profile)}
                        className="btn btn-primary">Save</button>
                </Link>
            </div>

    </>
    );
}
export default EditProfileItem;