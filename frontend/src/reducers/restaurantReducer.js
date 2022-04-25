import restaurants from "../data/restaurant.json";

const restaurantReducer =(state=restaurants, action) =>{
    switch(action.type){
        case 'find-restaurant':
            return state;
        case 'like-restaurant':
            return state.map(restaurant => {
                if(restaurant._id === action.restaurant._id) {
                    if(restaurant.liked === true) {
                        restaurant.liked = false;
                        restaurant.stats.numLikes--;
                    } else {
                        restaurant.liked = true;
                        restaurant.stats.numLikes++;
                    }
                    return restaurant;
                } else {
                    return restaurant;
                }
            });

        default:
            return restaurants;
    }
}

export default restaurantReducer;