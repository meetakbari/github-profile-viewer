import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "../Pages/Search";
import Profile from "../Pages/Profile";

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Search />} />
                <Route path="/:id" exact element={<Profile />} />
            </Routes>
        </Router>
    )
}

export default Routing;