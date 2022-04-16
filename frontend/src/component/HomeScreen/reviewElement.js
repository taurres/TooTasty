import {Link} from "react-router-dom";

const ReviewElement = () => {
  return(
      <>
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
      </>
  )
}
export default ReviewElement;