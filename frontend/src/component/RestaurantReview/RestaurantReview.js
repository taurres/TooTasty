import ReviewRating from ".//ReviewRating";
import LetterAvatars from "../Avatar/LetterAvatars";
import ReviewItems from "./ReviewItems";
import Rating from "../Rating/Rating";

const RestaurantReview = () => {

    return(

             <div className="container">
                <div className="row">
                    <div className="product-page-content">
                        <ul className="nav nav-tabs">
                            <li className="nav-item active">
                                <a class="nav-link active" data-bs-toggle="tab" href="#Reviews" >Reviews (123)</a>
                            </li>
                        </ul>

                        <div id="myTabContent" className="tab-content">
                            <div className="tab-pane fade active show" id="Reviews">
                                {/*<ReviewItems />*/}

                                     {/*<div className="review-item clearfix">*/}
                                     {/*    <div className="review-item-submitted">*/}
                                <div className="review-item clearfix">
                                    <div className="grid-image-left">
                                        <LetterAvatars name={'Bob Smith'}/>
                                    </div>

                                    <div className="name-heading">
                                        <strong>Bob</strong>
                                        <br/>
                                        <em>16/04/2022 - 07:37</em>
                                        <i
                                                         // onClick={() =>
                                                         // deleteReview(dispatch, review)}
                                            className="fas fa-remove fa-pull-right"></i>
                                    </div>
                                </div>


                        {/*        /!*<div className="rateit" data-rateit-value="5" data-rateit-ispreset="true" *!/*/}
                        {/*        /!*     data-rateit-readonly="true"></div>*!/*/}

                        {/*                 /!*</div>*!/*/}

                                <div className="review-item-content">
                                    <Rating value={3.5} />
                                    <p>Sed velit quam, auctor id semper a, hendrerit eget justo. Cum sociis natoque
                                                 penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vel
                                                 arcu pulvinar dolor tempus feugiat id in orci. Phasellus sed erat leo. Donec
                                                 luctus, justo eget ultricies tristique, enim mauris bibendum orci, a sodales
                                                 lectus purus ut lorem.</p>
                                </div>

                            </div>
                        </div>


                        <form action="#" className="reviews-form" role="form">
                            <h2>Write a review</h2>
                            <div className="form-group">
                                <label htmlFor="review">Review <span className="require"></span></label>
                                <textarea className="form-control" rows="8" id="review"></textarea>
                            </div>

                            <ReviewRating />
                            <div className="padding-top-20">
                                <button type="submit" className="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
             </div>

    );
}

export default RestaurantReview;