import './App.css';
import './vendors/css/index.css'
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import RestaurantScreen from "./component/RestaurantScreen/restaurantScreen";
import UserProfile from "./component/ProfileScreen/userProfile";
import HomeScreen from "./component/HomeScreen/homescreen";
import EditProfile from "./component/EditProfile/editProfile";


function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/home" element={<HomeScreen/>}/>
                <Route path="/profile" element={<UserProfile/>}/>
                <Route path="/restaurant" element={<RestaurantScreen/>}/>
                <Route path="/edit" element={<EditProfile/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
