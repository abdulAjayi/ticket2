import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Upload from "../assets/Frame.png";

const Nav = () => {
    const Navigate = useNavigate()
    return ( 
        <div>
            <div className="bg-deep3 border border-lighterDeep px-4 py-3 md:flex justify-between md:mb-3 items-center rounded-3xl mx-auto hidden">
                <div>

                </div>
                <div className="flex">
                    <div className="rounded-full h-3 bg-[052F35] border border-lighterDeep"></div>
                    <div>
                        <img src={Upload} alt="" />
                    </div>
                </div>
                <div className="flex gap-x-4">
                    <Link to="/" className="text-white">Events</Link>
                    <Link to="/form" className="text-lightGray">My Tickets</Link>
                    <Link to="/Ticket" className="text-lightGray">About Project</Link>
                </div>
                <button className="px-6 py-4 rounded-xl bg-white" onClick={ () => {Navigate("/Ticket")}}>My Tickets →
                </button>
            </div>
        </div>
     );
}
 
export default Nav;