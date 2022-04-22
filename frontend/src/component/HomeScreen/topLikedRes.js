import HomepageCardElement from "./homepageCardElement";
import {Link} from "react-router-dom";

const TopLikedRes = () => {
  return(
      <>
          <div className="mt-5 m-3 flex">
              <h1 className="text-white">This is TOP liked restaurant!</h1>
          </div>
          <div className="flex p-2">

              <div className="m-2">
                  {/*{HomepageCardElement()}*/}
                  <Link to="/tootasty/restaurant">
                      <div className="card homepage-card-img">
                          <img src="../img/top-liked-1.jpg" alt=""/>
                          <div className="text">
                              <h2>Sumiao Hunan Kitchen</h2>
                              <p>address</p>
                              <p><i className="fa-solid fa-heart"/> liked by 100 users</p>
                          </div>
                      </div>
                  </Link>
              </div>
              <div className="m-2">
                  {/*{HomepageCardElement()}*/}
                  <a href="#">
                      <div className="card homepage-card-img">
                          <img src="../img/top-liked-2.jpg" alt=""/>
                          <div className="text">
                              <h2>NAME</h2>
                              <p>address</p>
                              <p><i className="fa-solid fa-heart"/> liked by 100 users</p>
                          </div>
                      </div>
                  </a>
              </div>
              <div className="m-2">
                  {/*{HomepageCardElement()}*/}
                  <a href="#">
                      <div className="card homepage-card-img">
                          <img src="../img/top-liked-3.jpg" alt=""/>
                          <div className="text">
                              <h2>NAME</h2>
                              <p>address</p>
                              <p><i className="fa-solid fa-heart"/> liked by 100 users</p>
                          </div>
                      </div>
                  </a>
              </div>

          </div>
      </>
  )
}
export default TopLikedRes;