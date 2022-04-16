import Navbar from '../Navbar/navbar';
import React from "react";
import UserCard from "./userCard";
import UserDetail from "./userDetail";
import UserReviews from "./userReviews";
import FavouriteRes from "../HomeScreen/favouriteRes";

const UserProfile = () => {
  return(
      <>
          <div>
              {Navbar()}
              <section className="header height-auto">
                  <div className="row">
                      <div className="col-4">
                          {UserCard()}
                      </div>
                      <div className="col-8">
                          {UserDetail()}
                          {UserReviews()}
                          {FavouriteRes()}
                      </div>
                  </div>
              </section>
          </div>
      </>
  )
}
export default UserProfile;