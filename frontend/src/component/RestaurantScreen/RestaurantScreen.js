
import "./restaurant.css"
import React, { useState, useEffect } from "react";
import RestaurantDetail from "../RestaurantDetail/RestaurantDetail";

import Navbar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import RestaurantReview from "../RestaurantReview/RestaurantReview";
import RestaurantDetails from "../RestaurantDetail/RestaurantDetail";

const RestaurantScreen = () => {

return (
    <>
        <Navbar />
        <RestaurantDetails />
        <RestaurantReview />
    </>
);
 }
export default RestaurantScreen;
