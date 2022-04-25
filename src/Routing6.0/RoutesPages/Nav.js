
import { Link } from "react-router-dom";
 const Nav =()=>{
     return(
         <>
         <div>
         <Link to="/login" >Login</Link> <br/>
         <Link to="/mainpage" >Main Page</Link> <br/>
             <Link to="/" >One</Link> <br/>
             <Link to="/two">Two</Link> <br/>
             <Link to="/three" >Threee</Link> <br/>
             <Link to="/user/majid" >User One</Link> <br/>
             <Link to="/user/danish" >User Two </Link> <br/>
         </div>
         </>
     )
 }
 export default Nav;