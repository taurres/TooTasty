
import "./restaurant.css"
import React, { useState, useEffect } from "react";
import RestaurantDetail from "../RestaurantDetail/RestaurantDetail";
import NavSearchBar from "../NavSearchBar/NavSearchBar";
import RestaurantReview from "../RestaurantReview/RestaurantReview";

const RestaurantScreen = () => {

return (
    <>
        <NavSearchBar />
        <RestaurantDetail />
        <RestaurantReview />
    </>
);
 }
export default RestaurantScreen;
