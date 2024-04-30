import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Changed alias to 'Router'
import ProfileList from "./Component/ProfileList";
import ProfileMap from "./Component/ProfileMap";
import profilesData from "./data/profiles.json"
import ProfileDetails from "./Page/Users/User/ProfileDetails";
//import NavBar from "./Component/Navigation/NavBar";
import AddUser from "./Page/Users/Admin/AddUser";


function App() {
  return (
    <div className="bg-blue-50">
    
      <Router>
        <Routes>
          <Route exact path="/" element={<ProfileList profiles={profilesData} />} />
          <Route path="/map/:profileId/:latitude/:longitude" element={<ProfileMap />} />
          <Route path="/details/:id" element={<ProfileDetails />} />
       <Route path="/add" element={<AddUser />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
