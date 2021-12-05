import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "../Components/Search";
import Profile from "../Components/Profile";

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