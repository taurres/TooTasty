import {Link} from "react-router-dom";
import ReviewElement from "./reviewElement";

const FavouriteRes = () => {
  return(
      <>
          <div className="mt-5 m-3 flex">
              <h1 className="text-white">You Favourite restaurant</h1>
          </div>

          <div className="flex p-2">
              <ul className="list-group">
                  {/*{ReviewElement()}*/}
                  <Link to="#">
                      <li className="text-white list-group-item d-flex justify-content-between align-items-center">
                          <div className="homepage-list-child">
                              <img src="./img/top-liked-1.jpg" alt=""/>
                              <div className="text p-2">
                                  <h2>NAME</h2>
                                  <p>address:</p>
                                  <p>reviews:</p>
                              </div>
                          </div>
                          <span><p ><i className="fa-solid fa-heart"/> 100 likes</p></span>
                      </li>
                  </Link>
                  <Link to="#">
                      <li className="text-white list-group-item d-flex justify-content-between align-items-center">
                          <div className="homepage-list-child">
                              <img src="./img/top-liked-2.jpg" alt=""/>
                              <div className="text p-2">
                                  <h2>NAME</h2>
                                  <p>address:</p>
                                  <p>reviews:</p>
                              </div>
                          </div>
                          <span ><p><i className="fa-solid fa-heart"/> 100 likes</p></span>
                      </li>
                  </Link>
                  <Link to="#">
                      <li className="text-white list-group-item d-flex justify-content-between align-items-center">
                          <div className="homepage-list-child">
                              <img src="./img/top-liked-3.jpg" alt=""/>
                              <div className="text p-2">
                                  <h2>NAME</h2>
                                  <p>address:</p>
                                  <p>reviews:</p>
                              </div>
                          </div>
                          <span ><p><i className="fa-solid fa-heart"/> 100 likes</p></span>
                      </li>
                  </Link>
              </ul>
          </div>
      </>
  )
}
export default FavouriteRes;