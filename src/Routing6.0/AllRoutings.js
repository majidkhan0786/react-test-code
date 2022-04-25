import One from "./RoutesPages/One";
import Two from "./RoutesPages/Two";
import Three from "./RoutesPages/Three";
import Nav from "./RoutesPages/Nav";
import Notfound from "./RoutesPages/404Page";
import User from "./RoutesPages/useParams/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const AllRouting = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<One />} />
            <Route path="two" element={<Two />} />
            <Route path="three" element={<Three />} />
            <Route path="user/:name" element={<User />} />
            <Route path="/*" element={<Notfound />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};
export default AllRouting;
