import React from "react";

const UserDetail = () => {
  return(
      <>
          <div className="flex">
              <div className="text-white user-detail height-auto mt-5">
                  <h3>Username: Alice</h3>
                  <div className="">
                      <div className="">
                          <span><i className="fa fa-book"/></span>
                          <span> biobiobiobio</span>
                      </div>
                      <div className="">
                          <span><i className="fa fa-location-dot"/></span>
                          <span> Location</span>
                      </div>
                      <div className="">
                          <span><i className="fa fa-birthday-cake"/></span>
                          <span> Birthday</span>
                      </div>
                      <div className="icon-padding-right-5px">
                          <span className="bold-num"><i className="fa-solid fa-circle-dot"/> FollowingCount</span>
                          <span> Following</span>
                      </div>
                      <div className="icon-padding-right-5px">
                          <span className="bold-num"><i className="fa-solid fa-circle"/> FollowersCount</span>
                          <span> Followers</span>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}
export default UserDetail;