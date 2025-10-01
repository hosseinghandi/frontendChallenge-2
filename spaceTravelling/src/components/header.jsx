import { Link } from "react-router-dom";
import logo from "starter-code/assets/shared/logo.svg"
function Header() {
    return(
        <>

        <div className="">

        </div>


        <nav>
            <Link to="/crew.jsx">Crew</Link> |{" "}
            <Link to="/Destination.jsx">Destination</Link> |{" "}
            <Link to="/Technology.jsx">Technology</Link>
        </nav>
        
        </>
    )
}
export default Header