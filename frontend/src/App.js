import './App.css';
import './vendors/css/index.css'
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import RestaurantScreen from "./component/RestaurantScreen/restaurantScreen";
import HomeScreen from "./component/HomeScreen/homescreen";
import EditProfile from "./component/EditProfile/editProfile";
//import UserProfile from "./component/ProfileScreen/user/userProfile";
import ProfileScreen from "./component/ProfileScreen/profileScreen";
import TooTasty from "./component";


function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<HomeScreen/>}/>

                    <Route path="tootasty" element={<TooTasty/>}>
                        <Route path="home" element={<HomeScreen/>}/>
                        <Route path="restaurant" element={<RestaurantScreen/>}/>
                        <Route path="profile" element={<ProfileScreen/>}/>
                        <Route path="edit" element={<EditProfile/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
