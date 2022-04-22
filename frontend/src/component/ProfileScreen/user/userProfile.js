import Navbar from '../../Navbar/navbar';
import UserCard from "./userCard";
import UserDetail from "./userDetail";
import UserReviews from "./userReviews";
import FavouriteRes from "../../HomeScreen/favouriteRes";
import React, {useState, useEffect}  from "react";
import {useSelector, useDispatch} from "react-redux";


const UserProfile = ({profile}) => {


  return(
      <>
              <Navbar />
              <section className="header height-auto">
                  <div className="row">
                      <div className="col-4">
                          <UserCard profile={profile}/>
                      </div>
                      <div className="col-8">
                          <UserDetail />
                          <UserReviews />
                          <FavouriteRes />
                      </div>
                  </div>
              </section>
      </>
  )
}
export default UserProfile;