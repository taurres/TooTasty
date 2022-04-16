import Rating from "../Rating/Rating";
import RestaurantReview from "../RestaurantReview/RestaurantReview";
import React from "react";


const RestaurantDetail = () => {

    return(
        <>
            <section className="header height-auto">
            <div className="container ps-0 pe-0">
                <div className="row">
                    <div className="position-relative">
                        <img src="https://assets3.thrillist.com/v1/image/2910422/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70" className="card-img-top banner-height" alt=""/>
                    </div>
                    <div className="position-absolute img-title-pos">
                        <h1 className="restaurant-title ">Restaurant Name</h1>
                        <ul className="list-inline font-orange-bolder">
                            <li className="list-inline-item ">
                                <Rating value="3.5"/>
                            </li>
                            <li className="list-inline-item"><i className="fa fa-user-o"></i> 123 Reviews</li>
                        </ul>

                        <ul className="list-inline font-orange-bolder">
                            <li className="list-inline-item"><i className="fa-solid fa-calendar-days"></i> Open </li>
                            <li className="list-inline-item ps-2"><i className="fa-solid fa-utensils"></i> Asian Chinese </li>
                            <li className="list-inline-item ps-2"> price $$</li>
                        </ul>
                        <ul className="list-inline font-orange-bolder">
                            <li className="list-inline-item"><i className="fa-solid fa-location-arrow"></i> Location
                            </li>
                        </ul>
                        <div>
                            <button type="button" className="btn btn-primary">Write Review</button>

                            <button type="button" className="btn btn-primary ms-4">Save</button>
                        </div>
                    </div>
            </div>
            </div>
            </section>

        </>

    );
}

export default RestaurantDetail;

